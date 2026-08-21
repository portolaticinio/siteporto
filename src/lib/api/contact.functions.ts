import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import nodemailer from "nodemailer";

import { getServerConfig } from "../config.server";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  company: z.string().optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "Escreva uma mensagem um pouco mais detalhada"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator(contactFormSchema)
  .handler(async ({ data }) => {
    const config = getServerConfig();

    if (!config.gmailUser || !config.gmailAppPassword) {
      console.error(
        "GMAIL_USER / GMAIL_APP_PASSWORD não configurados. Veja .env.example.",
      );
      throw new Error(
        "Não foi possível enviar sua mensagem agora. Tente novamente em instantes.",
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.gmailUser,
        pass: config.gmailAppPassword,
      },
    });

    try {
      await transporter.sendMail({
        from: `"Site Porto Laticínios" <${config.gmailUser}>`,
        to: config.contactToEmail,
        replyTo: data.email,
        subject: `Novo contato pelo site: ${data.name}`,
        text: `
Nome: ${data.name}
Empresa: ${data.company || "-"}
Telefone: ${data.phone || "-"}
E-mail: ${data.email}

Mensagem:
${data.message}
        `.trim(),
        html: `
          <h2>Novo contato pelo site</h2>
          <p><strong>Nome:</strong> ${data.name}</p>
          <p><strong>Empresa:</strong> ${data.company || "-"}</p>
          <p><strong>Telefone:</strong> ${data.phone || "-"}</p>
          <p><strong>E-mail:</strong> ${data.email}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${data.message.replace(/\n/g, "<br/>")}</p>
        `,
      });

      return { success: true };
    } catch (error) {
      console.error("Erro ao enviar e-mail via Gmail SMTP:", error);
      throw new Error(
        "Não foi possível enviar sua mensagem. Tente novamente em instantes.",
      );
    }
  });