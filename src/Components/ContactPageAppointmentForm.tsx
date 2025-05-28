import AppointmentForm from "./AppointmentForm";
import { yeseva, work_sans } from "@/data";

const ContactPageAppointmentForm = () => {
  return (
    <div className="my-20 w-full lg:w-6/12 container relative flex flex-col justify-center items-center mx-20">
      <div>
        <h2
          className={`${yeseva.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2B6C]`}
        >
          Book An Appointment
        </h2>

        <p className={`text-md py-10 ${work_sans.className}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>

        <div className="form_box_shadow">
            <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPageAppointmentForm;
