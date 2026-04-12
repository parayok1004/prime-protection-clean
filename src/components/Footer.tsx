import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold tracking-widest uppercase gold-text mb-4">
              Prime Protection Service
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professionelle Sicherheits- und Gebäudedienstleistungen aus Berlin.
              Vertrauen, Qualität und Zuverlässigkeit.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground text-sm hover:text-gold transition-colors">Startseite</Link>
              <Link to="/security" className="text-muted-foreground text-sm hover:text-gold transition-colors">Security</Link>
              <Link to="/reinigung" className="text-muted-foreground text-sm hover:text-gold transition-colors">Reinigung</Link>
              <Link to="/ueber-mich" className="text-muted-foreground text-sm hover:text-gold transition-colors">Über mich</Link>
              <Link to="/kontakt" className="text-muted-foreground text-sm hover:text-gold transition-colors">Kontakt</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4">Kontakt</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:01639450681" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={16} /> 0163 945 0681
              </a>
              <a href="mailto:Kontakt@prime-protection-service.de" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail size={16} /> Kontakt@prime-protection-service.de
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> 12057 Berlin
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Prime Protection Service — Omar Khaled El Abadi. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
