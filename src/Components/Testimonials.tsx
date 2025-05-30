"use client";

import Image from "next/image";
import TestimonialsImage from "../../public/testimonials.png";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
    author: "John Doe",
  },
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    author: "Jane Smith",
  },
  {
    quote:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    author: "Alex Johnson",
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
            className="keen-slider__slide flex flex-col items-center justify-center text-center h-full"
          >
            <div className="text-6xl md:text-7xl lg:text-8xl text-white/60 mb-6">
              &quot;
            </div>

            <blockquote className="text-white max-w-4xl mb-8">
              <p className="text-sm  md:text-xl lg:text-2xl  leading-relaxed font-light">
                {quote}
              </p>
            </blockquote>

            <cite className="text-white text-lg md:text-xl mt-3 font-medium not-italic mb-6">
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
