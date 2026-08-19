import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import nodemailer from "nodemailer";

// Ajuste os campos/mensagens conforme a necessidade do seu formulário
export const contactFormSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  company: z.string().optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "Escreva uma mensagem um pouco mais detalhada"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// Transporter usando Gmail (SMTP) — credenciais vêm de variáveis de ambiente
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // ex: seuemail@gmail.com
    pass: process.env.GMAIL_APP_PASSWORD, // senha de app de 16 dígitos (não é a senha normal)
  },
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator(contactFormSchema)
  .handler(async ({ data }) => {
    try {
      await transporter.sendMail({
        from: `"Site - Formulário de Contato" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER, // para onde a mensagem chega (seu gmail)
        replyTo: data.email, // responder já vai direto pro cliente
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
      console.error("Erro ao enviar e-mail de contato:", error);
      throw new Error(
        "Não foi possível enviar sua mensagem. Tente novamente em instantes."
      );
    }
  });