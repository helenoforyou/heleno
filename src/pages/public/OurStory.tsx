import CTASection from "../../components/our-story/CTASection";
import FutureVisionSection from "../../components/our-story/FutureVisionSection";
import HeroSection from "../../components/our-story/HeroSection";
import HowItsGoingSection from "../../components/our-story/HowItsGoingSection";
import HowItStartedSection from "../../components/our-story/HowItStartedSection";
import HowItWentSection from "../../components/our-story/HowItWentSection";

export default function OurStory() {

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <HowItStartedSection />
      <HowItWentSection />
      <HowItsGoingSection />
      <FutureVisionSection />
      <CTASection />
    </div>
  );
}