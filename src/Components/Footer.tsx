import {
  Send,
  Linkedin,
  Facebook,
  Instagram,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ContactInfo from "./ContactInfo";
import { work_sans } from "@/data";

export default function Footer() {
  const contactDetails = [
    { type: "EMERGENCY", label: "Call:", details: ["(237) 681-812-255"] },
    { type: "EMAIL", label: "Email:", details: ["fildineeesoe@gmail.com"] },
    {
      type: "ADDRESS",
      label: "Address:",
      details: ["0123 Some place", "Karachi, Pakistan"],
    },
  ];

  const importantLinks = ["Appointment", "Doctors", "Services", "About Us"];

  return (
    <footer className={`bg-[#090909] ${work_sans.className} text-white`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Description */}
          <div className="lg:col-span-1 flex justify-center items-center text-center">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Leading the Way in Medical Excellence, Trusted Care.
            </p>
          </div>

          {/* Important Links */}
          <div className="lg:col-span-1">
            <h3 className={`text-white font-semibold text-lg mb-6`}>
              Important Links
            </h3>
            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact US */}
          <div className="lg:col-span-1">
            <h3 className={`text-white font-semibold text-lg mb-6`}>
              Contact Us
            </h3>
            <div className="space-y-3 text-gray-300 text-sm md:text-base">
              {contactDetails.map(({ type, label, details }, idx) => (
                <div key={idx}>
                  <span className="font-medium">{label} </span>
                  {details.map((detail, i) => (
                    <span className="pointer" key={i}>
                      {ContactInfo(type, detail)}
                      {/* Add space or line break if multiple details */}
                      {i < details.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className={`text-white font-semibold text-lg mb-6`}>
              Newsletter
            </h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-[#BFD2F8] text-white placeholder-white px-4 py-3 pr-12 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm md:text-base"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 p-2 rounded-md transition-colors duration-200">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 All Rights Reserved by Aziza Husseni
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
