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

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CredibilityStrip />
      <WhyChooseUs />
      <Framework />
      <Services />

      <Industries />

      <Team />

      <CTA />
      <Footer />
    </main>
  );
}
