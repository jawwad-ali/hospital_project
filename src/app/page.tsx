import BookAppointment from "@/Components/ApointmentBook";
import ChoosingUs from "@/Components/ChoosingUs";
import Contacts from "@/Components/Contacts";
import HospitalGallery from "@/Components/Gallery";
import GetInTouch from "@/Components/GetInTouch";
import HeroSection from "@/Components/HeroSection";
import OurDoctors from "@/Components/OurDoctors";
import OurSpecialties from "@/Components/OurSpecailist";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurSpecialties />
      <OurDoctors />
      <HospitalGallery />
      <BookAppointment />
      <Contacts />
    </div>
  );
}
