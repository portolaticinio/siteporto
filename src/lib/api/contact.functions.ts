import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo"),
  company: z.string().trim().optional(),
  phone: z.string().trim().min(8, "Informe um telefone válido"),
  email: z.string().trim().email("Informe um e-mail válido"),
  message: z.string().trim().min(10, "Conte um pouco mais sobre o pedido"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function sendContactMessage(
  data: ContactFormValues
) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(
      "Não foi possível enviar sua mensagem."
    );
  }

  return response.json();
}