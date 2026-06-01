import { CheckCircle2 } from "lucide-react";

export default function Expertise() {
  const expertiseAreas = [
    "Legal aspects: National laws, Property laws, Taxation law, Land law, Labour law, Family law, Child law, human rights, fundamental laws, Equity, International law",
    "Foreign Direct Investment and Technology Transfer.",
    "Auditing and liquidation, mediation, arbitration, contractors' claim, merger acquisition, banking and insurance, hydro-energy, environment (IEA/EIA)",
    "Trademark Registration and other copyright related works.",
    "Drafting laws, by-laws, directives, official procedures, business plan, development action plan",
    "Plan formulation for Non-profit organizations",
    "Conflict management, change management, disaster management, time management",
    "Advocacy on patent right, trademarks and copyrights",
    "Coordination for business visa and assist the client for business establishment in Nepal according to the legal provisions",
    "Coordination for tourist visa and tourist development according to the legal provisions",
  ];

  const galleryImages = [
    { id: 1, url: `${import.meta.env.BASE_URL}expertise/1.webp`, alt: "Gallery Image 1" },
    { id: 2, url: `${import.meta.env.BASE_URL}expertise/2.webp`, alt: "Gallery Image 2" },
    { id: 3, url: `${import.meta.env.BASE_URL}expertise/3.webp`, alt: "Gallery Image 3" },
    { id: 4, url: `${import.meta.env.BASE_URL}expertise/4.webp`, alt: "Gallery Image 4" },
    { id: 5, url: `${import.meta.env.BASE_URL}expertise/5.webp`, alt: "Gallery Image 5" },
    { id: 6, url: `${import.meta.env.BASE_URL}expertise/6.webp`, alt: "Gallery Image 6" },
    { id: 7, url: `${import.meta.env.BASE_URL}expertise/7.webp`, alt: "Gallery Image 7" },
    { id: 8, url: `${import.meta.env.BASE_URL}expertise/8.webp`, alt: "Gallery Image 8" },
    { id: 9, url: `${import.meta.env.BASE_URL}expertise/9.webp`, alt: "Gallery Image 9" },
    { id: 10, url: `${import.meta.env.BASE_URL}expertise/10.webp`, alt: "Gallery Image 10" },
    { id: 11, url: `${import.meta.env.BASE_URL}expertise/11.webp`, alt: "Gallery Image 11" },
    { id: 12, url: `${import.meta.env.BASE_URL}expertise/12.webp`, alt: "Gallery Image 12" },
    { id: 13, url: `${import.meta.env.BASE_URL}expertise/13.webp`, alt: "Gallery Image 13" },
    { id: 14, url: `${import.meta.env.BASE_URL}expertise/14.webp`, alt: "Gallery Image 14" },
    { id: 15, url: `${import.meta.env.BASE_URL}expertise/15.webp`, alt: "Gallery Image 15" },
    { id: 16, url: `${import.meta.env.BASE_URL}expertise/16.webp`, alt: "Gallery Image 16" },
    { id: 17, url: `${import.meta.env.BASE_URL}expertise/17.webp`, alt: "Gallery Image 17" },
  ];

  return (
    <div className="min-h-screen">
      <div className="pt-32 min-h-screen bg-zinc-50">
        {/* Expertise Content Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-350 mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-8">
                  Experties
                </h1>
                <p className="text-base md:text-lg text-zinc-700 leading-relaxed mb-8">
                  Mr Gopal Pandey has earned the Masters' degrees in laws and
                  English Language followed by a Post-graduate Diploma in
                  Buddhism Philosophy. Besides, he possesses comprehensive
                  experience and domestic as well as international exposure both
                  in corporate and legal sector.
                </p>

                {/* Expertise List */}
                <div className="space-y-4">
                  {expertiseAreas.map((area, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="text-zinc-900 mt-1 shrink-0"
                      />
                      <p className="text-zinc-700 leading-relaxed">{area}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-auto lg:max-w-md">
                <div className="bg-zinc-200 rounded-3xl overflow-hidden shadow-2xl shadow-gray-400">
                  <img
                    src={`${import.meta.env.BASE_URL}expertise/expertise.webp`}
                    alt="Mr. Gopal Pandey"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Photo Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-350 mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-12 text-center">
            Photo Gallery
          </h2>

          {/* Pinterest-style Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="break-inside-avoid mb-4 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-zinc-200 shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x600/e4e4e7/71717a?text=Gallery+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
