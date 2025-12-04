import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
}

interface EventsSectionProps {
  events?: Event[];
}

const defaultEvents: Event[] = [
  {
    id: "1",
    title: "Ücretsiz Göz Taraması Kampanyası",
    description: "Lions Clubs International'ın küresel görme programı kapsamında Buca halkına ücretsiz göz taraması hizmeti sunulacaktır.",
    date: "2024-03-20",
    time: "10:00",
    location: "Buca Belediyesi Kültür Merkezi",
  },
  {
    id: "2",
    title: "Diyabet Farkındalık Semineri",
    description: "Diyabet hastalığı hakkında bilinçlendirme ve erken tanı önemi konusunda uzman doktorlarımızla seminer düzenlenecektir.",
    date: "2024-03-28",
    time: "14:00",
    location: "Lions Toplantı Salonu",
  },
  {
    id: "3",
    title: "Gençlik Liderlik Kampı",
    description: "Leo Club üyelerimiz ve gençlere yönelik liderlik becerileri geliştirme kampı. Takım çalışması, iletişim ve proje yönetimi eğitimleri verilecektir.",
    date: "2024-04-15",
    time: "09:00",
    location: "Buca Gençlik Merkezi",
  },
];

export default function EventsSection({ events = defaultEvents }: EventsSectionProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const getMonthDay = (dateStr: string) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = new Intl.DateTimeFormat("tr-TR", { month: "short" }).format(date);
    return { day, month: month.toUpperCase() };
  };

  return (
    <section id="etkinlikler" className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="text-events-title">
            Etkinlikler
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Yaklaşan etkinliklerimize katılın, topluma birlikte hizmet edelim
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => {
            const { day, month } = getMonthDay(event.date);
            return (
              <Card
                key={event.id}
                className="overflow-hidden hover-elevate transition-all duration-200 border-t-4 border-t-accent"
                data-testid={`card-event-${event.id}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg leading-tight" data-testid={`text-event-title-${event.id}`}>
                      {event.title}
                    </CardTitle>
                    <Badge className="shrink-0 bg-primary text-primary-foreground">
                      <div className="text-center">
                        <div className="text-lg font-bold leading-none">{day}</div>
                        <div className="text-xs font-normal">{month}</div>
                      </div>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground" data-testid={`text-event-desc-${event.id}`}>
                    {event.description}
                  </p>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 shrink-0 text-primary" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 shrink-0 text-primary" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0 text-accent" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
