import { HeartPulse } from "lucide-react"
import { work_sans, yeseva, specialtiesWithIcon } from "@/data"

export default function Specialization() {
  return (
    <section className="py-12 lg:px-40 px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className={`${work_sans.className} text-blue-500 font-bold text-sm md:text-base tracking-widest uppercase mb-2`}>ALWAYS CARING</p>
          <h2 className={`${yeseva.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2B6C]`}>Our Specialties</h2>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 lg:mt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 md:gap-28">
          {specialtiesWithIcon.map((specialty, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
              {/* Heart Icon with Medical Cross */}
              <div className="relative mb-4 group-hover:scale-110 transition-transform duration-300">
                <HeartPulse className="w-12 h-12 md:w-16 md:h-16 text-red-500" size={32} strokeWidth={1.75} />
              </div>

              {/* Specialty Name */}
              <h3 className={`text-gray-700 ${work_sans.className} font-medium text-sm md:text-base lg:text-lg leading-tight`}>{specialty.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
