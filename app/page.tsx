import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { PartnershipModel } from "@/components/landing/PartnershipModel";
import { Benefits } from "@/components/landing/Benefits";
import ClientGallery from "@/components/landing/ClientGallery";
import { RatesAndFees } from "@/components/landing/RatesAndFees";
import { Computations } from "@/components/landing/Computations";
import { OwnerRequirements } from "@/components/landing/OwnerRequirements";
import { Terms } from "@/components/landing/Terms";
import { Legal } from "@/components/landing/Legal";
import { Contact } from "@/components/landing/Contact";
import { Navigation } from "@/components/ui/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navigation />
      <Hero />
      <About />
      <PartnershipModel />
      <Benefits />
      <ClientGallery />
      <RatesAndFees />
      <Computations />
      <OwnerRequirements />
      <Terms />
      <Legal />
      <Contact />
    </div>
  );
}
