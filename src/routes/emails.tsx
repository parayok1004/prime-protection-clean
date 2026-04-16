import { createFileRoute, useRouter } from "@tanstack/react-router";
import { Trash2, Mail, Phone, Calendar, Tag, Inbox, RefreshCw, AlertTriangle } from "lucide-react";
import { getContactSubmissions, deleteContactSubmission } from "@/lib/contact.functions";
import type { ContactSubmission } from "@/lib/contact-store";

export const Route = createFileRoute("/emails")({
  head: () => ({
    meta: [
      { title: "Anfragen — Prime Protection Service" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  loader: async () => {
    try {
      const data = await getContactSubmissions();
      return { submissions: data as ContactSubmission[], error: null };
    } catch (err: any) {
      console.error("[emails loader] Error:", err?.message);
      return { submissions: [], error: err?.message || "Fehler beim Laden" };
    }
  },
  staleTime: 0,
  component: EmailsPage,
  errorComponent: ({ error }) => (
    <div className="pt-24 text-center py-20">
      <AlertTriangle className="mx-auto mb-4 text-destructive" size={64} />
      <h1 className="text-2xl font-bold text-foreground mb-2">Fehler</h1>
      <p className="text-muted-foreground">{error?.message || "Unbekannter Fehler"}</p>
    </div>
  ),
});

const subjectLabels: Record<string, string> = {
  security: "Sicherheitsdienst",
  reinigung: "Gebäudereinigung",
  beides: "Beides",
  sonstiges: "Sonstiges",
};

function EmailsPage() {
  const { submissions, error } = Route.useLoaderData();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    try {
      await deleteContactSubmission({ data: { id } });
      router.invalidate();
    } catch (err: any) {
      console.error("Delete failed:", err?.message);
      alert("Löschen fehlgeschlagen: " + (err?.message || "Unbekannter Fehler"));
    }
  };

  const handleRefresh = () => {
    router.invalidate();
  };

  return (
    <div className="pt-24">
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kontaktanfragen</h1>
            <div className="divider-gold mx-auto mb-6" />
            {error ? (
              <p className="text-destructive">Fehler: {error}</p>
            ) : (
              <p className="text-muted-foreground">
                {submissions.length === 0
                  ? "Noch keine Anfragen eingegangen."
                  : `${submissions.length} Anfrage${submissions.length !== 1 ? "n" : ""} vorhanden`}
              </p>
            )}
            <button
              onClick={handleRefresh}
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <RefreshCw size={14} /> Aktualisieren
            </button>
          </div>

          {submissions.length === 0 && !error ? (
            <div className="text-center py-20">
              <Inbox className="mx-auto mb-4 text-muted-foreground" size={64} />
              <p className="text-muted-foreground text-lg">Keine Anfragen vorhanden</p>
            </div>
          ) : (
            <div className="space-y-4">
              {submissions.map((s: ContactSubmission) => (
                <div key={s.id} className="bg-card border border-border rounded-lg p-6 relative group">
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-destructive transition-colors"
                    title="Löschen"
                  >
                    <Trash2 size={18} />
                  </button>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg font-semibold text-foreground">{s.name}</h3>
                      {s.subject && (
                        <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground">
                          <Tag size={12} />
                          {subjectLabels[s.subject] || s.subject}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Mail size={14} className="gold-text" />
                        <a href={`mailto:${s.email}`} className="hover:text-foreground transition-colors">{s.email}</a>
                      </span>
                      {s.phone && (
                        <span className="flex items-center gap-1.5">
                          <Phone size={14} className="gold-text" />
                          <a href={`tel:${s.phone}`} className="hover:text-foreground transition-colors">{s.phone}</a>
                        </span>
                      )}
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="gold-text" />
                        {new Date(s.date).toLocaleDateString("de-DE", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    <p className="text-foreground/80 text-sm mt-1 whitespace-pre-wrap">{s.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
