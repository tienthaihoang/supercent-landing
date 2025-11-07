import AboutSection from "@/components/about";
import AgendaSection from "@/components/agenda";
import AudienceSection from "@/components/audience";
import BenefitsSection from "@/components/benefits";
import FAQSection from "@/components/faq";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import HubSection from "@/components/hub";
import Navbar from "@/components/navbar";
import PartnersSection from "@/components/partners";
import RegistrationSection from "@/components/registration";
import SupercentSection from "@/components/supercent";

export default async function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <AudienceSection />
      <BenefitsSection />
      <HubSection />
      <SupercentSection />
      <AgendaSection />
      <RegistrationSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
