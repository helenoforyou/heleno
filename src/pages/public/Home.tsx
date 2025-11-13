import React from "react";

import Categories from "../../components/home/Categories";
import CTASection from "../../components/home/CTASection";
import ForLynkers from "../../components/home/ForLynkers";
import HeroSection from "../../components/home/HeroSection";
import HowItWorks from "../../components/home/HowItWorks";
import Safety from "../../components/home/Safety";
import Testimonials from "../../components/home/Testimonials";
import ValueProposition from "../../components/home/ValueProposition";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <ValueProposition />
      <Categories />
      <Testimonials />
      <Safety />
      <ForLynkers />
      <CTASection />
    </>
  );
};

export default Home;
