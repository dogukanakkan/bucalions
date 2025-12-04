import { Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@assets/ChatGPT_Image_3_Ara_2025_14_06_59_1764760641716.png";

interface FooterProps {
  organizationName?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export default function Footer({
  organizationName = "Buca Lions Club",
  email = "info@bucalions.org",
  phone = "+90 232 XXX XX XX",
  address = "Buca, İzmir, Türkiye",
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="Buca Lions Club Logo" 
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-lg font-semibold" data-testid="text-footer-org-name">
                {organizationName}
              </h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Lions Clubs International ailesinin bir parçası olarak topluma hizmet etmekten gurur duyuyoruz. We Serve!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hakkimizda" className="text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-about">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#makaleler" className="text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-articles">
                  Makaleler
                </a>
              </li>
              <li>
                <a href="#uyeler" className="text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-members">
                  Üyeler
                </a>
              </li>
              <li>
                <a href="#etkinlikler" className="text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-events">
                  Etkinlikler
                </a>
              </li>
              <li>
                <a href="#kayit" className="text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-join">
                  Üye Ol
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${email}`} className="hover:text-accent transition-colors" data-testid="link-footer-email">
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors" data-testid="link-footer-phone">
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                <span data-testid="text-footer-address">{address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            &copy; {currentYear} {organizationName}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
