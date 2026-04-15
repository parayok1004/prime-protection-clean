import { createServerFn } from "@tanstack/react-start";

interface ContactRow {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

// Server-side in-memory store. Persists as long as the Worker instance is alive.
// For true persistence on Cloudflare: replace with D1 database binding.
const submissions: ContactRow[] = [];

export const getContactSubmissions = createServerFn({ method: "GET" })
  .handler(async () => {
    return submissions;
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
    const entry: ContactRow = {
      id: crypto.randomUUID(),
      ...data,
      date: new Date().toISOString(),
    };
    submissions.unshift(entry);
    return { success: true, id: entry.id };
  });

export const deleteContactSubmission = createServerFn({ method: "POST" })
  .inputValidator((data: { id: string }) => {
    if (!data.id) throw new Error("ID fehlt.");
    return data;
  })
  .handler(async ({ data }) => {
    const idx = submissions.findIndex((s) => s.id === data.id);
    if (idx !== -1) submissions.splice(idx, 1);
    return { success: true };
  });
