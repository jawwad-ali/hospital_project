import AppointmentForm from "./AppointmentForm";
import { yeseva, work_sans } from "@/data";
import ScheduleHours from "./ScheduleHours";

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
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
