import Banner from "@/Components/Banner";
import Testimonials from "@/Components/Testimonials";
import NewsSection from "@/Components/News";
import Contacts from "@/Components/Contacts";
import Welcome from "@/Components/Welcome";

const About = () => {
  return (
    <div className="mb-20">
      <Banner overlayText="About Us" />
      <Welcome />
      <Testimonials />
      <NewsSection />
      <Contacts />
    </div>
  );
};

export default About;
