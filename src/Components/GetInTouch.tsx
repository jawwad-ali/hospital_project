"use client"

import { Phone, MapPin, Mail, Clock } from "lucide-react"
import { work_sans, yeseva } from "@/data"

export default function GetInTouch() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-2">
          <span className={`text-[#00A0E3] ${work_sans.className} font-bolder tracking-wider text-lg`}>GET IN TOUCH</span>
        </div>
        <h2 className={`text-3xl font-bold text-center text-[#1E3A8A] mb-14 ${yeseva.className}`}>Contact</h2>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Emergency Card */}
          <div className="bg-[#ED1B24] text-white p-8 flex flex-col items-center ">
            <Phone className="w-8 h-8 mb-4" />
            <h3 className="font-bold mb-4">EMERGENCY</h3>
            <p className="text-center">(237) 681-812-255</p>
            <p className="text-center">(237) 686-331-894</p>
          </div>

          {/* Location Card */}
          <div className="bg-[#ED1B24] text-white p-8 flex flex-col items-center">
            <MapPin className="w-8 h-8 mb-4" />
            <h3 className="font-bold mb-4">LOCATION</h3>
            <p className="text-center">0123 Some place</p>
            <p className="text-center">9876 Some country</p>
          </div>

          {/* Email Card */}
          <div className="bg-[#ED1B24] text-white p-8 flex flex-col items-center">
            <Mail className="w-8 h-8 mb-4" />
            <h3 className="font-bold mb-4">EMAIL</h3>
            <p className="text-center">fildineesoe@gmail.com</p>
            <p className="text-center">myebstudios@gmail.com</p>
          </div>

          {/* Working Hours Card */}
          <div className="bg-[#ED1B24] text-white p-8 flex flex-col items-center">
            <Clock className="w-8 h-8 mb-4" />
            <h3 className="font-bold mb-4">WORKING HOURS</h3>
            <p className="text-center">Mon-Sat 09:00-20:00</p>
            <p className="text-center">Sunday Emergency only</p>
          </div>
        </div>
      </div>
    </section>
  )
}
