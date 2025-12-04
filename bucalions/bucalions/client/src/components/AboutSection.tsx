import { Target, Eye, Users } from "lucide-react";

interface AboutSectionProps {
  content?: string;
  mission?: string;
  vision?: string;
}

export default function AboutSection({
  content = "Buca Lions Club, Lions Clubs International'ın bir parçası olarak 1917'den bu yana dünya genelinde sürdürülen hizmet geleneğini Buca'da temsil etmektedir. Görme sağlığından açlıkla mücadeleye, çevre korumadan diyabet farkındalığına kadar birçok alanda topluma hizmet ediyoruz.",
  mission = "Gönüllü üyelerimizle birlikte toplumun ihtiyaçlarına cevap vermek, yerel ve küresel ölçekte insani yardım projelerini hayata geçirmek.",
  vision = "Herkesin birbirine yardım ettiği, dayanışmanın güçlü olduğu bir toplum. We Serve - Hizmet Ediyoruz!",
}: AboutSectionProps) {
  return (
    <section id="hakkimizda" className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="text-about-title">
            Hakkımızda
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <p
            className="text-lg text-muted-foreground leading-relaxed text-center mb-12"
            data-testid="text-about-content"
          >
            {content}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border-2 border-primary/20 rounded-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                  <Target className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary">Misyonumuz</h3>
              </div>
              <p className="text-muted-foreground" data-testid="text-about-mission">
                {mission}
              </p>
            </div>

            <div className="bg-card border-2 border-accent/50 rounded-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent">
                  <Eye className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary">Vizyonumuz</h3>
              </div>
              <p className="text-muted-foreground" data-testid="text-about-vision">
                {vision}
              </p>
            </div>
          </div>

          <div className="mt-8 bg-primary/10 border-2 border-primary/30 rounded-md p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Users className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold text-primary">50+</span>
            </div>
            <p className="text-muted-foreground">Aktif Üye</p>
          </div>
        </div>
      </div>
    </section>
  );
}
