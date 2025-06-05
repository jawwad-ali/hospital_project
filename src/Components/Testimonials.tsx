"use client";

import Image from "next/image";
import TestimonialsImage from "../../public/testimonials.png";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Quote from "../../public/Vector.png";
import { work_sans } from "@/data";

const testimonials = [
  {
    quote:
      "I had a wonderful experience at this hospital. The staff was professional, the doctors were very attentive, and I felt well taken care of. The treatment I received was top-notch, and I’m grateful for the care I received during my stay.",
    author: "Ahmed Khan",
  },
  {
    quote:
      "I’ve visited several hospitals, but the level of care I received here was exceptional. The doctors explained everything thoroughly, and the entire team went above and beyond to ensure my comfort. Highly recommended!",
    author: "Sana Ali",
  },
  {
    quote:
      "My family and I are extremely grateful for the amazing service provided by this hospital. The staff treated us like family, and the facilities were state-of-the-art. It’s clear that this hospital truly cares about its patients.",
    author: "Bilal Farooq",
  },
  {
    quote:
      "From the moment I arrived, I was impressed by the cleanliness and professionalism of the hospital. The doctors were compassionate and dedicated, making sure I was well-informed throughout my treatment. I’m thankful for the care I received.",
    author: "Hina Shah",
  },
  {
    quote:
      "I had a great experience at this hospital. The treatment was effective, and the nurses and doctors were always available to help. I felt completely supported throughout my recovery process. Thank you for your excellent service.",
    author: "Faisal Rehman",
  },
];


export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created(s) {
      const play = () => {
        s.next();
        setTimeout(play, 5000);
      };
      setTimeout(play, 5000);
    },
  });

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden mt-20">
      {/* Background Image */}
      <Image
        src={TestimonialsImage}
        alt="Medical professionals background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-slate-800/80"></div>

      {/* Slider Content */}
      <div
        ref={sliderRef}
        className="keen-slider relative z-10 h-full md:px-16 lg:px-2"
      >
        {testimonials.map(({ quote, author }, idx) => (
          <div
            key={idx}
            style={{ width: "100%" }}
            className={`${work_sans.className} keen-slider__slide flex flex-col items-center justify-center text-center h-full`}
          >
            <Image src={Quote} alt="Quote" className="mb-10" />

            <blockquote className="text-white max-w-4xl mb-8">
              <p className="text-sm  md:text-xl lg:text-2xl px-2 md:px-0  leading-relaxed font-light">
                {quote}
              </p>
            </blockquote>
            <div className="h-px w-[25%] bg-gray-300"></div>
            <cite className="text-white pt-2 text-lg md:text-xl mt-3 font-medium not-italic mb-6">
              {author}
            </cite>
          </div>
        ))}

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slider.current &&
            [...Array(slider.current.track.details.slides.length).keys()].map(
              (idx) => (
                <button
                  key={idx}
                  onClick={() => slider.current?.moveToIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentSlide === idx ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
}
