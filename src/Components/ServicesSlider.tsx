"use client";
import type React from "react";
import Image from "next/image";
import {
  Bandage,
  HeartPlus,
  BriefcaseMedical,
  Syringe,
  icons,
  SquarePlus,
} from "lucide-react";
import { Yeseva_One } from "next/font/google";
import { useState } from "react";
import { work_sans } from "@/data";

import FreeCheckUp2 from "../../public/free_checkup_two.png";
import DNA from "../../public/dna.png";
import Cardio from "../../public/cardiogram.png";
import Derma from "../../public/derma.png";

import BloodTest from "../../public/blood_test.png";
import Ortho from "../../public/ortho.png";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

const ServicesSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeService, setActiveService] = useState<string | null>();
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const sliderTabs = [
    {
      text: "Free Checkup",
      icon: (
        <Bandage
          className={`text-[#ED1B24] ${
            activeService == "Free Checkup" && `text-white`
          }`}
        />
      ),
    },
    {
      text: "Cardiogram",
      icon: (
        <HeartPlus
          className={`text-[#ED1B24] ${
            activeService == "Cardiogram" && `text-white`
          }`}
        />
      ),
    },
    {
      text: "DNA Testing",
      icon: (
        <BriefcaseMedical
          className={`text-[#ED1B24] ${
            activeService == "DNA Testing" && `text-white`
          }`}
        />
      ),
    },
    {
      text: "Blood Bank",
      icon: (
        <Syringe
          className={`text-[#ED1B24] ${
            activeService == "Blood Testing" && `text-white`
          }`}
        />
      ),
    },
    {
      text: "Orthopedic",
      icon: (
        <Syringe
          className={`text-[#ED1B24] ${
            activeService == "Blood Testing" && `text-white`
          }`}
        />
      ),
    },
    {
      text: "Dermatology",
      icon: (
        <SquarePlus
          className={`text-[#ED1B24] ${
            activeService == "Dermatology" && `text-white`
          }`}
        />
      ),
    },
  ];

  // Default slider content
  const defaultSlides = [
    {
      title: "A passion for putting patients first",
      points: [
        "A Passion for Healing",
        "All About Best",
        "5-Star Care",
        "Believe in Us",
        "Legacy of Excellence",
        "Always Caring",
      ],
      paragraphs: [
        "At our hospital, we believe that every patient deserves the best care, which is why we’re offering a free checkup to all new patients. This is your opportunity to receive a thorough examination, discuss your health concerns, and start your journey toward better health—all at no cost to you.",
        "Our team of experienced doctors and medical professionals is here to provide personalized care tailored to your unique needs. Whether you’re due for a routine checkup or just looking for expert advice, our free checkup service is the first step toward a healthier future. Don’t wait—take advantage of this limited-time offer and take control of your health today.",
      ],
      image: FreeCheckUp2,
    },
    {
      title: "Excellence in Medical Care",
      points: [
        "Advanced Technology",
        "Expert Physicians",
        "Patient-Centered Care",
        "24/7 Emergency Service",
        "Comprehensive Treatment",
        "Modern Facilities",
      ],
      paragraphs: [
        "Our commitment to excellence drives us to provide the highest quality medical care using state-of-the-art technology and innovative treatment methods. We believe every patient deserves personalized attention and care.",
        "With a team of highly qualified medical professionals, we ensure that each patient receives comprehensive treatment tailored to their specific needs and medical conditions.",
      ],
      image: Cardio,
    },
    {
      title: "Compassionate Healthcare Solutions",
      points: [
        "Holistic Approach",
        "Family-Centered Care",
        "Preventive Medicine",
        "Wellness Programs",
        "Community Health",
        "Patient Education",
      ],
      paragraphs: [
        "We focus on treating the whole person, not just the symptoms. Our holistic approach ensures that patients receive comprehensive care that addresses their physical, emotional, and social well-being.",
        "Through our wellness programs and preventive care initiatives, we help patients maintain optimal health and prevent future medical complications.",
      ],
      image: DNA,
    },
  ];

  // Service-specific content
  const serviceContent = {
    Cardiogram: {
      title: "Advanced Cardiac Care",
      points: [
        "ECG Monitoring",
        "Heart Health Assessment",
        "Cardiac Screening",
        "Preventive Cardiology",
        "Emergency Cardiac Care",
        "Heart Disease Prevention",
      ],
      paragraphs: [
        "Our cardiology department offers comprehensive heart care services including advanced ECG monitoring, cardiac screenings, and preventive care programs designed to maintain optimal heart health.",
        "With state-of-the-art equipment and experienced cardiologists, we provide accurate diagnosis and effective treatment for all types of heart conditions.",
      ],
      image: Cardio,
    },
    "DNA Testing": {
      title: "Genetic Testing & Analysis",
      points: [
        "Genetic Screening",
        "Hereditary Disease Testing",
        "Personalized Medicine",
        "Family Planning",
        "Cancer Risk Assessment",
        "Pharmacogenomics",
      ],
      paragraphs: [
        "Our advanced DNA testing services provide valuable insights into your genetic makeup, helping identify potential health risks and enabling personalized treatment approaches.",
        "Through comprehensive genetic analysis, we help patients make informed decisions about their health and family planning while providing targeted preventive care strategies.",
      ],
      image: DNA,
    },
    "Blood Bank": {
      title: "Blood Services & Transfusion",
      points: [
        "Blood Donation",
        "Blood Typing",
        "Safe Transfusions",
        "Emergency Blood Supply",
        "Blood Component Therapy",
        "Donor Screening",
      ],
      paragraphs: [
        "Our blood bank maintains a safe and adequate supply of blood products for all medical needs. We follow strict safety protocols to ensure the highest quality blood products.",
        "From routine blood typing to emergency transfusions, our blood services department is equipped to handle all blood-related medical requirements with utmost care and precision.",
      ],
      image: BloodTest,
    },
    Dermatology: {
      title: "Comprehensive Skin Care",
      points: [
        "Skin Cancer Screening",
        "Cosmetic Dermatology",
        "Acne Treatment",
        "Psoriasis Care",
        "Eczema Management",
        "Anti-Aging Treatments",
      ],
      paragraphs: [
        "Our dermatology services cover the full spectrum of skin health, from medical treatments for skin conditions to cosmetic procedures for aesthetic enhancement.",
        "With advanced diagnostic tools and treatment options, we provide personalized care for all skin types and conditions, ensuring optimal skin health and appearance.",
      ],
      image: Derma,
    },
    Orthopedic: {
      title: "Bone & Joint Specialists",
      points: [
        "Joint Replacement",
        "Sports Injury Treatment",
        "Fracture Care",
        "Spine Surgery",
        "Arthritis Management",
        "Physical Rehabilitation",
      ],
      paragraphs: [
        "Our orthopedic department specializes in treating musculoskeletal conditions, from simple fractures to complex joint replacements and spine surgeries.",
        "We combine surgical expertise with comprehensive rehabilitation programs to help patients regain mobility and return to their active lifestyles as quickly as possible.",
      ],
      image: Ortho,
    },
  };

  const getCurrentContent = () => {
    if (
      activeService &&
      serviceContent[activeService as keyof typeof serviceContent]
    ) {
      return serviceContent[activeService as keyof typeof serviceContent];
    }
    return defaultSlides[activeSlide];
  };

  const handleServiceClick = (service: string) => {
    setActiveService(service);
  };

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
    setActiveService(null); // Reset service selection when clicking dots
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const endX = e.clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      // Minimum drag distance
      if (diff > 0 && activeSlide < defaultSlides.length - 1) {
        // Drag left - next slide
        setActiveSlide(activeSlide + 1);
        setActiveService(null);
      } else if (diff < 0 && activeSlide > 0) {
        // Drag right - previous slide
        setActiveSlide(activeSlide - 1);
        setActiveService(null);
      }
    }

    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      // Minimum drag distance
      if (diff > 0 && activeSlide < defaultSlides.length - 1) {
        // Swipe left - next slide
        setActiveSlide(activeSlide + 1);
        setActiveService(null);
      } else if (diff < 0 && activeSlide > 0) {
        // Swipe right - previous slide
        setActiveSlide(activeSlide - 1);
        setActiveService(null);
      }
    }

    setIsDragging(false);
  };

  const currentContent = getCurrentContent();

  return (
    <div className="w-full">
      {/* Specialties Section */}
      <div className="py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Contact Section */}
        <div className="flex flex-col items-center justify-center w-full px-4 py-12">
          <div className="relative rounded-lg flex flex-col lg:flex-row w-full max-w-7xl gap-6">
            {/* Left Side Box */}
            <div className="bg-[#FCFEFE] flex flex-col gap-2 w-full lg:w-[253.55px] h-[500px] rounded-lg border border-gray-300 mt-6 overflow-y-auto">
              <div className="flex flex-col gap-2 text-left">
                {sliderTabs.map((item, index) => {
                  const isActive = activeService === item.text;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-4 cursor-pointer p-[26.2px] rounded-md transition-all duration-200
            ${
              isActive
                ? "bg-[#ED1B24] text-white font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }
          `}
                      onClick={() => handleServiceClick(item.text)}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span
                        className={`text-sm md:text-base ${
                          isActive ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side Content */}
            <div className="relative w-full lg:w-3/4 bg-white flex flex-col lg:p-6">
              <div
                className="relative w-full max-w-[772px] h-[350px] md:h-[400px] lg:h-[480px] rounded-md overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Foreground Image */}
                <div className="absolute top-3 left-0 right-4 bottom-3 z-10">
                  {/* <div className=" bg-red-600 lg:hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
                    <Image
                      src={ServiceSlider || "/placeholder.jpg"}
                      alt="Medical professionals"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div> */}
                  <div className="absolute top-3 left-0 right-0 bottom-3 ">
                    <Image
                      src={currentContent.image}
                      alt="Medical professionals"
                      fill
                      className="object-center lg:object-cover rounded-md "
                    />
                  </div>
                </div>
              </div>

              <h2
                className={`text-2xl md:text-3xl font-bold text-[#1F2B6C] md:pt-10 lg:pt-0 ${yeseva.className}`}
              >
                {currentContent.title}
              </h2>

              {/* Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 mt-6">
                {currentContent.points.map((label, index) => (
                  <div key={index} className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-[#ED1B24] rounded-full flex-shrink-0"></div>
                    <div className={`${work_sans.className}`}>{label}</div>
                  </div>
                ))}
              </div>

              {/* Paragraphs */}
              {currentContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`max-w-2xl mt-6 text-sm md:text-base ${work_sans.className} `}
                >
                  {paragraph}
                </p>
              ))}

              {/* Pagination Dots (always visible) */}
              {/* <div className="flex justify-center mt-6 space-x-3">
                {defaultSlides.map((_, index) => {
                  const isActive = activeSlide === index;
                  return (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`h-3 w-3 rounded-full border border-[#1F2B6C] transition duration-200
                        ${
                          isActive
                            ? "bg-[#1F2B6C] text-red-900"
                            : "bg-[#BFD2F8] opacity-50 hover:opacity-80"
                        }
                        
                        `}
                      aria-label={`Go to slide ${index + 1}`}
                      disabled={!!activeService}
                    />
                  );
                })}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesSlider;
