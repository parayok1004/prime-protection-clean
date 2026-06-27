import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung | Prime Protection Service" },
      { name: "description", content: "Datenschutzerklärung gemäß DSGVO und BDSG von Prime Protection Service." },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground mb-2">Datenschutzerklärung</h1>
        <div className="divider-gold mb-8" />
        <p className="text-muted-foreground mb-8">gemäß DSGVO und BDSG · Stand: Juni 2026</p>

        <section className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Verantwortlicher</h2>
            <p>
              Omar Khaled El Abadi<br />
              Prime Protection Service<br />
              Leo-Slezak-Str. 21<br />
              12057 Berlin<br />
              E-Mail: <a href="mailto:Kontakt@prime-protection-service.de" className="hover:text-gold transition-colors">Kontakt@prime-protection-service.de</a><br />
              Telefon: <a href="tel:01639450681" className="hover:text-gold transition-colors">0163 945 0681</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>Beim Besuch unserer Webseite werden durch den Webserver automatisch Informationen erfasst:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Webseite, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem</li>
            </ul>
            <p className="mt-2">
              Diese Daten werden ausschließlich zur Sicherstellung des störungsfreien Betriebs der
              Webseite verwendet und nach 7 Tagen gelöscht.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Kontaktaufnahme</h2>
            <p>
              Bei der Kontaktaufnahme per E-Mail oder Telefon werden die von Ihnen mitgeteilten Daten
              (Name, E-Mail-Adresse, Nachricht) gespeichert, um Ihre Anfrage zu bearbeiten. Diese
              Daten werden nach Abschluss der Anfrage gelöscht, sofern keine gesetzlichen
              Aufbewahrungspflichten bestehen.
            </p>
            <p className="mt-2">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) oder
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Weitergabe von Daten</h2>
            <p>Eine Übermittlung Ihrer persönlichen Daten an Dritte findet nicht statt, außer:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Sie haben ausdrücklich eingewilligt (Art. 6 Abs. 1 lit. a DSGVO)</li>
              <li>Die Weitergabe ist zur Vertragserfüllung erforderlich (Art. 6 Abs. 1 lit. b DSGVO)</li>
              <li>Eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies</h2>
            <p>
              Unsere Webseite verwendet keine Cookies oder vergleichbare Technologien, die eine
              Nutzeridentifikation ermöglichen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Ihre Rechte als betroffene Person</h2>
            <p>Sie haben gemäß DSGVO folgende Rechte:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Auskunftsrecht (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-2">
              Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
              <a href="mailto:Kontakt@prime-protection-service.de" className="hover:text-gold transition-colors">
                Kontakt@prime-protection-service.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die
              zuständige Behörde für Berlin ist:
            </p>
            <p className="mt-2">
              Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
              Friedrichstr. 219, 10969 Berlin<br />
              Telefon: 030 13889-0<br />
              E-Mail: <a href="mailto:mailbox@datenschutz-berlin.de" className="hover:text-gold transition-colors">mailbox@datenschutz-berlin.de</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Datensicherheit</h2>
            <p>
              Diese Webseite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
              dass die Adresszeile des Browsers mit https:// beginnt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Aktualität dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2026. Durch die
              Weiterentwicklung unserer Webseite oder aufgrund geänderter gesetzlicher Vorgaben kann
              es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
