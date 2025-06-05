import Image from "next/image";
import BestCare from "../../public/best_care.png";
import { features } from "@/data";

export default function HeroSection() {
  return (
    <section className="bg-white">
      {/* Blue accent bar */}
      <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-400"></div>

      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <Image
                  src={BestCare}
                  alt="Two female medical professionals smiling"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full"
                  priority
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2">
              {/* Header */}
              <div className="mb-8">
                <p className="text-blue-500 text-sm md:text-base font-medium tracking-wider uppercase mb-3">
                  Welcome to Hospital Name
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Best Care for Your Good Health
                </h1>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm md:text-base">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Description Paragraphs */}
              <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                <p>
                  At Aziza Husseini Hospital, we are dedicated to offering
                  compassionate care and the highest level of service. Our
                  medical professionals bring expertise, empathy, and a personal
                  touch to every patient.
                </p>
                <p>
                  We provide the support and attention you deserve at every step
                  of your care. From routine visits to complex treatments, we
                  ensure that every patient receives the best possible care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
