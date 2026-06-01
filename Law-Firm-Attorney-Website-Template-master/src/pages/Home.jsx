import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="max-w-350 mx-auto px-6 mb-4 min-h-screen">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-8 md:mb-12">
          <div className="">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight leading-[1.1] text-zinc-900">
              Law is the backbone of{" "}
              <span className="font-serif italic text-zinc-400">democracy</span>{" "}
              and hope for human society.
            </h1>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}home/people.webp`}
            alt="Logo"
            className="bg-black p-4 md:p-7 rounded-4xl w-full md:w-auto max-w-xl"
          />
        </div>

        <div className="w-full h-[60vh] bg-zinc-100 rounded-4xl overflow-hidden relative group">
          <img
            src={`${import.meta.env.BASE_URL}home/2.jpg`}
            alt="Law office and legal books"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent flex items-end p-8 md:p-12">
            <a
              href="mailto:plarnepal@gmail.com"
              className="bg-white text-zinc-900 px-8 py-4 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-zinc-100 transition-colors"
            >
              Start Your Journey <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="bg-zinc-50 py-16 md:py-32 mb-16">
        <div className="max-w-350 mx-auto px-6">
          <div className=" justify-between mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4">
              Heartily{" "}
              <span className="font-serif italic text-zinc-400">welcome</span>{" "}
              to our respected <br className="hidden md:block" /> visitors and
              customers
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
            <p className="text-base sm:text-lg md:text-xl max-w-2xl tracking-wider leading-relaxed">
              People's legal Associates and researcher is a well-established and
              trustworthy legal and professional organization. During twenty
              years journey in this sector,we have served significant number of
              customers.We feel strengthen in our work in our work area by
              overwhelming response from our clients.We experienced the
              delightful exit of clients,came to us seeking any kind of legal
              services.We put and keep the principle "win win". We try to
              provide all support to clients at single point -PLAR,which can
              save them to rush on multiple agencies.
            </p>
            <div className="bg-neutral-200 rounded-4xl w-full lg:w-auto shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}home/welcome.webp`}
                alt="welcome"
                className="rounded-4xl w-full lg:w-auto lg:h-75"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 mb-16 md:mb-24">
        <div className="max-w-350 mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 md:gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-3 md:mb-5">
                Our Services
              </h2>
              <p className="mb-4 md:mb-8 max-w-2xl text-base md:text-lg tracking-normal leading-relaxed text-zinc-600">
                This organization advocates in all the courts of Nepal. For
                providing quality and prompt service, it mobilizes the concerned
                expert/lawyer enlisted in its pool.
              </p>
            </div>

            <a
              href="#contact"
              className="text-zinc-900 font-medium border-b border-zinc-900 pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-all"
            >
              View all services
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Card 1 */}
            <div className="p-6 md:p-10 h-full border border-white hover:border-zinc-300 bg-zinc-100 rounded-3xl cursor-pointer transition-all duration-300">
              <div className="w-12 h-12 bg-white border border-zinc-300 rounded-xl duration-300 flex items-center justify-center mb-8 transition-all">
                <ArrowUpRight className="text-zinc-900" />
              </div>
              <h3 className="text-xl font-medium mb-3">
                Get Your Legal Advice Fast
              </h3>
              <p className="text-zinc-700 text-sm leading-relaxed">
                Providing legal suggestions, assistance, guidance and counseling
                to the concerned individuals, corporate sector organizations and
                No-profit organizations, firms, groups.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 md:p-10 h-full border border-white hover:border-zinc-300 bg-zinc-100 rounded-3xl cursor-pointer transition-all duration-300">
              <div className="w-12 h-12 bg-white border border-zinc-300 rounded-xl duration-300 flex items-center justify-center mb-8 transition-all">
                <ArrowUpRight className="text-zinc-900" />
              </div>
              <h3 className="text-xl font-medium mb-3">
                Work With Expert Lawyers
              </h3>
              <p className="text-zinc-700 text-sm leading-relaxed">
                Mr Gopal Pandey is young energetic and enthusiastic lawyer who
                possesses comprehensive experience and domestic as well as
                international exposure both in corporate and legal sector.All
                other group member and staffs are well experienced and
                qualified. under work with expert lawyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lawyer */}
      <section className="py-16 md:py-32 mb-16 md:mb-24 bg-zinc-50">
        <div className="max-w-350 mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-8 md:mb-14">
            Lawyer
          </h2>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-4">
            <div className="p-2 md:p-4 w-full lg:-ml-5">
              <img
                src={`${import.meta.env.BASE_URL}home/lawyer.jpg`}
                alt="lawyer"
                className="rounded-4xl shadow-2xl shadow-gray-600 w-full"
              />
            </div>
            <div className="max-w-xl lg:mt-8 lg:ml-12">
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-700 mb-5 md:mb-7 tracking-normal leading-snug">
                Mr Gopal Pandey is young energetic and enthusiastic lawyer who
                possesses comprehensive experience and domestic as well as
                international exposure both in corporate and legal sector.All
                other group member and staffs are well experienced and
                qualified. under work with expert lawyers.
              </p>
              <a
                href="mailto:plarnepal@gmail.com"
                className="uppercase px-5 md:px-7 py-2.5 md:py-3 rounded-3xl bg-zinc-900 text-base md:text-lg tracking-wider cursor-pointer text-white hover:text-zinc-900 hover:bg-white border border-zinc-900 transition duration-300 inline-block text-center"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <div className="py-16 md:py-32">
        <section className="max-w-350 mx-auto px-6 mb-10">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-30 ">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-medium mb-4 md:mb-6">
                Why Choose PLAR
              </h2>
              <div className="h-px w-12 bg-zinc-900 mb-4 md:mb-6"></div>
              <ul className="text-zinc-500 leading-relaxed text-base md:text-lg space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-zinc-900 mt-1 shrink-0"
                  />
                  <span>
                    We are a well established, modern and equitable-model law
                    firm having national and global presence.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-zinc-900 mt-1 shrink-0"
                  />
                  <span>
                    We have well managed wide-network and good working
                    relationship with international law and solicitors Firms
                    too.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-zinc-900 mt-1 shrink-0"
                  />
                  <span>
                    We have strength-in-depth team to provide successful and
                    diverse legal services.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-zinc-900 mt-1 shrink-0"
                  />
                  <span>
                    We have a wide-range client base like banks, Financial
                    institutions, mutual funds to large corporate houses,
                    Foreign investors as well as individuals.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-zinc-900 mt-1 shrink-0"
                  />
                  <span>
                    We value the clients feedback and work to achieve their
                    faith.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-medium mb-4 md:mb-6">
                Below quality maintenance makes us first choice of clients:
              </h2>
              <div className="h-px w-12 bg-zinc-900 mb-4 md:mb-6"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  "Commerciability",
                  "Value for money",
                  "High level professional conduct",
                  "Quality client service",
                  "Industry knowledge",
                  "Commitment",
                  "Technical ability",
                  "Efficiency",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-zinc-600"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-zinc-900 shrink-0"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 text-zinc-400 px-6 md:px-10 py-4 md:py-6 rounded-3xl mx-auto w-fit mt-12 md:mt-18">
            <p className="text-white text-lg sm:text-xl md:text-2xl font-serif italic mb-0">
              "We ask clients to reach us for Result-Oriented Services."
            </p>
          </div>
        </section>
      </div>

      {/* Location & Contact - Split Layout */}
      <section className="bg-zinc-50 py-12 md:py-24">
        <div className="max-w-350 mx-auto px-6 mb-12 md:mb-20">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
