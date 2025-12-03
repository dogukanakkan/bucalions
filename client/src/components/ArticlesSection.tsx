import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
}

interface ArticlesSectionProps {
  articles?: Article[];
}

const defaultArticles: Article[] = [
  {
    id: "1",
    title: "Görme Engellilere Destek Projemiz Başladı",
    summary: "Lions Clubs International'ın en önemli hizmet alanlarından biri olan görme sağlığı konusunda yeni projemizi hayata geçirdik. Buca'da ihtiyaç sahibi vatandaşlara ücretsiz göz taraması yapılacak.",
    date: "2024-03-10",
    category: "Sağlık",
  },
  {
    id: "2",
    title: "Gençlik Liderlik Programı Kayıtları Açıldı",
    summary: "Leo Club bünyesinde yürütülecek gençlik liderlik programı için başvurular başladı. 15-25 yaş arası gençlerimizi topluma hizmet etmeye davet ediyoruz.",
    date: "2024-03-05",
    category: "Eğitim",
  },
  {
    id: "3",
    title: "Çevre Koruma Etkinliğimiz Büyük İlgi Gördü",
    summary: "Geçtiğimiz hafta sonu düzenlediğimiz ağaç dikme etkinliğine 100'den fazla gönüllü katıldı. Buca'nın yeşil alanlarına 500 yeni fidan kazandırdık.",
    date: "2024-02-28",
    category: "Çevre",
  },
];

export default function ArticlesSection({ articles = defaultArticles }: ArticlesSectionProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <section id="makaleler" className="py-20 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="text-articles-title">
            Makaleler
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Projelerimiz, etkinliklerimiz ve topluma katkılarımız hakkında güncel haberler
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden hover-elevate transition-all duration-200 border-l-4 border-l-accent"
              data-testid={`card-article-${article.id}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge className="bg-primary text-primary-foreground">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{formatDate(article.date)}</span>
                </div>
                <CardTitle className="text-lg leading-tight text-foreground" data-testid={`text-article-title-${article.id}`}>
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground" data-testid={`text-article-summary-${article.id}`}>
                  {article.summary}
                </p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent p-0">
                  Devamını Oku <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
