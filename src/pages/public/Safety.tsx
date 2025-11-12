import CTASection from "../../components/safety/CTASection";
import FAQSection from "../../components/safety/FAQSection";
import HeroSection from "../../components/safety/HeroSection";
import HowItWorksSection from "../../components/safety/HowItWorksSection";
import SafetyFeaturesSection from "../../components/safety/SafetyFeaturesSection";
import SafetyGuidelinesSection from "../../components/safety/SafetyGuidelinesSection";
import TrustIndicatorsSection from "../../components/safety/TrustIndicatorsSection";

export default function Safety() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <SafetyFeaturesSection />
      <HowItWorksSection />
      <TrustIndicatorsSection />
      <SafetyGuidelinesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}