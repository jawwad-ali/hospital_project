import Banner from "@/Components/Banner"
import OurServicesBanner from "../../../public/about_us_banner.png";
import Contacts from "@/Components/Contacts";
import OurSpecialties from "@/Components/OurSpecailist";

const Services = () => {
  return (
    <div>
        <Banner overlayText="Our Services" img={OurServicesBanner} />
        <OurSpecialties />
        {/* Slider Pending */}
        <Contacts />
    </div>
  )
}

export default Services
