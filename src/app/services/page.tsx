import Banner from "@/Components/Banner";
import OurServicesBanner from "../../../public/about_us_banner.png";
import Contacts from "@/Components/Contacts";
import OurSpecialties from "@/Components/OurSpecailist";
import ServicesSlider from "@/Components/ServicesSlider";
import BannerImage from "../../../public/Banner.png";

const Services = () => {
  return (
    <div>
      <Banner overlayText="Our Departments" />
      <OurSpecialties />
      {/* Slider Pending */}
      <ServicesSlider />
      <Contacts />
    </div>
  );
};

export default Services;
