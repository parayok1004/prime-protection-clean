export interface ContactSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

const STORAGE_KEY = "pps-contact-submissions";

export function getSubmissions(): ContactSubmission[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function addSubmission(submission: Omit<ContactSubmission, "id" | "date">) {
  const submissions = getSubmissions();
  submissions.unshift({
    ...submission,
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
}

export function deleteSubmission(id: string) {
  const submissions = getSubmissions().filter((s) => s.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
}
