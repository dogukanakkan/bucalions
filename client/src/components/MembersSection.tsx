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

// todo: remove mock functionality
const defaultMembers: Member[] = [
  { id: "1", firstName: "Ahmet", lastName: "Yılmaz", role: "Başkan" },
  { id: "2", firstName: "Fatma", lastName: "Kaya", role: "Başkan Yardımcısı" },
  { id: "3", firstName: "Mehmet", lastName: "Demir", role: "Genel Sekreter" },
  { id: "4", firstName: "Ayşe", lastName: "Çelik", role: "Sayman" },
  { id: "5", firstName: "Mustafa", lastName: "Şahin", role: "Yönetim Kurulu Üyesi" },
  { id: "6", firstName: "Zeynep", lastName: "Öztürk", role: "Yönetim Kurulu Üyesi" },
];

export default function MembersSection({ members = defaultMembers }: MembersSectionProps) {
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <section id="uyeler" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-members-title">
            Yönetim Kurulu
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Derneğimizin yönetim kurulu üyeleri
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader className="flex flex-row items-center justify-between gap-4 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Üyelerimiz</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 p-3 rounded-md bg-muted/50 hover-elevate"
                  data-testid={`card-member-${member.id}`}
                >
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
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
