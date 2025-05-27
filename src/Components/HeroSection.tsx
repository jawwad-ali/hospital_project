"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="px-4 py-20 bg-white font-sans">
      {/* Top Banner */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 whitespace-nowrap overflow-hidden text-ellipsis w-full">
          WELCOME TO AZIZA HUSSEINI HOSPITAL
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-800 font-semibold mb-4">
          A Great Place to Receive Care
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
        <button className="inline-flex items-center text-blue-400 hover:text-blue-800  text-2xl transition">
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      {/* Visual & Why Choose Us Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-4 lg:px-20">
        {/* Image with red background */}
        <div className="relative w-full max-w-md lg:max-w-lg">
          <div className="absolute inset-0 bg-red-700 rounded-2xl -left-6 -top-6 w-full h-full z-0" />
          <Image
            src="/Rectangle 11.jpg"
            alt="Doctor Visual"
            width={500}
            height={500}
            className="rounded-2xl relative z-10 object-cover w-full h-auto"
          />
        </div>

        {/* Why You Choose Us */}
        <div className="w-full max-w-xl">
          <h3 className="text-2xl md:text-5xl font-bold text-gray-800 mb-6">
            Why You Choose Us?
          </h3>
          <ul className="space-y-4 mb-6">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
              ))}
          </ul>
          <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition">
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
