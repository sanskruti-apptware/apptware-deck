import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import Framework from "@/components/Framework";
import Impact from "@/components/Impact";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Framework />
      <Impact />
      <WhyChooseUs />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
