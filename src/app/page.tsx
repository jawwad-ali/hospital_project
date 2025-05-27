import BookAppointment from "@/Components/ApointmentBook";
import Contacts from "@/Components/Contacts";
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
      <BookAppointment />
      <Contacts />
    </div>
  );
}
