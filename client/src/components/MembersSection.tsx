import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

interface Member {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface MembersSectionProps {
  members?: Member[];
}

const defaultMembers: Member[] = [
  { id: "1", firstName: "Havzullah", lastName: "Çelebi", role: "Kulüp Başkanı" },
  { id: "2", firstName: "Fuat", lastName: "Orsan", role: "Başkan Yardımcısı" },
  { id: "3", firstName: "Fatih", lastName: "Uzun", role: "Sekreter" },
  { id: "4", firstName: "Hürriyet", lastName: "Tulunay", role: "Sayman" },
  { id: "5", firstName: "Necdet", lastName: "Akman", role: "Üye" },
  { id: "6", firstName: "Gülşen", lastName: "Akman", role: "Üye" },
  { id: "7", firstName: "Tuncay", lastName: "Uncu", role: "Üye" },
  { id: "8", firstName: "Nural", lastName: "Budin", role: "Üye" },
  { id: "9", firstName: "Mihriban", lastName: "Aki", role: "Üye" },
  { id: "10", firstName: "Hülya", lastName: "Arman", role: "Üye" },
  { id: "11", firstName: "Deniz", lastName: "Atasever", role: "Üye" },
  { id: "12", firstName: "Rıdvan", lastName: "Bayraktar", role: "Üye" },
  { id: "13", firstName: "Ahmet Rıdvan", lastName: "Tulunay", role: "Üye" },
  { id: "14", firstName: "Üstün", lastName: "Soydan", role: "Üye" },
  { id: "5", firstName: "Fuat Selen", lastName: "Orsan", role: "Üye" },
  { id: "6", firstName: "Abidin", lastName: "Kaleci", role: "Üye" },
  { id: "5", firstName: "İnci", lastName: "İmal", role: "Üye" },
  { id: "6", firstName: "Cumhur", lastName: "Elçi", role: "Üye" },
  { id: "5", firstName: "Serdarcan", lastName: "Boylu", role: "Üye" },
  { id: "6", firstName: "Pırıl", lastName: "Bilger Özkaranfil", role: "Üye" },
];

export default function MembersSection({ members = defaultMembers }: MembersSectionProps) {
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <section id="uyeler" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="text-members-title">
            Yönetim Kurulu
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Buca Lions Club yönetim kurulu üyeleri
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-2 border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between gap-4 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl text-primary">Üyelerimiz</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 p-3 rounded-md bg-secondary/50 border border-accent/30 hover-elevate"
                  data-testid={`card-member-${member.id}`}
                >
                  <Avatar className="h-12 w-12 border-2 border-accent">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {getInitials(member.firstName, member.lastName)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground truncate" data-testid={`text-member-name-${member.id}`}>
                      {member.firstName} {member.lastName}
                    </p>
                    <p className="text-sm text-muted-foreground truncate" data-testid={`text-member-role-${member.id}`}>
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
