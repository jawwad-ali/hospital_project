import Image from "next/image";
import AppointmentForm from "./AppointmentForm";
import { work_sans } from "@/data";

export default function AppointmentSection() {
  return (
    <section className="relative bg-white py-20 px-4 lg:px-20 overflow-hidden text-center">
      <div className="z-20 relative mb-10">
        <h2
          className={` ${work_sans.className} text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4`}
        >
          Book an Appointment
        </h2>
        <p className="text-sm text-[16px] lg:text-lg text-gray-600">
          At Aziza Husseini Hospital, booking an appointment is simple and
          convenient. Our easy-to-use online system allows you to choose your preferred time and
          doctor, ensuring a seamless experience.
        </p>
      </div>

      <div className="hidden relative lg:flex justify-center">
        <Image
          src="/Rectangle 33.jpg"
          alt="Hospital"
          className="object-cover rounded-lg ml-[-300px]"
          width={750}
          height={505.44}
        />
      </div>
      <AppointmentForm
        position="lg:absolute"
        top="lg:top-72"
        right="lg:right-20"
        width="lg:w-[35%]"
      />
    </section>
  );
}
