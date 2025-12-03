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

// todo: remove mock functionality
const defaultEvents: Event[] = [
  {
    id: "1",
    title: "Yıllık Genel Kurul Toplantısı",
    description: "2024 yılı faaliyetlerinin değerlendirileceği ve yeni dönem hedeflerinin belirleneceği genel kurul toplantımız.",
    date: "2024-03-15",
    time: "14:00",
    location: "Merkez Toplantı Salonu",
  },
  {
    id: "2",
    title: "Gönüllü Eğitim Programı",
    description: "Yeni gönüllülerimiz için temel eğitim ve oryantasyon programı. Dernek kültürü ve projeleri hakkında bilgilendirme yapılacaktır.",
    date: "2024-03-22",
    time: "10:00",
    location: "Eğitim Merkezi",
  },
  {
    id: "3",
    title: "Bahar Festivali",
    description: "Toplumun bir araya geldiği, el işi ürünleri sergisi, yerel sanatçı performansları ve çocuk aktivitelerinin olduğu bahar festivali.",
    date: "2024-04-05",
    time: "11:00",
    location: "Şehir Parkı",
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
    <section id="etkinlikler" className="py-20 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-events-title">
            Etkinlikler
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Yaklaşan etkinliklerimizi keşfedin ve katılın
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => {
            const { day, month } = getMonthDay(event.date);
            return (
              <Card
                key={event.id}
                className="overflow-hidden hover-elevate transition-all duration-200"
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
                      <Calendar className="h-4 w-4 shrink-0" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 shrink-0" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0" />
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
