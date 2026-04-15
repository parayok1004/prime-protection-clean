export interface ContactSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export async function getSubmissions(): Promise<ContactSubmission[]> {
  const res = await fetch("/api/kontakt", {
    headers: { "Cache-Control": "no-store" },
  });
  if (!res.ok) return [];
  return res.json();
}

export async function addSubmission(submission: Omit<ContactSubmission, "id" | "date">): Promise<boolean> {
  const res = await fetch("/api/kontakt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
  });
  return res.ok;
}

export async function deleteSubmission(id: string): Promise<boolean> {
  const res = await fetch("/api/kontakt", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  return res.ok;
}
