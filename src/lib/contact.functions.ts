import { createServerFn } from "@tanstack/react-start";
import { setResponseHeaders } from "@tanstack/react-start/server";
/**
 * Access the Cloudflare D1 binding.
 * The Nitro cloudflare-module preset exposes worker env on globalThis.__env__.
 */
function getDB(): any {
  const env = (globalThis as any).__env__;
  if (!env) {
    throw new Error(
      "Workers env unavailable. Diese Funktion erfordert Cloudflare Workers Runtime."
    );
  }
  if (!env.DB) {
    throw new Error(
      "D1 Binding 'DB' nicht gefunden. Bitte in Cloudflare Pages Settings → Functions → D1 Bindings einen Eintrag mit Variable Name 'DB' anlegen."
    );
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

export const getContactSubmissions = createServerFn({ method: "GET" }).handler(
  async () => {
    setResponseHeaders(new Headers({ "Cache-Control": "no-store" }));
    console.log("[getContactSubmissions] Fetching contacts...");
    try {
      const db = getDB();
      const { results } = await db
        .prepare(
          "SELECT id, name, phone, email, subject, message, date FROM contacts ORDER BY date DESC"
        )
        .all();
      console.log("[getContactSubmissions] Found", results?.length ?? 0, "entries");
      return (results ?? []) as ContactRow[];
    } catch (err: any) {
      console.error("[getContactSubmissions] Error:", err?.message);
      throw err;
    }
  }
);

export const addContactSubmission = createServerFn({ method: "POST" })
  .inputValidator(
    (data: {
      name: string;
      phone: string;
      email: string;
      subject: string;
      message: string;
    }) => {
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
    }
  )
  .handler(async ({ data }) => {
    console.log("[addContactSubmission] Saving contact from:", data.email);
    try {
      const db = getDB();
      const id = crypto.randomUUID();
      const date = new Date().toISOString();

      await db
        .prepare(
          "INSERT INTO contacts (id, name, phone, email, subject, message, date) VALUES (?, ?, ?, ?, ?, ?, ?)"
        )
        .bind(id, data.name, data.phone, data.email, data.subject, data.message, date)
        .run();

      console.log("[addContactSubmission] Saved with id:", id);
      return { success: true, id };
    } catch (err: any) {
      console.error("[addContactSubmission] Error:", err?.message);
      throw err;
    }
  });

export const deleteContactSubmission = createServerFn({ method: "POST" })
  .inputValidator((data: { id: string }) => {
    if (!data.id) throw new Error("ID fehlt.");
    return data;
  })
  .handler(async ({ data }) => {
    console.log("[deleteContactSubmission] Deleting id:", data.id);
    try {
      const db = getDB();
      await db.prepare("DELETE FROM contacts WHERE id = ?").bind(data.id).run();
      console.log("[deleteContactSubmission] Deleted.");
      return { success: true };
    } catch (err: any) {
      console.error("[deleteContactSubmission] Error:", err?.message);
      throw err;
    }
  });
