import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Shield, Award, Clock, Heart } from "lucide-react";

export const Route = createFileRoute("/ueber-mich")({
  head: () => ({
    meta: [
      { title: "Über mich — Omar Khaled El Abadi | Prime Protection Service" },
      { name: "description", content: "Erfahren Sie mehr über den Gründer von Prime Protection Service. Professionelle Sicherheits- und Gebäudedienstleistungen in Berlin." },
      { property: "og:title", content: "Über den Gründer — Prime Protection Service" },
      { property: "og:description", content: "Omar Khaled El Abadi — Gründer und Inhaber von Prime Protection Service." },
    ],
  }),
  component: UeberMichPage,
});

function UeberMichPage() {
  const values = [
    { icon: Shield, title: "Sicherheit", desc: "Professioneller Schutz mit höchstem Anspruch an Qualität" },
    { icon: Award, title: "Qualität", desc: "Höchste Standards bei jedem Auftrag" },
    { icon: Clock, title: "Zuverlässigkeit", desc: "Pünktlich, diskret und verlässlich" },
    { icon: Heart, title: "Vertrauen", desc: "Respektvoller Umgang mit Kunden und Eigentum" },
  ];

  return (
    <div className="pt-24">
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Über mich</h1>
            <div className="divider-gold mx-auto mb-6" />
            <p className="gold-text text-lg font-medium">Omar Khaled El Abadi</p>
            <p className="text-muted-foreground text-sm">Gründer & Inhaber — Prime Protection Service</p>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              Mein Name ist <strong>Omar Khaled El Abadi</strong> und ich bin der Gründer und Inhaber von Prime Protection Service. 
              Mit meinem Unternehmen biete ich professionelle Sicherheits- und Gebäudedienstleistungen in Berlin an – 
              basierend auf langjähriger Erfahrung, absoluter Zuverlässigkeit und höchster Professionalität.
            </p>
            <p>
              Meine berufliche Laufbahn begann bei der <strong>Bundeswehr</strong>, wo ich den Wert von Disziplin, 
              Verantwortung und präzisem Arbeiten kennenlernte. Nach meiner Zeit beim Militär habe ich diese 
              Prinzipien in den zivilen Sicherheitsbereich übertragen und mich auf anspruchsvolle Einsatzbereiche 
              spezialisiert – darunter der <strong>Schutz hochsensibler Objekte wie dem Regierungsflughafen</strong>.
            </p>
            <p>
              Diese Erfahrungen haben mich geprägt und bilden das Fundament von Prime Protection Service. 
              Für mich stehen <strong>Vertrauen, Diskretion und ein hohes Maß an Einsatzbereitschaft</strong> an erster Stelle. 
              Ich lege großen Wert darauf, jeden Auftrag mit der gleichen Sorgfalt und Zuverlässigkeit auszuführen, 
              die ich in den anspruchsvollsten Sicherheitsbereichen gelernt habe.
            </p>
            <p>
              Ob Sicherheitsdienst oder Gebäudereinigung – mein Ziel ist es, meinen Kunden einen Service zu bieten, 
              auf den sie sich jederzeit verlassen können. <strong>Qualität, Pünktlichkeit und ein respektvoller Umgang</strong> 
              mit Kunden und deren Eigentum sind für mich selbstverständlich.
            </p>
            <p className="gold-text font-semibold">
              Mit Prime Protection Service stehe ich persönlich für Sicherheit, Sauberkeit und Verantwortung – 
              getragen von militärischer Präzision und ziviler Professionalität.
            </p>
          </div>
        </div>
      </section>

      <section className="section-surface py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Unsere Werte</h2>
          <div className="divider-gold mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <v.icon className="gold-text mx-auto mb-4" size={40} />
                <h3 className="text-foreground font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Überzeugen Sie sich selbst</h2>
        <div className="divider-gold mx-auto mb-6" />
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Nehmen Sie Kontakt auf — ich berate Sie persönlich und unverbindlich.
        </p>
        <Link to="/kontakt" className="btn-gold text-sm">Kontakt aufnehmen</Link>
      </section>
    </div>
  );
}
