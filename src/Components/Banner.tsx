import React from "react";
import Image, { StaticImageData } from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'], // Add weights you use
    variable: '--font-poppins',
    display: 'swap',
})

const Banner = ({ img, overlayText }: { img: string | StaticImageData; overlayText: string }) => {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      {/* Background Image */}
      <Image
        src={img}
        alt="Medical professionals team"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className={`font-bold text-white text-center ${poppins.className} aboutus_heading tracking-wider`}>
          {overlayText}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
