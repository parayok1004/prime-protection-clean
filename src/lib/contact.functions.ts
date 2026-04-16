import { createServerFn } from "@tanstack/react-start";
import { setResponseHeaders } from "@tanstack/react-start/server";

/**
 * Helper to obtain the Cloudflare D1 binding.
 * `cloudflare:workers` is a built-in Workers module that exposes env bindings
 * without needing them passed through the fetch handler.
 */
async function getDB(): Promise<any> {
  // Dynamic import so Vite doesn't try to statically resolve the built-in module
  const { env } = (await import("cloudflare:workers" as any)) as { env: { DB: any } };
  if (!env?.DB) {
    throw new Error("D1 binding 'DB' not found. Check wrangler.jsonc d1_databases config.");
  }
  return env.DB;
}

interface ContactRow {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export const getContactSubmissions = createServerFn({ method: "GET" })
  .handler(async () => {
    setResponseHeaders(new Headers({ "Cache-Control": "no-store" }));

    const db = await getDB();
    const { results } = await db
      .prepare("SELECT id, name, phone, email, subject, message, date FROM contacts ORDER BY date DESC")
      .all();

    return (results ?? []) as ContactRow[];
  });

export const addContactSubmission = createServerFn({ method: "POST" })
  .inputValidator((data: { name: string; phone: string; email: string; subject: string; message: string }) => {
    if (!data.name || !data.email || !data.message) {
      throw new Error("Name, E-Mail und Nachricht sind Pflichtfelder.");
    }
    return {
      name: String(data.name).slice(0, 200),
      phone: String(data.phone || "").slice(0, 50),
      email: String(data.email).slice(0, 255),
      subject: String(data.subject || "").slice(0, 100),
      message: String(data.message).slice(0, 5000),
    };
  })
  .handler(async ({ data }) => {
    const db = await getDB();
    const id = crypto.randomUUID();
    const date = new Date().toISOString();

    await db
      .prepare("INSERT INTO contacts (id, name, phone, email, subject, message, date) VALUES (?, ?, ?, ?, ?, ?, ?)")
      .bind(id, data.name, data.phone, data.email, data.subject, data.message, date)
      .run();

    return { success: true, id };
  });

export const deleteContactSubmission = createServerFn({ method: "POST" })
  .inputValidator((data: { id: string }) => {
    if (!data.id) throw new Error("ID fehlt.");
    return data;
  })
  .handler(async ({ data }) => {
    const db = await getDB();
    await db.prepare("DELETE FROM contacts WHERE id = ?").bind(data.id).run();
    return { success: true };
  });
