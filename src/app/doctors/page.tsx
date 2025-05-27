import Banner from "@/Components/Banner"
import OurDoctorsBanner from "../../../public/about_us_banner.png";
import DoctorScheduleTable from "@/Components/DoctorsLScheduleTable";

const Doctors = () => {
  return (
    <div>
        <Banner overlayText="Our Doctors" img={OurDoctorsBanner} />
        <DoctorScheduleTable />
    </div>
  )
}

export default Doctors
