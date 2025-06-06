import Banner from "@/Components/Banner";
import BookAnAppointmentBanner from "../../../public/about_us_banner.png";
import ContactPageAppointmentForm from "@/Components/ContactPageAppointmentForm";

const ContactPage = () => {
  return (
    <div>
      <Banner overlayText="Book an Appointment" />
      <ContactPageAppointmentForm />
    </div>
  );
};

export default ContactPage;
