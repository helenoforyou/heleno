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
      <CTASection
        title="Ready to Be Part of Something Meaningful?"
        desc="Whether you're looking for support or want to help others, there's a
            place for you at MyLynk."
        a1Link=""
        a1Text="Find Your Lynker"
        a2Link=""
        a2Text="Join Our Team"
      />
    </div>
  );
}
