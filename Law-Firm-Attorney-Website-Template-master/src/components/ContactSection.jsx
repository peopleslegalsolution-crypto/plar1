import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

function HoursDisplay() {
  const [showAllHours, setShowAllHours] = useState(false);
  const days = [
    { name: "Sun", hours: "Closed" },
    { name: "Mon", hours: "09:00 am - 05:00 pm" },
    { name: "Tue", hours: "09:00 am - 05:00 pm" },
    { name: "Wed", hours: "09:00 am - 05:00 pm" },
    { name: "Thu", hours: "09:00 am - 05:00 pm" },
    { name: "Fri", hours: "09:00 am - 05:00 pm" },
    { name: "Sat", hours: "Closed" },
  ];
  const today = new Date().getDay();
  const todayInfo = days[today];

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="font-medium text-zinc-900">{todayInfo.name}</span>
        <span
          className={
            todayInfo.hours === "Closed" ? "text-red-500" : "text-green-600"
          }
        >
          {todayInfo.hours}
        </span>
      </div>
      {showAllHours && (
        <div className="space-y-1 mt-3">
          {days.map((day, index) => (
            <div
              key={day.name}
              className={`flex justify-between text-sm ${index === today ? "font-medium text-zinc-900" : "text-zinc-600"}`}
            >
              <span>{day.name}</span>
              <span className={day.hours === "Closed" ? "text-red-500" : ""}>
                {day.hours}
              </span>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setShowAllHours(!showAllHours)}
        className="text-xs text-zinc-500 hover:text-zinc-900 underline mt-2 cursor-pointer"
      >
        {showAllHours ? "Hide hours" : "See all hours"}
      </button>
    </div>
  );
}

export default function ContactSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
      {/* Map Card */}
      <div className="bg-zinc-100 rounded-3xl p-2 h-80 md:h-96 lg:h-auto lg:min-h-125 relative">
        <iframe
          className="w-full h-full rounded-2xl contrast-75 hover:grayscale-0 transition-all duration-300"
          frameBorder="0"
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8195694909573!2d85.32706927636694!3d27.69197097619139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198c602efac1%3A0xe7447a457c28b6ac!2sCarnival%20Restro%20%26%20Meetings!5e0!3m2!1sen!2snp!4v1770906573747!5m2!1sen!2snp"
          loading="lazy"
        />
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-6">
        <div className="bg-white border border-zinc-100 rounded-3xl p-6 md:p-10 flex-1">
          <h3 className="text-xl md:text-2xl font-medium mb-6 md:mb-8">
            Get in Touch
          </h3>

          <div className="space-y-6 md:space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                  Visit Us
                </p>
                <p className="text-zinc-900">
                  Carnival Restro & Meetings,
                  <br />
                  Bhaktithapa Sadak, Kathmandu
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                  Call Us
                </p>
                <a
                  href="tel:+9779851089120"
                  className="text-zinc-900 hover:text-zinc-600 transition-colors block"
                >
                  + 977-9851089120
                </a>
                <a
                  href="tel:+9779841413050"
                  className="text-zinc-900 hover:text-zinc-600 transition-colors block"
                >
                  + 977-9841413050
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                  Email
                </p>
                <div className="text-zinc-900 space-y-1">
                  <a
                    href="mailto:plar@legalsolutionsnepal.com"
                    className="hover:text-zinc-600 transition-colors block"
                  >
                    plar@legalsolutionsnepal.com
                  </a>
                  <a
                    href="mailto:plarnepal@legalsolutionsnepal.com"
                    className="hover:text-zinc-600 transition-colors block"
                  >
                    plarnepal@legalsolutionsnepal.com
                  </a>
                  <a
                    href="mailto:corporate@legalsolutionsnepal.com"
                    className="hover:text-zinc-600 transition-colors block"
                  >
                    corporate@legalsolutionsnepal.com
                  </a>
                  <a
                    href="mailto:gopal@legalsolutionsnepal.com"
                    className="hover:text-zinc-600 transition-colors block"
                  >
                    gopal@legalsolutionsnepal.com
                  </a>
                  <a
                    href="mailto:plarnepal@gmail.com"
                    className="hover:text-zinc-600 transition-colors block"
                  >
                    plarnepal@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                  Hours
                </p>
                <HoursDisplay />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=9779851089120&text&type=phone_number&app_absent=0"
            className="bg-zinc-900 hover:bg-green-600 text-white rounded-3xl p-4 md:p-6 flex items-center justify-between group transition-all duration-300 flex-1"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <FaWhatsapp size={20} className="md:w-6 md:h-6" />
              <span className="text-base md:text-xl tracking-wide">
                WhatsApp
              </span>
            </div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowUpRight size={18} />
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/gopal.panday"
            className="bg-zinc-900 hover:bg-blue-600 text-white rounded-3xl p-4 md:p-6 flex items-center justify-between group transition-all duration-300 flex-1"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <FiFacebook size={20} className="md:w-6 md:h-6" />
              <span className="text-base md:text-xl tracking-wide">
                Facebook
              </span>
            </div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowUpRight size={18} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

