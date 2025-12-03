import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Users } from "lucide-react";

interface HeaderProps {
  organizationName?: string;
  onAdminClick?: () => void;
}

export default function Header({ organizationName = "STK", onAdminClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hakkimizda", label: "Hakkımızda" },
    { href: "#uyeler", label: "Üyeler" },
    { href: "#etkinlikler", label: "Etkinlikler" },
    { href: "#kayit", label: "Üye Ol" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
              <Users className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground" data-testid="text-org-name">
              {organizationName}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover-elevate"
                data-testid={`link-nav-${link.href.slice(1)}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="default"
              size="sm"
              onClick={onAdminClick}
              className="ml-2"
              data-testid="button-admin-login"
            >
              Yönetim
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors text-left"
                  data-testid={`link-mobile-nav-${link.href.slice(1)}`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="default"
                size="sm"
                onClick={onAdminClick}
                className="mt-2"
                data-testid="button-admin-login-mobile"
              >
                Yönetim
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
