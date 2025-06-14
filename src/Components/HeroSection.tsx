"use client";

import Image from "next/image";
import { ibm_plex_sans, work_sans, poppins } from "@/data";
import DoctorSearchBar from "./DoctorSearchBar";
import HeroSectionActions from "./HeroSectionActions";
import ChoosingUs from "./ChoosingUs";
import WhyChooseUs from "/public/why_choose_us.png"

const HeroSection = () => {
  return (
    <section className="bg-white font-sans">
      {/* hero Section */}
      <div className="relative md:h-[82dvh] bg-gray-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hos banner 1.jpg"
            alt="Hospital Building"
            fill
            className="object-center lg:object-cover opacity-60"
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
              className={`${poppins.className} text-[42px] w-[300px] md:w-full leading-12 lg:leading-18 md:text-6xl font-bold mb-8 tracking-wide`}
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
          At Aziza Husseini Hospital, we are committed to providing the highest
          quality care to our patients. Our team of highly trained medical
          professionals is dedicated to ensuring that each patient receives the
          attention, compassion, and expertise they deserve.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-4 lg:px-20">
        <div className="relative flex items-center justify-center w-full lg:max-w-lg mx-auto">
          <div className="absolute inset-0 bg-red-700 rounded-2xl -left-6 -top-6 w-full h-full z-0" />
          <Image
            src={WhyChooseUs}
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
