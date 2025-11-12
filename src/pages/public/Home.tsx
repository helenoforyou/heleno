import React from "react";

import HowItWorks from "../../components/home/HowItWorks";
import ValueProposition from "../../components/home/ValueProposition";
import HeroSection from "../../components/home/HeroSection";
import Categories from "../../components/home/Categories";
import Testimonials from "../../components/home/Testimonials";
import Safety from "../../components/home/Safety";
import ForLynkers from "../../components/home/ForLynkers";
import CTASection from "../../components/home/CTASection";

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
