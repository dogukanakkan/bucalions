import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ArticlesSection from "@/components/ArticlesSection";
import MembersSection from "@/components/MembersSection";
import EventsSection from "@/components/EventsSection";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ArticlesSection />
        <MembersSection />
        <EventsSection />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}
