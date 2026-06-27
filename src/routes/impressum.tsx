import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Prime Protection Service" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung von Prime Protection Service, Berlin." },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground mb-2">Impressum</h1>
        <div className="divider-gold mb-8" />
        <p className="text-muted-foreground mb-8">Angaben gemäß § 5 TMG</p>

        <section className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Verantwortlich</h2>
            <p>
              Omar Khaled El Abadi<br />
              Prime Protection Service<br />
              Leo-Slezak-Str. 21<br />
              12057 Berlin<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Kontakt</h2>
            <p>
              Telefon: <a href="tel:01639450681" className="hover:text-gold transition-colors">0163 945 0681</a><br />
              E-Mail: <a href="mailto:Kontakt@prime-protection-service.de" className="hover:text-gold transition-colors">Kontakt@prime-protection-service.de</a><br />
              Webseite: www.prime-protection-service.de
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Gewerbeanmeldung</h2>
            <p>
              Das Gewerbe ist angemeldet beim zuständigen Gewerbeamt Berlin-Neukölln.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Umsatzsteuer</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              DE462076930
            </p>
            <p className="mt-2 text-sm">
              Hinweis: Kleinunternehmer gemäß § 19 UStG – falls zutreffend.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Berufsrechtliche Regelungen</h2>
            <p>
              Die Tätigkeit als Sicherheitsdienstleister unterliegt der Gewerbeordnung (GewO) § 34a.<br />
              Zuständige Aufsichtsbehörde: Gewerbeamt Berlin.<br />
              Sachkundeprüfung nach § 34a GewO erfolgreich abgelegt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
