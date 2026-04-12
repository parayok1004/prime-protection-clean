import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { addSubmission } from "@/lib/contact-store";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Prime Protection Service Berlin" },
      { name: "description", content: "Kontaktieren Sie Prime Protection Service für Sicherheits- und Reinigungsdienstleistungen in Berlin." },
      { property: "og:title", content: "Kontakt — Prime Protection Service" },
      { property: "og:description", content: "Kontaktieren Sie uns für ein unverbindliches Angebot." },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Kontakt</h1>
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Wir freuen uns auf Ihre Anfrage. Kontaktieren Sie uns per Telefon, E-Mail oder über das Kontaktformular.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Kontaktdaten</h2>
              <div className="divider-gold mb-8" />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="gold-text mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Telefon</p>
                    <a href="tel:01639450681" className="text-foreground hover:text-gold transition-colors font-medium">
                      0163 945 0681
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="gold-text mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">E-Mail</p>
                    <a href="mailto:Kontakt@prime-protection-service.de" className="text-foreground hover:text-gold transition-colors font-medium">
                      Kontakt@prime-protection-service.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="gold-text mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Adresse</p>
                    <p className="text-foreground font-medium">Omar Khaled El Abadi</p>
                    <p className="text-muted-foreground">12057 Berlin</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Nachricht senden</h2>
              <div className="divider-gold mb-8" />

              {submitted ? (
                <div className="bg-card border border-border rounded-lg p-8 text-center">
                  <CheckCircle className="gold-text mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Vielen Dank!</h3>
                  <p className="text-muted-foreground">Ihre Nachricht wurde gesendet. Wir melden uns schnellstmöglich bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-muted-foreground uppercase tracking-widest mb-2 block">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground uppercase tracking-widest mb-2 block">Telefon</label>
                      <input
                        type="tel"
                        className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground uppercase tracking-widest mb-2 block">E-Mail</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      placeholder="Ihre E-Mail-Adresse"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground uppercase tracking-widest mb-2 block">Betreff</label>
                    <select className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                      <option value="">Bitte wählen...</option>
                      <option value="security">Sicherheitsdienst</option>
                      <option value="reinigung">Gebäudereinigung</option>
                      <option value="beides">Beides</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground uppercase tracking-widest mb-2 block">Nachricht</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                      placeholder="Ihre Nachricht..."
                    />
                  </div>
                  <button type="submit" className="btn-gold text-sm flex items-center gap-2">
                    <Send size={16} /> Nachricht senden
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
