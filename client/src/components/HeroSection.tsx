import { Button } from "@/components/ui/button";
import { ArrowDown, Heart } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  onJoinClick?: () => void;
}

export default function HeroSection({
  title = "Birlikte Daha Güçlüyüz",
  subtitle = "Toplumsal değişim için el ele veriyoruz. Siz de aramıza katılın ve fark yaratın.",
  onJoinClick,
}: HeroSectionProps) {
  const scrollToForm = () => {
    const element = document.querySelector("#kayit");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onJoinClick?.();
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#hakkimizda");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/30 to-accent/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.08),transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 mb-6">
          <Heart className="h-4 w-4 text-accent-foreground" />
          <span className="text-sm font-medium text-accent-foreground">Sivil Toplum Kuruluşu</span>
        </div>
        
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          data-testid="text-hero-title"
        >
          {title}
        </h1>
        
        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          data-testid="text-hero-subtitle"
        >
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-accent text-accent-foreground border border-accent-border hover:bg-accent/90 min-w-[180px]"
            data-testid="button-hero-join"
          >
            Üye Ol
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToAbout}
            className="min-w-[180px]"
            data-testid="button-hero-learn-more"
          >
            Daha Fazla Bilgi
          </Button>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="mt-16 inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          data-testid="button-scroll-down"
        >
          <span className="text-sm">Keşfedin</span>
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
