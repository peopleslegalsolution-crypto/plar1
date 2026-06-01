const lawyerName = "Gopal Datt Pandey";
const lawyerPhone = "9851089120";
const apiBase = location.port === "8081" ? "" : "http://127.0.0.1:8081";
const translations = {
  en: {
    menu: "Menu",
    navHome: "Home",
    navServices: "Services",
    navExpertise: "Expertise",
    navValues: "Values",
    navAbout: "About Us",
    navConsultation: "Consultation",
    navContact: "Contact Us",
    darkMode: "Dark",
    lightMode: "White",
    brightMode: "Bright",
    languageButton: "नेपाली",
    bookConsultation: "Book Consultation",
    kicker: "Legal Help Desk",
    heroTitle: "Write your legal problem and request a consultation.",
    heroBody: "Your message is saved in the server database and sent to peoplelegalsolution@gmail.com when EmailJS is configured. For urgent matters, contact Advocate Gopal Datt Pandey at 9851089120.",
    recommended: "Recommended Lawyer",
    problemTitle: "Submit Your Problem",
    fullName: "Full name",
    phone: "Phone number",
    email: "Email",
    caseType: "Case type",
    selectCase: "Select a case type",
    caseProperty: "Property or land dispute",
    caseFamily: "Family or divorce matter",
    caseBusiness: "Business or company issue",
    caseContract: "Contract or money recovery",
    caseCriminal: "Criminal matter",
    caseVisa: "Visa, NRN or foreign investment",
    caseOther: "Other legal problem",
    writeProblem: "Write your problem",
    problemPlaceholder: "Describe what happened, important dates, people involved, and what help you need.",
    submit: "Submit",
    chatbotTitle: "Legal Chatbot",
    chatGreeting: "Hello. Ask me about your legal issue, documents, case process, or consultation. For case-specific help, I will refer you to Advocate Gopal Datt Pandey, phone 9851089120.",
    chatPlaceholder: "Ask about cases, documents, fees, property...",
    send: "Send",
    bookingTitle: "Book Consultation",
    bookingBody: "After booking, the system gives an appointment date one or two days from today and saves it in the server database.",
    topic: "Consultation topic",
    topicPlaceholder: "Example: land dispute, divorce, company registration",
    timing: "Preferred timing",
    timingOne: "Earliest available, 1 day after booking",
    timingTwo: "2 days after booking",
    book: "Book",
    recordsTitle: "Saved Records",
    recordsBody: "Recent problems and bookings saved on the server.",
    clearRecords: "Clear Local Records",
    copyright: "Copyright (c) 2022 SOLVING LEGAL PROBLEMS WITH ADVOCATE GOPAL DUTTA PANDEY - All Rights Reserved."
  },
  ne: {
    menu: "मेनु",
    navHome: "गृहपृष्ठ",
    navServices: "सेवाहरू",
    navExpertise: "विशेषज्ञता",
    navValues: "मूल्यहरू",
    navAbout: "हाम्रो बारेमा",
    navConsultation: "परामर्श",
    navContact: "सम्पर्क",
    darkMode: "डार्क",
    lightMode: "सेतो",
    brightMode: "ब्राइट",
    languageButton: "English",
    bookConsultation: "परामर्श बुक गर्नुहोस्",
    kicker: "कानुनी सहायता डेस्क",
    heroTitle: "आफ्नो कानुनी समस्या लेख्नुहोस् र परामर्श अनुरोध गर्नुहोस्।",
    heroBody: "तपाईंको सन्देश सर्भर डेटाबेसमा सुरक्षित हुन्छ र EmailJS कन्फिगर भएपछि इमेलमा पठाइन्छ। अत्यावश्यक विषयका लागि अधिवक्ता गोपाल दत्त पाण्डेयलाई ९८५१०८९१२० मा सम्पर्क गर्नुहोस्।",
    recommended: "सिफारिस गरिएको वकिल",
    problemTitle: "आफ्नो समस्या पठाउनुहोस्",
    fullName: "पूरा नाम",
    phone: "फोन नम्बर",
    email: "इमेल",
    caseType: "मुद्दाको प्रकार",
    selectCase: "मुद्दाको प्रकार छान्नुहोस्",
    caseProperty: "सम्पत्ति वा जग्गा विवाद",
    caseFamily: "पारिवारिक वा सम्बन्ध विच्छेद",
    caseBusiness: "व्यवसाय वा कम्पनी समस्या",
    caseContract: "करार वा रकम असुली",
    caseCriminal: "फौजदारी विषय",
    caseVisa: "भिसा, एनआरएन वा विदेशी लगानी",
    caseOther: "अन्य कानुनी समस्या",
    writeProblem: "आफ्नो समस्या लेख्नुहोस्",
    problemPlaceholder: "के भयो, महत्वपूर्ण मिति, संलग्न व्यक्ति र तपाईंलाई चाहिएको सहयोग लेख्नुहोस्।",
    submit: "पठाउनुहोस्",
    chatbotTitle: "कानुनी च्याटबोट",
    chatGreeting: "नमस्ते। कानुनी समस्या, कागजात, मुद्दा प्रक्रिया वा परामर्शबारे सोध्नुहोस्। विशिष्ट मुद्दाका लागि म तपाईंलाई अधिवक्ता गोपाल दत्त पाण्डेय, फोन ९८५१०८९१२० मा पठाउनेछु।",
    chatPlaceholder: "मुद्दा, कागजात, शुल्क, सम्पत्तिबारे सोध्नुहोस्...",
    send: "पठाउनुहोस्",
    bookingTitle: "परामर्श बुक गर्नुहोस्",
    bookingBody: "बुकिङपछि प्रणालीले आजदेखि एक वा दुई दिनपछिको अपोइन्टमेन्ट मिति दिन्छ र सर्भर डेटाबेसमा सुरक्षित गर्छ।",
    topic: "परामर्श विषय",
    topicPlaceholder: "उदाहरण: जग्गा विवाद, सम्बन्ध विच्छेद, कम्पनी दर्ता",
    timing: "मनपर्ने समय",
    timingOne: "सबैभन्दा चाँडो, बुकिङको १ दिनपछि",
    timingTwo: "बुकिङको २ दिनपछि",
    book: "बुक गर्नुहोस्",
    recordsTitle: "सुरक्षित रेकर्डहरू",
    recordsBody: "सर्भरमा सुरक्षित हालका समस्या र बुकिङहरू।",
    clearRecords: "स्थानीय रेकर्ड हटाउनुहोस्",
    copyright: "प्रतिलिपि अधिकार (c) २०२२ अधिवक्ता गोपाल दत्त पाण्डेयसँग कानुनी समस्याको समाधान - सर्वाधिकार सुरक्षित।"
  }
};

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".site-nav").classList.toggle("is-open");
});

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = translations[lang][node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const value = translations[lang][node.dataset.i18nPlaceholder];
    if (value) node.setAttribute("placeholder", value);
  });
  document.body.dataset.lang = lang;
  localStorage.setItem("plar-language", lang);
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.themeChoice === theme);
  });
  localStorage.setItem("plar-theme", theme);
}

document.querySelector("[data-lang-toggle]").addEventListener("click", () => {
  applyLanguage(document.body.dataset.lang === "ne" ? "en" : "ne");
});

document.querySelectorAll("[data-theme-choice]").forEach((button) => {
  button.addEventListener("click", () => applyTheme(button.dataset.themeChoice));
});

applyTheme(localStorage.getItem("plar-theme") || "dark");
applyLanguage(localStorage.getItem("plar-language") || "en");

async function postJson(url, payload) {
  const response = await fetch(`${apiBase}${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    throw new Error("The backend server is not responding with JSON. Open the site from http://127.0.0.1:8081/ or make sure the Node server is running.");
  }

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }
  return data;
}

async function loadRecords() {
  const holder = document.querySelector("#savedRecords");
  if (!holder) return;

  try {
    const response = await fetch(`${apiBase}/api/records`);
    if (!response.headers.get("content-type")?.includes("application/json")) {
      throw new Error("Backend returned a non-JSON response");
    }
    const records = await response.json();
    if (!records.length) {
      holder.innerHTML = "<p>No saved records yet.</p>";
      return;
    }

    holder.innerHTML = records.map((record) => `
      <article>
        <strong>${record.type}</strong>
        <span>${new Date(record.createdAt).toLocaleString()}</span>
        <p>${record.name || "Unknown"} - ${record.caseType || record.topic || "General"}</p>
        ${record.appointment ? `<p>Appointment: ${record.appointment}</p>` : ""}
        ${record.emailSent ? "<p>Email sent: yes</p>" : "<p>Email sent: not configured</p>"}
      </article>
    `).join("");
  } catch {
    holder.innerHTML = "<p>Could not load saved records from the server.</p>";
  }
}

async function showEmailStatus() {
  const problemStatus = document.querySelector("#problemStatus");
  try {
    const response = await fetch(`${apiBase}/api/email-status`);
    const status = await response.json();
    if (!status.configured) {
      problemStatus.textContent = "EmailJS keys are missing in .env, so forms will save to the server database but cannot send email yet.";
    }
  } catch {
    problemStatus.textContent = "Node backend is not reachable. Start the Node server on port 8081.";
  }
}

document.querySelector("#problemForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.querySelector("#problemStatus");
  const data = Object.fromEntries(new FormData(form));

  status.textContent = "Submitting...";
  try {
    const result = await postJson("/api/problems", data);
    status.textContent = result.emailSent
      ? "Submitted. Email sent successfully."
      : result.message;
    form.reset();
    await loadRecords();
  } catch (error) {
    status.textContent = error.message;
  }
});

document.querySelector("#bookingForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.querySelector("#bookingStatus");
  const data = Object.fromEntries(new FormData(form));

  status.textContent = "Booking...";
  try {
    const result = await postJson("/api/bookings", data);
    status.textContent = result.emailSent
      ? `Booked for ${result.appointment}. Email sent successfully.`
      : `${result.message} Appointment date: ${result.appointment}.`;
    form.reset();
    await loadRecords();
  } catch (error) {
    status.textContent = error.message;
  }
});

const chatLog = document.querySelector("#chatLog");
const chatInput = document.querySelector("#chatInput");

function addMessage(text, className) {
  const message = document.createElement("p");
  message.className = className;
  message.textContent = text;
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function localBotReply(question) {
  const q = question.toLowerCase();
  if (q.includes("case") || q.includes("court") || q.includes("lawsuit")) {
    return `For case matters, collect all documents, dates, notices, agreements and identity papers first. For specific advice, contact Advocate ${lawyerName} at ${lawyerPhone}.`;
  }
  if (q.includes("property") || q.includes("land")) {
    return `For property or land disputes, useful documents include lalpurja, map, tax receipt, citizenship papers, agreement papers and any court or ward notices. Advocate ${lawyerName}: ${lawyerPhone}.`;
  }
  if (q.includes("divorce") || q.includes("family")) {
    return `For family matters, prepare citizenship copies, marriage documents, children's documents if any, property details and a short timeline of events. Speak with ${lawyerName} at ${lawyerPhone}.`;
  }
  if (q.includes("company") || q.includes("business") || q.includes("contract")) {
    return `For business or contract issues, keep registration papers, PAN/VAT documents, contracts, invoices, payment proofs and communication records. Lawyer: ${lawyerName}, phone ${lawyerPhone}.`;
  }
  if (q.includes("fee") || q.includes("cost") || q.includes("price")) {
    return `Fees depend on case type, urgency and required legal work. Please book a consultation or call ${lawyerName} at ${lawyerPhone} for a clear estimate.`;
  }
  if (q.includes("number") || q.includes("phone") || q.includes("lawyer") || q.includes("gopal")) {
    return `Recommended lawyer: Advocate ${lawyerName}. Phone number: ${lawyerPhone}.`;
  }
  if (q.includes("document") || q.includes("paper")) {
    return `Bring identity documents, any agreements, notices, receipts, photographs, messages and a written timeline. For exact document review, contact ${lawyerName} at ${lawyerPhone}.`;
  }
  return `I can give general guidance only. Please describe your case type and what happened. For legal advice, contact Advocate ${lawyerName} at ${lawyerPhone}.`;
}

async function botReply(question) {
  try {
    const result = await postJson("/api/chat", { question });
    return result.answer || localBotReply(question);
  } catch {
    return localBotReply(question);
  }
}

document.querySelector("#chatForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const question = chatInput.value.trim();
  if (!question) return;
  addMessage(question, "user-message");
  chatInput.value = "";
  chatInput.disabled = true;
  const waitingMessage = document.createElement("p");
  waitingMessage.className = "bot-message";
  waitingMessage.textContent = document.documentElement.lang === "ne" ? "सोच्दैछ..." : "Thinking...";
  chatLog.appendChild(waitingMessage);
  chatLog.scrollTop = chatLog.scrollHeight;
  waitingMessage.textContent = await botReply(question);
  chatInput.disabled = false;
  chatInput.focus();
});

document.querySelector("#clearRecords").addEventListener("click", async () => {
  const response = await fetch(`${apiBase}/api/records`, { method: "DELETE" });
  if (response.ok) await loadRecords();
});

loadRecords();
showEmailStatus();
