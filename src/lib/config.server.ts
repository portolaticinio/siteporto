import process from "node:process";

export function getServerConfig() {
  return {
    nodeEnv: process.env.NODE_ENV,
    gmailUser: process.env.GMAIL_USER,
    gmailAppPassword: process.env.GMAIL_APP_PASSWORD,
    contactToEmail: process.env.CONTACT_TO_EMAIL ?? process.env.GMAIL_USER ?? "portolaticinio@gmail.com",
  };
}
