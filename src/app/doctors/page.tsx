import Banner from "@/Components/Banner"
import OurDoctorsBanner from "../../../public/about_us_banner.png";
import DoctorScheduleTable from "@/Components/DoctorsLScheduleTable";
import OurDoctors from "@/Components/OurDoctors";
import Contacts from "@/Components/Contacts";

const Doctors = () => {
  return (
    <div>
        <Banner overlayText="Our Doctors" />
        <DoctorScheduleTable />
        <OurDoctors />
        <Contacts />
    </div>
  )
}

export default Doctors
