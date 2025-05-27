"use client"

import Image from "next/image"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"
import { doctors, yeseva } from "@/data"

export default function OurDoctors() {
  return (
    <section className="py-16 bg-white text-center px-4">
      {/* Section Heading */}
      <div className="text-center mb-2">
        <span className="text-[#00A0E3] font-medium tracking-wider text-sm">TRUSTED CARE</span>
      </div>

      <h2
        className={`text-3xl font-bold text-center text-[#1E3A8A] mb-14 ${yeseva.className}`}
      >
        Our Doctors
      </h2>

      {/* Grid layout */}
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {doctors.map((doc, index) => (
          <motion.div
            key={index}
            className="w-[317px] max-h-[538px] bg-white border border-gray-100 rounded-lg shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Doctor Image */}
            <div className="w-full" style={{ height: "350px", width: "317px" }}>
              <Image
                src={doc.imageUrl || "/placeholder.svg"}
                alt={doc.name}
                width={400}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="w-[317px] h-[142px] text-center bg-white rounded-lg shadow flex flex-col justify-between pt-4 pb-2">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-1">{doc.name}</h3>
                <p className="text-[#1E3A8A] font-bold mb-2">{doc.specialty}</p>
                <div className="flex justify-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-[#1F2B6C] rounded-full flex items-center justify-center text-white">
                    <FaLinkedinIn size={16} />
                  </span>
                  <span className="w-8 h-8 bg-[#1F2B6C] rounded-full flex items-center justify-center text-white">
                    <FaFacebookF size={16} />
                  </span>
                  <span className="w-8 h-8 bg-[#1F2B6C] rounded-full flex items-center justify-center text-white">
                    <FaInstagram size={16} />
                  </span>
                </div>
              </div>

              <button className="w-[340px] h-[47px]  bg-red-600 text-white text-center font-medium hover:bg-red-700 transition-colors mx-auto">
                View Profile
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
