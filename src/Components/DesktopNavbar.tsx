import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Phone,
  Clock,
  MapPin,
  Calendar,
  Users,
  User,
} from "lucide-react";
import { useState } from "react";

const DesktopNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <div className="w-full">
        {/* Top header with contact info */}
        <div className="bg-white py-2 border-b">
          <div className="container max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            <div className="flex items-center">
              <div className="p-2 rounded-md ml-10">
                <Image
                  src="/logo.jpg"
                  alt="Hospital logo"
                  width={45}
                  height={16}
                />
              </div>
              <div className="uppercase font-bold">
                <span>AZIZA HUSSENI HOSPITAL</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2 md:mt-0">
              <div className="flex items-center">
                <div className="rounded-full bg-blue-50 p-2 mr-2">
                  <Phone size={20} className="text-blue-600" />
                </div>
                <div className="text-xs">
                  <div className="text-black font-semibold">EMERGENCY</div>
                  <div>(237) 681-812-255</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-blue-50 p-2 mr-2">
                  <Clock size={20} className="text-blue-600" />
                </div>
                <div className="text-xs">
                  <div className="text-black font-semibold">WORK HOUR</div>
                  <div>09:00 - 20:00 Everyday</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-blue-50 p-2 mr-2">
                  <MapPin size={20} className="text-blue-600" />
                </div>
                <div className="text-xs">
                  <div className="text-black font-semibold">LOCATION</div>
                  <div>0123 Some Place</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-[#ED1B24] mx-auto text-white">
          <div className="container max-w-5xl mx-auto flex flex-wrap justify-between items-center px-4 py-3">
            <div className="flex space-x-6 pl-12">
              <Link href="#" className="font-medium">
                Home
              </Link>
              <Link href="/about" className="font-medium">
                About us
              </Link>
              <Link href="/services" className="font-medium">
                Services
              </Link>
              <Link href="/doctors" className="font-medium">
                Doctors
              </Link>
              <Link href="#" className="font-medium">
                News
              </Link>
              <Link href="/contact" className="font-medium">
                Contact
              </Link>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  className="rounded-full py-1 px-3 text-gray-800 "
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
                  <Search size={18} />
                </button>
              </div>
              <button className="ml-4 bg-white text-black rounded-full px-4 py-1 text-sm font-medium">
                Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        {/* <div className="relative h-[575px] bg-gray-800 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hos banner 1.jpg"
              alt="Hospital Building"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
          <div className="container mx-auto pl-4 pb-16 pt-16 ml-16  relative z-10">
            <div className="max-w-2xl mt-12">
              <p className="text-2xl mb-4" style={{ letterSpacing: "0.5em" }}>
                CARING FOR LIFE
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 font-poppins tracking-wide">
                Leading the Way
                <div className="mt-2">in Medical Excellence</div>
              </h1>
              <div className="bg-white rounded-full flex overflow-hidden shadow-lg h-15 mr-30">
                <div className="flex items-center px-4 border-gray-200">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="ml-2 text-gray-600 text-sm">
                    Doctor&apos;s Name
                  </span>
                </div>
                <div className="flex items-center px-4 border-gray-200 ml-40">
                  <MapPin size={20} className="text-gray-500" />
                  <span className="ml-2 text-gray-600 text-sm">Location</span>
                </div>
                <button className="bg-gray-400 p-3 ml-18 rounded-[500px]">
                  <Search className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Action Boxes */}
        {/* <div className="container mx-auto px-4 -mt-8 relative z-20 flex flex-wrap justify-center gap-10">
          <div className="bg-cyan-600 text-white px-6 py-4 rounded-md flex items-center w-70 h-25">
            <Calendar className="h-6 w-6 mr-3" />
            <span className="font-medium">Book an Appointment</span>
          </div>
          <div className="bg-blue-500 text-white px-6 py-4 rounded-md flex items-center w-64">
            <Users className="h-6 w-6 mr-3" />
            <span className="font-medium">Book a Consultant</span>
          </div>
          <div className="bg-cyan-500 text-white px-6 py-4 rounded-md flex items-center w-64">
            <Phone className="h-6 w-6 mr-3" />
            <span className="font-medium">Urgent Care 24/7</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DesktopNavbar;
