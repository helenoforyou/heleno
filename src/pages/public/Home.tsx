import React from "react";

import Categories from "../../components/home/Categories";
import CTASection from "../../components/home/CTASection";
import ForLynkers from "../../components/home/ForLynkers";
import HeroSection from "../../components/home/HeroSection";
import ValueProposition from "../../components/home/ValueProposition";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <Categories />
      {/* <Testimonials /> */}
      <ForLynkers />
      <CTASection />
    </>
  );
};

export default Home;
