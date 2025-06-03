"use client";

import Image from "next/image";
import { actionButtons, ibm_plex_sans, work_sans, poppins } from "@/data";
import DoctorSearchBar from "./DoctorSearchBar";
import HeroSectionActions from "./HeroSectionActions";
import ChoosingUs from "./ChoosingUs";

const HeroSection = () => {
  return (
    <section className="bg-white font-sans">
      {/* hero Section */}
      <div className="relative h-[82dvh] bg-gray-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hos banner 1.jpg"
            alt="Hospital Building"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container mx-auto pl-4 pb-16 pt-12 lg:pl-10 relative z-10">
          <div className="max-w-2xl mx-3 lg:mx-0 mt-12">
            <p
              className={`${work_sans.className} text-lg lg:text-3xl mb-4`}
              style={{ letterSpacing: "0.3em" }}
            >
              CARING FOR LIFE
            </p>
            <h1
              className={`${poppins.className} text-[42px] leading-12 lg:leading-18 md:text-6xl font-bold mb-8 tracking-wide`}
            >
              Leading the Way in Medical Excellence
            </h1>

            {/* <DoctorSearchBar /> */}
          </div>
        </div>
      </div>

      <HeroSectionActions />

      {/* Bottom Banner */}
      <div className="relative mt-20 lg:mt-36 text-center max-w-4xl mx-auto mb-20">
        <h1
          className={` ${ibm_plex_sans.className} text-3xl md:text-5xl font-bold text-black mb-4 leading-12 lg:leading-16`}
        >
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
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-4 lg:px-20">
        <div className="relative w-full lg:max-w-lg">
          <div className="absolute inset-0 bg-red-700 rounded-2xl -left-6 -top-6 w-full h-full z-0" />
          <Image
            src="/Rectangle 11.jpg"
            alt="Doctor Visual"
            width={500}
            height={500}
            className="rounded-2xl relative z-10 object-cover w-full h-auto"
          />
        </div>

        <ChoosingUs />
      </div>
    </section>
  );
};

export default HeroSection;
