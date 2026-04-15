import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Seite nicht gefunden
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Prime Protection Service | Sicherheitsdienst Berlin" },
      { name: "description", content: "Professioneller Sicherheitsdienst und Gebäudedienstleistungen aus Berlin. Objektschutz, Eventschutz und mehr." },
      { name: "author", content: "Prime Protection Service" },
      { property: "og:title", content: "Prime Protection Service | Sicherheitsdienst Berlin" },
      { property: "og:description", content: "Professioneller Sicherheitsdienst aus Berlin" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Prime Protection Service" },
      { property: "og:url", content: "https://prime-protection-service.de" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Prime Protection Service | Sicherheitsdienst Berlin" },
      { name: "twitter:description", content: "Professioneller Sicherheitsdienst aus Berlin" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
