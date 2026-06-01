import { CheckCircle2 } from "lucide-react";

export default function Values() {
  const coreValues = [
    "Integrity",
    "Value for money",
    "Trustworthy",
    "Transparency",
    "Responsiveness",
    "Social justice and social responsibility",
    "Research based activities",
    "Collaborative and coordinated work-style",
    "Customer-centered service",
    "Zero-tolerance against corruption and child labour abuse",
  ];

  return (
    <div className="pt-32 bg-zinc-50 min-h-screen">
      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-8">
            Fundamental Values
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-zinc-900">
            Additional Information
          </h2>

          <p className="text-base md:text-lg text-zinc-700 leading-relaxed mb-8">
            A dynamic company virtually requires to maintain integrity and needs
            to function fairly. Considering this fact, it has founded some
            values as its basic commitment, which are briefly spelled down:
          </p>

          {/* Values List */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-zinc-200">
            <ul className="space-y-4">
              {coreValues.map((value, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-zinc-900 mt-1 shrink-0"
                  />
                  <span className="text-zinc-700 leading-relaxed text-lg">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
