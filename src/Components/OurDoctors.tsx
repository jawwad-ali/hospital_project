"use client";

import { doctors } from "@/data";

import { useState } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function OurDoctors() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1, // default mobile view: 1 slide per view
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        // lg breakpoint
        slides: {
          perView: 3, // 3 slides per view on large screens
          spacing: 15,
        },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created(s) {
      const play = () => {
        s.next();
        setTimeout(play, 3000);
      };
      setTimeout(play, 3000);
    },
  });
  return (
    <>
      <div ref={sliderRef} className="keen-slider max-w-[1000px] mx-auto">
        {doctors.map((doc, index) => (
          <div key={index} className="keen-slider__slide">
            <div className="lg:w-[317px] mx-6 max-h-auto bg-white border border-gray-100 rounded-lg shadow">
              <div className="w-full">
                <Image
                  src={doc.imageUrl || "/placeholder.svg"}
                  alt={doc.name}
                  width={400}
                  height={500}
                  className="w-full h-full"
                  priority
                />
              </div>

              <div className=" text-center bg-white rounded-lg shadow flex flex-col justify-between pt-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">
                    {doc.name}
                  </h3>
                  <p className="text-[#1E3A8A] font-bold mb-2">
                    {doc.specialty}
                  </p>
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

                <button className="w-full lg:w-[340px] py-3 cursor-pointer bg-red-600 text-white text-center font-medium hover:bg-red-700 transition-colors mx-auto">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-3">
        {slider?.current &&
          [...Array(slider.current.track.details.slides.length).keys()].map(
            (idx) => (
              <button
                key={idx}
                onClick={() => slider.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === idx ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            )
          )}
      </div>
    </>
  );
}
