import AppointmentForm from "./AppointmentForm";
import { yeseva, work_sans } from "@/data";
import ScheduleHours from "./ScheduleHours";
import axios from "axios";

const ContactPageAppointmentForm = () => {
  return (
    <div className="my-10 lg:my-20 container lg:flex gap-8 mx-auto relative px-6 lg:px-0">
      <div className="w-full lg:w-6/12 flex flex-col relative">
        <h2
          className={`${yeseva.className} text-3xl md:text-4xl font-bold text-[#1F2B6C]`}
        >
          Book An Appointment
        </h2>

        <p className={`py-10 text-[15px] ${work_sans.className}`}>
          At Aziza Husseini Hospital, booking an appointment is simple and
          convenient. Our easy-to-use online system allows you to choose your
          preferred time and doctor, ensuring a seamless experience.
        </p>

        <div>
          <AppointmentForm />
        </div>
      </div>

      <div className="lg:w-6/12 relative mt-16 lg:mt-0">
        <ScheduleHours />
      </div>
    </div>
  );
};

export default ContactPageAppointmentForm;
