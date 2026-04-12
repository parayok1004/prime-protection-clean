import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import heroCleaning from "@/assets/hero-cleaning.jpg";
import glassCleaning from "@/assets/glass-cleaning.jpg";
import officeCleaning from "@/assets/office-cleaning.jpg";
import eventCleaning from "@/assets/event-cleaning.jpg";
import maintenanceCleaning from "@/assets/maintenance-cleaning.jpg";

export const Route = createFileRoute("/reinigung")({
  head: () => ({
    meta: [
      { title: "Prime Clean Berlin — Gebäudereinigung | Prime Protection Service" },
      { name: "description", content: "Professionelle Gebäudereinigung in Berlin: Glas- und Fensterreinigung, Büroreinigung, Unterhaltsreinigung und Event-Reinigung." },
      { property: "og:title", content: "Prime Clean Berlin — Gebäudereinigung" },
      { property: "og:description", content: "Professionelle Gebäudereinigung in Berlin." },
    ],
  }),
  component: ReinigungPage,
});

function ReinigungPage() {
  return (
    <div>
      <HeroSection
        image={heroCleaning}
        title="Prime Clean Berlin"
        subtitle="Sauberkeit, auf die Sie zählen können. Professionelle Gebäudereinigung für Büros, Gewerbeflächen und Events in Berlin."
        ctaText="Angebot anfordern"
        ctaTo="/kontakt"
      />

      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Unsere Reinigungsleistungen</h2>
            <div className="divider-gold mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              image={glassCleaning}
              title="Glas- und Fensterreinigung"
              description="Wir sorgen für streifenfreie Sauberkeit und einen klaren Durchblick – egal ob Schaufenster, Bürofenster oder Glasfassaden."
            />
            <ServiceCard
              image={maintenanceCleaning}
              title="Unterhaltsreinigung"
              description="Ob Büro, Praxis oder Gewerbefläche – wir kümmern uns regelmäßig um die Reinigung Ihrer Räumlichkeiten und schaffen eine gepflegte, angenehme Umgebung für Mitarbeiter und Kunden."
            />
            <ServiceCard
              image={officeCleaning}
              title="Büroreinigung"
              description="Saubere Arbeitsplätze steigern das Wohlbefinden und die Produktivität. Wir reinigen diskret und effizient – angepasst an Ihre Arbeitszeiten."
            />
            <ServiceCard
              image={eventCleaning}
              title="Reinigung nach Events"
              description="Nach Veranstaltungen übernehmen wir die komplette Reinigung – schnell, gründlich und zuverlässig, damit alles wieder in bestem Zustand ist."
            />
          </div>
        </div>
      </section>

      <section className="section-surface py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Warum wir?</h2>
          <div className="divider-gold mx-auto mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Wir arbeiten als eingespieltes Team, sind pünktlich, flexibel einsetzbar und legen großen Wert auf Qualität und Kundenzufriedenheit. Auf uns können Sie sich verlassen.
          </p>
          <p className="gold-text font-semibold text-lg mt-6">
            Prime Clean Berlin – Sauberkeit, auf die Sie zählen können.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Saubere Räume beginnen hier</h2>
        <div className="divider-gold mx-auto mb-6" />
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Fordern Sie jetzt Ihr individuelles Reinigungsangebot an.
        </p>
        <Link to="/kontakt" className="btn-gold text-sm">Kontakt aufnehmen</Link>
      </section>
    </div>
  );
}
