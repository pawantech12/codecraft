import Image from "next/image";
import Hero from "../components/home/HeroSection";
import TrustedBy from "@/components/home/TrustedBy";
import FeaturesSection from "../components/home/FeaturesSection";
import LiveEditorPreviewSection from "@/components/home/LiveEditorPreviewSection";
import HowItWorks from "@/components/home/HowItWorks";
import AISmartFeatures from "@/components/home/AISmartFeatures";
import PerformanceAndStack from "@/components/home/PerformanceAndStack";
import UseCasesSection from "@/components/home/UseCasesSection";
import PricingPreview from "@/components/home/PricingPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <FeaturesSection />
      <LiveEditorPreviewSection />
      <HowItWorks />
      <AISmartFeatures />
      <PerformanceAndStack />
      <UseCasesSection />
      <PricingPreview />
      <TestimonialsSection />
      <FaqSection />
      <FinalCTASection />
      <ScrollToTop />
    </main>
  );
}
