import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import AboutUs from "./pages/public/AboutUs";
import ScrollToTop from "./utils/ScrollToTop";
import OurStory from "./pages/public/OurStory";
import Safety from "./pages/public/Safety";
import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";
// import About from "./pages/About";

const AppRouter: React.FC = () => {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="safety" element={<Safety />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        
      </Route>
    </Routes>
    </>
  );
};

export default AppRouter;
