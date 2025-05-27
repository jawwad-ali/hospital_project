import Banner from "@/Components/Banner"
import OurServicesBanner from "../../../public/about_us_banner.png";
import Specialization from "@/Components/Spcialization";
import Contacts from "@/Components/Contacts";

const Services = () => {
  return (
    <div>
        <Banner overlayText="Our Services" img={OurServicesBanner} />
        <Specialization />
        {/* Slider Pending */}
        <Contacts />
    </div>
  )
}

export default Services
