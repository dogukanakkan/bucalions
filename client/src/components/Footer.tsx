import { Heart, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  organizationName?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export default function Footer({
  organizationName = "Sivil Toplum Kuruluşu",
  email = "iletisim@stk.org",
  phone = "+90 212 XXX XX XX",
  address = "İstanbul, Türkiye",
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-org-name">
              {organizationName}
            </h3>
            <p className="text-sidebar-foreground/70 text-sm leading-relaxed">
              Toplumsal dayanışmayı güçlendirmek ve sürdürülebilir bir gelecek inşa etmek için çalışıyoruz.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hakkimizda" className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors" data-testid="link-footer-about">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#uyeler" className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors" data-testid="link-footer-members">
                  Üyeler
                </a>
              </li>
              <li>
                <a href="#etkinlikler" className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors" data-testid="link-footer-events">
                  Etkinlikler
                </a>
              </li>
              <li>
                <a href="#kayit" className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors" data-testid="link-footer-join">
                  Üye Ol
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-sidebar-foreground/70">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-sidebar-foreground transition-colors" data-testid="link-footer-email">
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sidebar-foreground/70">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-sidebar-foreground transition-colors" data-testid="link-footer-phone">
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sidebar-foreground/70">
                <MapPin className="h-4 w-4 shrink-0" />
                <span data-testid="text-footer-address">{address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-sidebar-border text-center">
          <p className="text-sm text-sidebar-foreground/60 flex items-center justify-center gap-1">
            &copy; {currentYear} {organizationName}. Tüm hakları saklıdır.
            <Heart className="h-3 w-3 text-accent inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
