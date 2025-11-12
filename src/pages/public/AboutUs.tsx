import CoreValuesSection from "../../components/about-us/CoreValuesSection";
import CTASection from "../../components/about-us/CTASection";
import CultureSection from "../../components/about-us/CultureSection";
import HeroSection from "../../components/about-us/HeroSection";
import MissionVisionSection from "../../components/about-us/MissionVisionSection";
import TeamSection from "../../components/about-us/TeamSection";

export default function AboutUs() {


  return (
     <div className="min-h-screen bg-white">
      <HeroSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <TeamSection />
      <CultureSection />
      <CTASection />
    </div>
  );
}
