import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  WhyHydraClaw,
  FiveLayers,
  HowItWorks,
  Benchmark,
  TokenSection,
  QuickStart,
  AgentMarketplace,
  Roadmap,
  Community,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyHydraClaw />
      <FiveLayers />
      <HowItWorks />
      <Benchmark />
      <TokenSection />
      <QuickStart />
      <AgentMarketplace />
      <Roadmap />
      <Community />
      <Footer />
    </>
  );
}
