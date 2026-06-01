import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    "Litigation",
    "Legal counseling",
    "Representation on behalf of the clients",
    "Notary public certification",
    "Coordination and liaising of Foreign Direct Investment (FDI), Company registration, taxation, asset transaction, etc.",
    "Prosecution",
    "Drafting laws, by-laws, Memo of understanding, directives, etc.",
    "Legal research work and guidance to the legal researchers",
    "Managerial research work and consultation on human development activities",
    "Conducting/organizing seminars/workshops/conference/short-period orientation programmes, especially in the field of law, human rights, conflict management, crisis management, and empowerment.",
  ];

  const serviceCards = [
    {
      title: "International Clients",
      description:
        "Our firm has been working in providing legal services since more than twenty years. It has a close ties with forefront international law firms. We endorse to increase the partnership with more leading lawyers and law firms globally. Our firm provides exceptional quality service to our valued clients (national and international)..",
    },
    {
      title: "Outsourcing and legal process",
      description:
        "We provide the outsource facility in case any company wants to source  services from us. They can outsource for litigation research, drafting  contracts, auditing, writing proposals, registering trademark, patent  rights, etc. We have an applauding experience of outsource service  provide in United States, India, Australia, United Kingdom in different  sector. We provide auditing, patent right, registering trademark in  other countries.",
    },
    {
      title: "NGO's, INGO's and charities non-profit organizations",
      description:
        "We provide different kinds of services to NGOs, INGOs and charitable non-profit organizations. For NGOs, we provide services like organization registration, draft constitutions, by-laws, notary translation, and related support. For INGOs, we provide consultation and legal process support to open their branch in Nepal.",
    },
    {
      title:
        "Legal services for NRN foreigners doing business, study, working and living in Nepal",
      description:
        "Non Resident Nepalese have many rights in constitution which guarantees  them for property, taxation relief, banking incentives, living in Nepal,  studying etc. We work for NRN to free them from legal hassles during  any project in Nepal including business set up. We provide counseling  regarding their rights and limitations under new constitution in Nepal",
    },
    {
      title: "Legal consultancy for national, foreign and international.",
      description:
        "We have law expert's team who possesses a good level of knowledge on  national and international laws. We provide the legal consultancy to  national and international clients - Individual or any firms/companies.  We provide services on prosecution, drafting laws, by-laws, memo of  understanding, directives, etc.",
    },
    {
      title: "Collaborations with international lawyers and legal services",
      description:
        "We have strong collaboration with the highly skilled and renowned lawyers of different countries like India, Bangladesh, Pakistan, Bhutan, United States, United Kingdom, etc. We have expertise in auditing, corporate law, litigation, etc..",
    },
  ];

  return (
    <div className="pt-18 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-350 mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6 md:mb-8">
            Our Services
          </h1>
          <p className="text-base md:text-lg text-zinc-700 leading-relaxed max-w-4xl mb-12">
            This organization advocates in all the courts of Nepal. For
            providing quality and prompt service, it mobilizes the concerned
            expert/lawyer enlisted in its pool.
          </p>

          {/* Services List */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-zinc-200">
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-zinc-900">
              What We Offer
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-zinc-900 mt-1 shrink-0"
                  />
                  <span className="text-zinc-700 leading-relaxed">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-350 mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className="group bg-zinc-50 hover:bg-zinc-100 rounded-3xl p-8 transition-all duration-300 border border-transparent hover:border-zinc-200"
              >
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors">
                  <ArrowUpRight className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-medium mb-3 text-zinc-900">
                  {card.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

