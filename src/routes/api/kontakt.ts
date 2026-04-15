import { createFileRoute } from "@tanstack/react-router";

interface ContactRow {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

// In-memory store as fallback. On Cloudflare Workers with D1, replace with D1 binding.
// For production: bind a D1 database in wrangler.jsonc and use env.DB
const submissions: ContactRow[] = [];

export const Route = createFileRoute("/api/kontakt")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(JSON.stringify(submissions), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store, no-cache, must-revalidate",
          },
        });
      },
      POST: async ({ request }) => {
        const body = await request.json() as {
          name?: string;
          phone?: string;
          email?: string;
          subject?: string;
          message?: string;
        };

        if (!body.name || !body.email || !body.message) {
          return new Response(JSON.stringify({ error: "Name, E-Mail und Nachricht sind Pflichtfelder." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const entry: ContactRow = {
          id: crypto.randomUUID(),
          name: String(body.name).slice(0, 200),
          phone: String(body.phone || "").slice(0, 50),
          email: String(body.email).slice(0, 255),
          subject: String(body.subject || "").slice(0, 100),
          message: String(body.message).slice(0, 5000),
          date: new Date().toISOString(),
        };

        submissions.unshift(entry);

        return new Response(JSON.stringify({ success: true, id: entry.id }), {
          status: 201,
          headers: { "Content-Type": "application/json" },
        });
      },
      DELETE: async ({ request }) => {
        const body = await request.json() as { id?: string };
        if (!body.id) {
          return new Response(JSON.stringify({ error: "ID fehlt." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const idx = submissions.findIndex((s) => s.id === body.id);
        if (idx !== -1) {
          submissions.splice(idx, 1);
        }

        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
      OPTIONS: async () => {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        });
      },
    },
  },
});
