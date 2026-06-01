import ContactSection from "../components/ContactSection";

export default function Contact() {
  return (
    <div className="pt-32 min-h-screen bg-zinc-50">
      <section className="bg-zinc-50 py-12 md:py-24">
        <div className="max-w-350 mx-auto px-6 mb-12 md:mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl font-medium text-zinc-700">
              People's Legal Associates and Researcher (PLAR)
            </p>
          </div>

          <ContactSection />
        </div>
      </section>
    </div>
  );
}
