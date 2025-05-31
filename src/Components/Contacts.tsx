import ContactInfo from "@/Components/ContactInfo";
import { contactData, work_sans, yeseva } from "@/data";

export default function Contacts() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-[#00A0E3] ${work_sans.className} font-bold tracking-wider text-lg`}
          >
            GET IN TOUCH
          </h2>
          <h2
            className={`${yeseva.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2B6C]`}
          >
            Contact
          </h2>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#ED1B24] text-white p-8 rounded-lg text-center hover:bg-red-500 transition-colors duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg md:text-xl mb-4 tracking-wide">
                  {item.title}
                </h3>

                {/* Details */}
                <div className="space-y-2">
                  {item.details.map((detail, index) => (
                    <p
                      key={index}
                      className="text-sm md:text-base leading-relaxed"
                    >
                      {ContactInfo(item.title, detail)}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
