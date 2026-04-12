import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Shield, Sparkles, ArrowRight } from "lucide-react";
import heroSecurity from "@/assets/hero-security.jpg";
import heroCleaning from "@/assets/hero-cleaning.jpg";
import logo from "@/assets/logo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Protection Service — Sicherheit & Gebäudereinigung Berlin" },
      { name: "description", content: "Professionelle Sicherheits- und Gebäudedienstleistungen in Berlin. Event- & Objektschutz sowie Prime Clean Berlin Reinigungsservice." },
      { property: "og:title", content: "Prime Protection Service — Sicherheit & Gebäudereinigung Berlin" },
      { property: "og:description", content: "Professionelle Sicherheits- und Gebäudedienstleistungen in Berlin." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <img src={heroSecurity} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
            <div className="absolute inset-0 bg-background/70" />
          </div>
          <div className="relative hidden md:block">
            <img src={heroCleaning} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
            <div className="absolute inset-0 bg-background/70" />
          </div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl pt-20">
          <img src={logo} alt="Prime Protection Service" className="h-16 md:h-24 mx-auto mb-8 brightness-0 invert" />
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 leading-tight">
            Sicherheit & Sauberkeit
            <span className="block gold-text">aus einer Hand</span>
          </h1>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Prime Protection Service bietet professionellen Sicherheitsdienst und erstklassige Gebäudereinigung in Berlin — zuverlässig, diskret und auf höchstem Niveau.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/security" className="btn-gold text-sm">Sicherheitsdienst</Link>
            <Link to="/reinigung" className="btn-outline-gold text-sm">Gebäudereinigung</Link>
          </div>
        </div>
      </section>

      {/* Two services section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/security" className="group relative overflow-hidden rounded-lg border border-border card-hover">
            <img src={heroSecurity} alt="Security" loading="lazy" width={1920} height={1080} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-background/60 group-hover:bg-background/50 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <Shield className="gold-text mb-4" size={48} />
              <h2 className="text-2xl font-bold text-foreground mb-2">Security</h2>
              <p className="text-muted-foreground text-sm mb-4">Eventschutz · Objektschutz · Personenschutz</p>
              <span className="flex items-center gap-2 gold-text text-sm font-medium uppercase tracking-widest">
                Mehr erfahren <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          <Link to="/reinigung" className="group relative overflow-hidden rounded-lg border border-border card-hover">
            <img src={heroCleaning} alt="Reinigung" loading="lazy" width={1920} height={1080} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-background/60 group-hover:bg-background/50 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <Sparkles className="gold-text mb-4" size={48} />
              <h2 className="text-2xl font-bold text-foreground mb-2">Prime Clean Berlin</h2>
              <p className="text-muted-foreground text-sm mb-4">Glas · Büro · Unterhalts · Event-Reinigung</p>
              <span className="flex items-center gap-2 gold-text text-sm font-medium uppercase tracking-widest">
                Mehr erfahren <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="section-surface py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Warum Prime Protection Service?</h2>
          <div className="divider-gold mx-auto mb-8" />
          <p className="text-muted-foreground leading-relaxed text-lg">
            Gegründet von einem ehemaligen Bundeswehr-Soldaten mit Erfahrung im Objektschutz und am Regierungsflughafen. 
            Disziplin, Verantwortung und absolute Zuverlässigkeit sind keine Versprechen — sie sind unsere Grundlage.
          </p>
          <div className="mt-10">
            <Link to="/ueber-mich" className="btn-outline-gold text-sm">Über den Gründer</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">Kontaktieren Sie uns</h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground mb-8">
            Wir erstellen Ihnen gerne ein unverbindliches Angebot für Sicherheits- oder Reinigungsdienstleistungen.
          </p>
          <Link to="/kontakt" className="btn-gold text-sm">Jetzt Kontakt aufnehmen</Link>
        </div>
      </section>
    </div>
  );
}
