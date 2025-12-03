import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MembersSection from "@/components/MembersSection";
import EventsSection from "@/components/EventsSection";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  // todo: remove mock functionality - replace with real data from API
  const organizationName = "Toplum Gönüllüleri Derneği";

  return (
    <div className="min-h-screen bg-background">
      <Header organizationName={organizationName} />
      <main>
        <HeroSection />
        <AboutSection />
        <MembersSection />
        <EventsSection />
        <RegistrationForm />
      </main>
      <Footer organizationName={organizationName} />
    </div>
  );
}
