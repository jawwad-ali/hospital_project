"use client";

import Image from "next/image";
import { yeseva, specialtiesWithIcon } from "@/data";

export default function OurSpecialties() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-6xl font-bold text-center text-black mb-5">
          HOW CAN WE HELP YOU
        </h2>
        <h2 className="text-3xl md:text-xl font-bold text-center text-blue-600 mb-5">
          ALWAYS CARING
        </h2>
        <h2
          className={`text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12 ${yeseva.className}`}
        >
          Our Specialties
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
          {specialtiesWithIcon.map((specialty: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={specialty.icon}
                alt={specialty.title}
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800 text-center">
                {specialty.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
