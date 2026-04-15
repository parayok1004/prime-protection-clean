export interface ContactSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export { getContactSubmissions as getSubmissions, addContactSubmission as addSubmission, deleteContactSubmission as deleteSubmission } from "./contact.functions";
