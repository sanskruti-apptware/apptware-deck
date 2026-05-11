import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import WhyChooseUs from "@/components/WhyChooseUs";
import Framework from "@/components/Framework";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import Compliance from "@/components/Compliance";
import TrustedBy from "@/components/TrustedBy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      {/* dark */}
      <Navbar />
      <Hero />
      {/* light */}
      <CredibilityStrip />
      {/* dark */}
      <WhyChooseUs />
      {/* light */}
      <Framework />
      {/* light — case studies */}
      <Services />
      {/* dark */}
      <Team />
      {/* light */}
      <Industries />
      {/* dark */}
      <Compliance />
      {/* light */}
      <TrustedBy />
      {/* dark */}
      <CTA />
      <Footer />
    </main>
  );
}
