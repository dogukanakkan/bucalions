import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LayoutDashboard,
  FileText,
  Users,
  Calendar,
  Inbox,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Save,
  X,
} from "lucide-react";

interface Member {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
}

interface Application {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  introduction: string;
  message?: string;
  createdAt: string;
}

interface AdminDashboardProps {
  onLogout?: () => void;
  aboutContent?: string;
  members?: Member[];
  events?: Event[];
  applications?: Application[];
}

// todo: remove mock functionality
const defaultMembers: Member[] = [
  { id: "1", firstName: "Ahmet", lastName: "Yılmaz", role: "Başkan" },
  { id: "2", firstName: "Fatma", lastName: "Kaya", role: "Başkan Yardımcısı" },
  { id: "3", firstName: "Mehmet", lastName: "Demir", role: "Genel Sekreter" },
];

const defaultEvents: Event[] = [
  {
    id: "1",
    title: "Yıllık Genel Kurul",
    description: "2024 yılı değerlendirmesi",
    date: "2024-03-15",
    time: "14:00",
    location: "Merkez",
  },
];

const defaultApplications: Application[] = [
  {
    id: "1",
    firstName: "Ali",
    lastName: "Veli",
    email: "ali@example.com",
    phone: "0532 XXX XX XX",
    introduction: "Gönüllü olarak çalışmak istiyorum.",
    message: "Derneğinizi takip ediyorum.",
    createdAt: "2024-03-10",
  },
  {
    id: "2",
    firstName: "Elif",
    lastName: "Yıldız",
    email: "elif@example.com",
    introduction: "Sosyal sorumluluk projelerine katılmak istiyorum.",
    createdAt: "2024-03-09",
  },
];

export default function AdminDashboard({
  onLogout,
  aboutContent: initialAbout = "Derneğimiz, toplumsal dayanışmayı güçlendirmek amacıyla kurulmuştur.",
  members: initialMembers = defaultMembers,
  events: initialEvents = defaultEvents,
  applications = defaultApplications,
}: AdminDashboardProps) {
  const [aboutContent, setAboutContent] = useState(initialAbout);
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [tempAbout, setTempAbout] = useState(aboutContent);
  const [members, setMembers] = useState(initialMembers);
  const [events, setEvents] = useState(initialEvents);
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [newMember, setNewMember] = useState({ firstName: "", lastName: "", role: "" });
  const [newEvent, setNewEvent] = useState({ title: "", description: "", date: "", time: "", location: "" });

  const handleSaveAbout = () => {
    setAboutContent(tempAbout);
    setIsEditingAbout(false);
    console.log("About content saved:", tempAbout);
  };

  const handleAddMember = () => {
    if (newMember.firstName && newMember.lastName && newMember.role) {
      const member: Member = {
        id: Date.now().toString(),
        ...newMember,
      };
      setMembers([...members, member]);
      setNewMember({ firstName: "", lastName: "", role: "" });
      setIsAddMemberOpen(false);
      console.log("Member added:", member);
    }
  };

  const handleDeleteMember = (id: string) => {
    setMembers(members.filter((m) => m.id !== id));
    console.log("Member deleted:", id);
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.description && newEvent.date) {
      const event: Event = {
        id: Date.now().toString(),
        ...newEvent,
      };
      setEvents([...events, event]);
      setNewEvent({ title: "", description: "", date: "", time: "", location: "" });
      setIsAddEventOpen(false);
      console.log("Event added:", event);
    }
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter((e) => e.id !== id));
    console.log("Event deleted:", id);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-50 bg-sidebar text-sidebar-foreground border-b border-sidebar-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="h-6 w-6" />
              <span className="text-lg font-semibold">Yönetim Paneli</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onLogout}
              className="text-sidebar-foreground hover:bg-sidebar-accent"
              data-testid="button-logout"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Çıkış
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="about" className="gap-2" data-testid="tab-about">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Hakkımızda</span>
            </TabsTrigger>
            <TabsTrigger value="members" className="gap-2" data-testid="tab-members">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Üyeler</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="gap-2" data-testid="tab-events">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Etkinlikler</span>
            </TabsTrigger>
            <TabsTrigger value="applications" className="gap-2" data-testid="tab-applications">
              <Inbox className="h-4 w-4" />
              <span className="hidden sm:inline">Başvurular</span>
              <Badge variant="secondary" className="ml-1">{applications.length}</Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-4">
                <CardTitle>Hakkımızda İçeriği</CardTitle>
                {!isEditingAbout ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setTempAbout(aboutContent);
                      setIsEditingAbout(true);
                    }}
                    data-testid="button-edit-about"
                  >
                    <Pencil className="h-4 w-4 mr-2" />
                    Düzenle
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button size="sm" onClick={handleSaveAbout} data-testid="button-save-about">
                      <Save className="h-4 w-4 mr-2" />
                      Kaydet
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditingAbout(false)}
                      data-testid="button-cancel-about"
                    >
                      <X className="h-4 w-4 mr-2" />
                      İptal
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                {isEditingAbout ? (
                  <Textarea
                    value={tempAbout}
                    onChange={(e) => setTempAbout(e.target.value)}
                    className="min-h-[200px]"
                    placeholder="Hakkımızda içeriğini yazın..."
                    data-testid="textarea-about"
                  />
                ) : (
                  <p className="text-muted-foreground whitespace-pre-wrap" data-testid="text-about-preview">
                    {aboutContent}
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="members">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-4">
                <CardTitle>Üye Yönetimi</CardTitle>
                <Dialog open={isAddMemberOpen} onOpenChange={setIsAddMemberOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" data-testid="button-add-member">
                      <Plus className="h-4 w-4 mr-2" />
                      Üye Ekle
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Yeni Üye Ekle</DialogTitle>
                      <DialogDescription>Yönetim kurulu üyesi bilgilerini girin.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="firstName">Ad</Label>
                        <Input
                          id="firstName"
                          value={newMember.firstName}
                          onChange={(e) => setNewMember({ ...newMember, firstName: e.target.value })}
                          data-testid="input-new-member-firstname"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="lastName">Soyad</Label>
                        <Input
                          id="lastName"
                          value={newMember.lastName}
                          onChange={(e) => setNewMember({ ...newMember, lastName: e.target.value })}
                          data-testid="input-new-member-lastname"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="role">Görev</Label>
                        <Input
                          id="role"
                          value={newMember.role}
                          onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                          data-testid="input-new-member-role"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={handleAddMember} data-testid="button-confirm-add-member">
                        Ekle
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ad Soyad</TableHead>
                      <TableHead>Görev</TableHead>
                      <TableHead className="w-[100px]">İşlem</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {members.map((member) => (
                      <TableRow key={member.id} data-testid={`row-member-${member.id}`}>
                        <TableCell className="font-medium">
                          {member.firstName} {member.lastName}
                        </TableCell>
                        <TableCell>{member.role}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteMember(member.id)}
                            className="text-destructive hover:text-destructive"
                            data-testid={`button-delete-member-${member.id}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-4">
                <CardTitle>Etkinlik Yönetimi</CardTitle>
                <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" data-testid="button-add-event">
                      <Plus className="h-4 w-4 mr-2" />
                      Etkinlik Ekle
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Yeni Etkinlik Ekle</DialogTitle>
                      <DialogDescription>Etkinlik bilgilerini girin.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="title">Başlık</Label>
                        <Input
                          id="title"
                          value={newEvent.title}
                          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                          data-testid="input-new-event-title"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="description">Açıklama</Label>
                        <Textarea
                          id="description"
                          value={newEvent.description}
                          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                          data-testid="input-new-event-description"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="date">Tarih</Label>
                          <Input
                            id="date"
                            type="date"
                            value={newEvent.date}
                            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                            data-testid="input-new-event-date"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="time">Saat</Label>
                          <Input
                            id="time"
                            type="time"
                            value={newEvent.time}
                            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                            data-testid="input-new-event-time"
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="location">Konum</Label>
                        <Input
                          id="location"
                          value={newEvent.location}
                          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                          data-testid="input-new-event-location"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={handleAddEvent} data-testid="button-confirm-add-event">
                        Ekle
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Başlık</TableHead>
                      <TableHead>Tarih</TableHead>
                      <TableHead>Konum</TableHead>
                      <TableHead className="w-[100px]">İşlem</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.id} data-testid={`row-event-${event.id}`}>
                        <TableCell className="font-medium">{event.title}</TableCell>
                        <TableCell>
                          {new Date(event.date).toLocaleDateString("tr-TR")}
                          {event.time && ` - ${event.time}`}
                        </TableCell>
                        <TableCell>{event.location || "-"}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteEvent(event.id)}
                            className="text-destructive hover:text-destructive"
                            data-testid={`button-delete-event-${event.id}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle>Üyelik Başvuruları</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.map((app) => (
                    <Card key={app.id} className="bg-muted/50" data-testid={`card-application-${app.id}`}>
                      <CardContent className="pt-6">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-foreground">
                                {app.firstName} {app.lastName}
                              </h4>
                              <Badge variant="outline" className="text-xs">
                                {new Date(app.createdAt).toLocaleDateString("tr-TR")}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{app.email}</p>
                            {app.phone && (
                              <p className="text-sm text-muted-foreground">{app.phone}</p>
                            )}
                            <div className="pt-2">
                              <p className="text-sm font-medium text-foreground mb-1">Tanıtım:</p>
                              <p className="text-sm text-muted-foreground">{app.introduction}</p>
                            </div>
                            {app.message && (
                              <div className="pt-2">
                                <p className="text-sm font-medium text-foreground mb-1">Mesaj:</p>
                                <p className="text-sm text-muted-foreground">{app.message}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {applications.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      Henüz başvuru bulunmuyor.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
