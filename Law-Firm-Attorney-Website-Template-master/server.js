import { createServer } from "node:http";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { request as httpsRequest } from "node:https";

const root = fileURLToPath(new URL(".", import.meta.url));
const dataDir = join(root, "data");
const dbPath = join(dataDir, "database.json");

async function loadEnv() {
  try {
    const envText = await readFile(join(root, ".env"), "utf8");
    for (const line of envText.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const separator = trimmed.indexOf("=");
      if (separator === -1) continue;
      const key = trimmed.slice(0, separator).trim();
      const value = trimmed.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
      if (key && process.env[key] === undefined) {
        process.env[key] = value;
      }
    }
  } catch {
    // .env is optional; server still runs and reports missing EmailJS config.
  }
}

await loadEnv();

const port = Number(process.env.PORT || 8081);
const recipientEmail = process.env.RECIPIENT_EMAIL || "peoplelegalsolution@gmail.com";
const huggingFaceToken = process.env.HUGGINGFACE_API_TOKEN;
const huggingFaceModel = process.env.HUGGINGFACE_MODEL || "HuggingFaceH4/zephyr-7b-beta";
const lawyerName = "Gopal Datt Pandey";
const lawyerPhone = "9851089120";
const plarKnowledge = [
  "PLAR means People's Legal Associates and Researcher.",
  "PLAR is a Kathmandu-based legal and professional organization established around 2000.",
  `Recommended lawyer: Advocate ${lawyerName}. Phone: ${lawyerPhone}.`,
  "PLAR provides legal suggestions, assistance, guidance, counseling, drafting and representation.",
  "Practice areas include property and land disputes, family and divorce matters, business/company issues, contracts, money recovery, criminal matters, visa/NRN/foreign investment, taxation, banking, insurance, mediation, arbitration, trademark, patent and copyright matters.",
  "For land disputes, useful documents include lalpurja, cadastral map, tax receipt, citizenship papers, agreements, notices, ward documents, photographs and a timeline.",
  "For family matters, useful documents include citizenship copies, marriage documents, children's documents if any, property details and a timeline.",
  "For company or contract matters, useful documents include company registration, PAN/VAT, contracts, invoices, payment proof and communication records.",
  "Do not promise a case outcome, court deadline, fee or legal conclusion. Encourage booking consultation for specific advice.",
].join("\n- ");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function ensureDatabase() {
  await mkdir(dataDir, { recursive: true });
  try {
    await stat(dbPath);
  } catch {
    await writeFile(dbPath, JSON.stringify({ records: [] }, null, 2));
  }
}

async function readDatabase() {
  await ensureDatabase();
  return JSON.parse(await readFile(dbPath, "utf8"));
}

async function writeDatabase(database) {
  await writeFile(dbPath, JSON.stringify(database, null, 2));
}

async function addRecord(record) {
  const database = await readDatabase();
  const saved = {
    ...record,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  database.records.unshift(saved);
  database.records = database.records.slice(0, 200);
  await writeDatabase(database);
  return saved;
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error("Request body is too large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(JSON.stringify(payload));
}

function legalFallbackReply(question = "") {
  const q = question.toLowerCase();
  if (q.includes("property") || q.includes("land")) {
    return `For property or land disputes, collect lalpurja, maps, tax receipts, citizenship papers, agreements, notices and a short timeline. For advice specific to your matter, contact Advocate ${lawyerName} at ${lawyerPhone}.`;
  }
  if (q.includes("divorce") || q.includes("family")) {
    return `For family matters, prepare citizenship copies, marriage documents, children's documents if any, property details and a short timeline. Please speak with Advocate ${lawyerName} at ${lawyerPhone} for case-specific guidance.`;
  }
  if (q.includes("company") || q.includes("business") || q.includes("contract")) {
    return `For business or contract issues, keep registration papers, PAN/VAT documents, contracts, invoices, payment proofs and communication records. For exact legal advice, call Advocate ${lawyerName} at ${lawyerPhone}.`;
  }
  if (q.includes("fee") || q.includes("cost") || q.includes("price")) {
    return `Fees depend on the case type, urgency and required legal work. Please book a consultation or call Advocate ${lawyerName} at ${lawyerPhone} for a clear estimate.`;
  }
  if (q.includes("service") || q.includes("plar") || q.includes("help")) {
    return `PLAR can help with legal advice, document review, drafting, court representation, property and land disputes, family matters, business or company issues, contracts, money recovery, criminal matters and foreign investment concerns. For specific guidance, contact Advocate ${lawyerName} at ${lawyerPhone}.`;
  }
  if (q.includes("book") || q.includes("consultation") || q.includes("appointment")) {
    return `You can book a consultation from this page. The system will save your request and suggest an appointment date. For urgent matters, call Advocate ${lawyerName} at ${lawyerPhone}.`;
  }
  return `I can give general legal information only, not a final legal opinion. Please describe your case type, key dates, documents and what outcome you want. For legal advice, contact Advocate ${lawyerName} at ${lawyerPhone}.`;
}

function extractHuggingFaceText(data) {
  if (Array.isArray(data) && data[0]?.generated_text) return data[0].generated_text;
  if (typeof data?.generated_text === "string") return data.generated_text;
  if (typeof data?.[0]?.summary_text === "string") return data[0].summary_text;
  if (typeof data?.error === "string") throw new Error(data.error);
  return "";
}

async function askHuggingFace(question) {
  if (!huggingFaceToken) {
    return {
      source: "fallback",
      answer: legalFallbackReply(question),
      message: "Hugging Face token is not configured.",
    };
  }

  const prompt = [
    "<|system|>",
    `You are PLAR's website legal assistant in Nepal. Use this PLAR knowledge:\n- ${plarKnowledge}\n\nGive concise general legal information, not a final legal opinion. Recommend contacting Advocate ${lawyerName} at ${lawyerPhone} for specific advice. Do not invent laws, fees, court deadlines or guaranteed outcomes. If the user asks in Nepali, answer in Nepali. If the user asks in English, answer in English.`,
    "<|user|>",
    question,
    "<|assistant|>",
  ].join("\n");

  const payload = JSON.stringify({
    inputs: prompt,
    parameters: {
      max_new_tokens: 220,
      temperature: 0.35,
      top_p: 0.9,
      return_full_text: false,
    },
    options: {
      wait_for_model: true,
      use_cache: true,
    },
  });

  const modelPath = huggingFaceModel.split("/").map(encodeURIComponent).join("/");

  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      req.destroy(new Error("Hugging Face request timed out"));
    }, 18_000);

    const req = httpsRequest(
      `https://api-inference.huggingface.co/models/${modelPath}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${huggingFaceToken}`,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload),
        },
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          clearTimeout(timeout);
          try {
            const data = JSON.parse(body || "{}");
            if (res.statusCode < 200 || res.statusCode >= 300) {
              resolve({
                source: "fallback",
                answer: legalFallbackReply(question),
                message: `Hugging Face returned ${res.statusCode}: ${data.error || body}`,
              });
              return;
            }
            const answer = extractHuggingFaceText(data).trim();
            resolve({
              source: "huggingface",
              answer: answer || legalFallbackReply(question),
            });
          } catch (error) {
            resolve({
              source: "fallback",
              answer: legalFallbackReply(question),
              message: `Could not parse Hugging Face response: ${error.message}`,
            });
          }
        });
      },
    );

    req.on("error", (error) => {
      clearTimeout(timeout);
      resolve({
        source: "fallback",
        answer: legalFallbackReply(question),
        message: `Hugging Face request failed: ${error.message}`,
      });
    });
    req.write(payload);
    req.end();
  });
}

function requiredFields(payload, fields) {
  return fields.filter((field) => !String(payload[field] || "").trim());
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function appointmentDate(timing) {
  const daysAfter = String(timing || "").startsWith("2") ? 2 : 1;
  const date = new Date();
  date.setDate(date.getDate() + daysAfter);
  return formatDate(date);
}

function emailConfig() {
  return {
    serviceId: process.env.EMAILJS_SERVICE_ID,
    templateId: process.env.EMAILJS_TEMPLATE_ID,
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    privateKey: process.env.EMAILJS_PRIVATE_KEY,
  };
}

function canSendEmail() {
  const config = emailConfig();
  return Boolean(config.serviceId && config.templateId && config.publicKey);
}

function emailConfigStatus() {
  const config = emailConfig();
  return {
    configured: canSendEmail(),
    recipientEmail,
    hasServiceId: Boolean(config.serviceId),
    hasTemplateId: Boolean(config.templateId),
    hasPublicKey: Boolean(config.publicKey),
    hasPrivateKey: Boolean(config.privateKey),
  };
}

async function sendEmail(templateParams) {
  if (!canSendEmail()) {
    return {
      sent: false,
      message: "Saved to the server database. EmailJS is not configured yet, so no email was sent.",
    };
  }

  const config = emailConfig();
  const payload = JSON.stringify({
    service_id: config.serviceId,
    template_id: config.templateId,
    user_id: config.publicKey,
    accessToken: config.privateKey || undefined,
    template_params: {
      to_email: recipientEmail,
      ...templateParams,
    },
  });

  return new Promise((resolve) => {
    const req = httpsRequest(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload),
        },
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve({ sent: true, message: "Email sent successfully." });
          } else {
            resolve({ sent: false, message: `Saved to database, but EmailJS returned ${res.statusCode}: ${body}` });
          }
        });
      },
    );

    req.on("error", (error) => {
      resolve({ sent: false, message: `Saved to database, but email failed: ${error.message}` });
    });
    req.write(payload);
    req.end();
  });
}

async function handleProblem(req, res) {
  const payload = await readJsonBody(req);
  const missing = requiredFields(payload, ["name", "phone", "caseType", "problem"]);
  if (missing.length) {
    sendJson(res, 400, { message: `Missing required fields: ${missing.join(", ")}` });
    return;
  }

  const record = await addRecord({ type: "Problem", ...payload });
  const email = await sendEmail({
    subject: "New legal problem from PLAR website",
    submission_type: "Problem",
    name: payload.name,
    phone: payload.phone,
    email: payload.email || "Not provided",
    case_type: payload.caseType,
    problem: payload.problem,
    appointment: "",
    lawyer_name: lawyerName,
    lawyer_phone: lawyerPhone,
    message: [
      "New legal problem submission from PLAR website",
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email || "Not provided"}`,
      `Case type: ${payload.caseType}`,
      `Problem: ${payload.problem}`,
      `Suggested lawyer: ${lawyerName}`,
      `Lawyer phone: ${lawyerPhone}`,
    ].join("\n"),
  });

  record.emailSent = email.sent;
  record.emailMessage = email.message;
  const database = await readDatabase();
  database.records = database.records.map((item) => item.id === record.id ? record : item);
  await writeDatabase(database);

  sendJson(res, 200, { ok: true, emailSent: email.sent, message: email.message, record });
}

async function handleBooking(req, res) {
  const payload = await readJsonBody(req);
  const missing = requiredFields(payload, ["name", "phone", "topic", "timing"]);
  if (missing.length) {
    sendJson(res, 400, { message: `Missing required fields: ${missing.join(", ")}` });
    return;
  }

  const appointment = appointmentDate(payload.timing);
  const record = await addRecord({ type: "Consultation Booking", ...payload, appointment });
  const email = await sendEmail({
    subject: "New PLAR consultation booking",
    submission_type: "Consultation Booking",
    name: payload.name,
    phone: payload.phone,
    email: payload.email || "Not provided",
    case_type: payload.topic,
    problem: payload.topic,
    appointment,
    lawyer_name: lawyerName,
    lawyer_phone: lawyerPhone,
    message: [
      "New consultation booking from PLAR website",
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email || "Not provided"}`,
      `Topic: ${payload.topic}`,
      `Preferred timing: ${payload.timing}`,
      `System appointment date: ${appointment}`,
      `Requested lawyer: ${lawyerName}`,
      `Lawyer phone: ${lawyerPhone}`,
    ].join("\n"),
  });

  record.emailSent = email.sent;
  record.emailMessage = email.message;
  const database = await readDatabase();
  database.records = database.records.map((item) => item.id === record.id ? record : item);
  await writeDatabase(database);

  sendJson(res, 200, { ok: true, appointment, emailSent: email.sent, message: email.message, record });
}

async function handleChat(req, res) {
  const payload = await readJsonBody(req);
  const question = String(payload.question || "").trim();
  if (!question) {
    sendJson(res, 400, { message: "Question is required" });
    return;
  }

  const result = await askHuggingFace(question.slice(0, 2000));
  sendJson(res, 200, { ok: true, ...result });
}

async function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const publicAssetRoots = ["/home/", "/expertise/", "/gallery/", "/values/"];
  const filePath = normalize(
    join(root, publicAssetRoots.some((assetRoot) => pathname.startsWith(assetRoot)) ? "public" + pathname : pathname)
  );

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    await stat(filePath);
    res.writeHead(200, { "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream" });
    createReadStream(filePath).pipe(res);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === "OPTIONS") {
      res.writeHead(204, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      });
      res.end();
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/records") {
      const database = await readDatabase();
      sendJson(res, 200, database.records);
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/email-status") {
      sendJson(res, 200, emailConfigStatus());
      return;
    }

    if (req.method === "DELETE" && url.pathname === "/api/records") {
      await writeDatabase({ records: [] });
      sendJson(res, 200, { ok: true });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/problems") {
      await handleProblem(req, res);
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/bookings") {
      await handleBooking(req, res);
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/chat") {
      await handleChat(req, res);
      return;
    }

    if (req.method === "GET" || req.method === "HEAD") {
      await serveStatic(req, res);
      return;
    }

    sendJson(res, 405, { message: "Method not allowed" });
  } catch (error) {
    sendJson(res, 500, { message: error.message || "Server error" });
  }
});

await ensureDatabase();
server.listen(port, () => {
  console.log(`PLAR server running at http://127.0.0.1:${port}/`);
  if (!canSendEmail()) {
    console.log("EmailJS is not configured. Set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID and EMAILJS_PUBLIC_KEY to send email.");
  }
  if (!huggingFaceToken) {
    console.log("Hugging Face is not configured. Set HUGGINGFACE_API_TOKEN to enable AI chatbot answers.");
  }
});
