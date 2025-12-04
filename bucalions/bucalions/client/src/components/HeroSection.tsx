import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  onJoinClick?: () => void;
}

export default function HeroSection({
  title = "Hizmet Etmek İçin Buradayız",
  subtitle = "Buca Lions Club olarak topluma hizmet etmek, ihtiyaç sahiplerine yardım eli uzatmak ve daha iyi bir dünya için çalışmak temel misyonumuzdur. We Serve!",
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
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/40 to-accent/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
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
            className="bg-accent text-accent-foreground border-2 border-accent hover:bg-accent/90 min-w-[180px] font-semibold"
            data-testid="button-hero-join"
          >
            Aramıza Katıl
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToAbout}
            className="min-w-[180px] border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            data-testid="button-hero-learn-more"
          >
            Bizi Tanıyın
          </Button>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="mt-16 inline-flex flex-col items-center gap-2 text-primary hover:text-accent transition-colors animate-bounce"
          data-testid="button-scroll-down"
        >
          <span className="text-sm font-medium">Keşfedin</span>
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
