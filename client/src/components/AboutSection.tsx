import { Target, Eye, Users } from "lucide-react";

interface AboutSectionProps {
  content?: string;
  mission?: string;
  vision?: string;
}

export default function AboutSection({
  content = "İzmir Buca Lions Kulübü 30 Ocak 1987 yılında kurulmuştur. Çeşitli saygın üyeleri ile devam etmekte olan kulübün amacı We Serve yani Hizmet Ediyoruz bilincini benimsemektir. 1987 yılından günümüze Çeşitli hizmetler sunmuş ve adını duyurmuştur. Kulüp dinamiğini aile olmak kavramından almış ve bugüne denk bu kavram ile yürütmektedir. Kulüp içerisinde benimsenen etik kurallar her zaman uygulanmakta olup Atatürk'ün ilkeleri doğrultusunda yol almaktadır. LİONS, Özgürlük, Anlayış ve  Ulusumuzun Güvenliğini benimser. Bizlerde bu yolda hizmet etmeye devam edeceğiz.",
  mission = "Buca Lions Kulübü olarak vizyonumuz; dayanışmanın, gönüllülüğün ve toplumsal sorumluluğun güçlendiği, herkesin fırsat eşitliğine erişebildiği bir gelecek yaratmaktır.",
  vision = "Buca Lions Kulübü olarak misyonumuz;eğitim, sağlık, çevre ve sosyal destek alanlarında kalıcı, sürdürülebilir ve etkili projeler üretmek; toplumun her kesimine ulaşan hizmetler sunmaktır. İhtiyaç sahibi bireylerin yaşam kalitesini artırmayı, çocukların ve gençlerin gelişimini desteklemeyi ve toplumda farkındalık yaratan çalışmalar yürütmeyi görev biliriz. Tüm faaliyetlerimizde Lions etik değerlerine bağlı kalarak şeffaflık, güven ve sorumluluk ilkeleriyle hareket ederiz. Yerel sorunlara duyarlı, küresel değerlere açık bir bakış açısıyla hem Buca’ya hem de ülkemize katkı sağlamayı hedefleriz. Gönüllülüğün dönüştürücü gücüne inanır, birlikte atılan her adımın daha güçlü bir toplum yaratacağına yürekten bağlanırız. Bu doğrultuda, her projede iyilik, hizmet ve insan odaklı bir yaklaşım sergileyerek topluma ışık olmayı sürdürüyoruz.",
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
