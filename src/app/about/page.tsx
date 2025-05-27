import Banner from "@/Components/Banner";
import React from "react";
import AboutUsBanner from "../../../public/about_us_banner.png";
import Testimonials from "@/Components/Testimonials";
import NewsSection from "@/Components/News";
import Contacts from "@/Components/Contacts";
import Welcome from "@/Components/Welcome";

const About = () => {
  return (
    <div className="mb-20">
      <Banner img={AboutUsBanner} overlayText="About Us" />
      <Welcome />
      <Testimonials />
      <NewsSection />
      <Contacts />
    </div>
  );
};

export default About;
