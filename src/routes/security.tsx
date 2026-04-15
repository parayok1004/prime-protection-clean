import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import heroSecurity from "@/assets/hero-security.jpg";
import eventSecurity from "@/assets/event-security.jpg";
import objectSecurity from "@/assets/object-security.jpg";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Sicherheitsdienst — Prime Protection Service Berlin" },
      { name: "description", content: "Professioneller Eventschutz und Objektschutz in Berlin. Prime Protection Service — Ihr zuverlässiger Partner für Sicherheit." },
      { property: "og:title", content: "Sicherheitsdienst — Prime Protection Service Berlin" },
      { property: "og:description", content: "Professioneller Eventschutz und Objektschutz in Berlin." },
    ],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <div>
      <HeroSection
        image={heroSecurity}
        title="Professioneller Sicherheitsdienst"
        subtitle="Vertrauen Sie auf erfahrene Sicherheitskräfte mit höchstem Qualitätsanspruch. Wir schützen Ihre Veranstaltungen, Objekte und Personen — diskret und kompetent."
        ctaText="Angebot anfordern"
        ctaTo="/kontakt"
      />

      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Unsere Sicherheitsleistungen</h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Von Veranstaltungen bis zum Objektschutz — wir bieten maßgeschneiderte Sicherheitslösungen für jede Anforderung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              image={eventSecurity}
              title="Eventschutz"
              description="Professionelle Sicherheit für Veranstaltungen jeder Größe. Von Firmenfeiern über Konzerte bis hin zu privaten Events — wir sorgen für einen reibungslosen und sicheren Ablauf. Unsere Teams sind erfahren, diskret und jederzeit einsatzbereit."
            />
            <ServiceCard
              image={objectSecurity}
              title="Objektschutz"
              description="Zuverlässiger Schutz für Ihre Immobilien, Baustellen und Gewerbeobjekte. Wir überwachen und sichern Ihre Liegenschaften rund um die Uhr — mit regelmäßigen Kontrollgängen und modernster Kommunikation."
            />
          </div>
        </div>
      </section>

      <section className="section-surface py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "24/7", label: "Einsatzbereit" },
              { value: "Erfahren", label: "Sicherheitskräfte" },
              { value: "100%", label: "Zuverlässigkeit" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold gold-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Sicherheit beginnt mit dem richtigen Partner</h2>
        <div className="divider-gold mx-auto mb-6" />
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
        </p>
        <Link to="/kontakt" className="btn-gold text-sm">Kontakt aufnehmen</Link>
      </section>
    </div>
  );
}
