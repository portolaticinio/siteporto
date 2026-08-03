import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { sendContactMessage, contactFormSchema, type ContactFormValues } from "@/lib/api/contact.functions";
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_HOURS, COMPANY_PHONE, COMPANY_WHATSAPP_DISPLAY, WHATSAPP_LINK } from "@/lib/constants";

import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      await sendContactMessage({ data: values });
      toast.success("Pedido enviado! Nosso comercial retorna em até 2h úteis.");
      reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Não foi possível enviar. Tente novamente.");
    }
  };

  return (
    <section id="contato" className="relative overflow-hidden pt-20 pb-7 " style={{
      backgroundImage: "url('/src/assets/back.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center -179px', // Ajuste este valor em pixels para subir mais (-100px, -200px, etc.)
    }}
    >
      {/* Camada de sobreposição para clarear e diminuir o contraste do fundo */}
      < div className="absolute inset-0 bg-[#F7F3E8]/85 pointer-events-none" />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 z-10 relative">
        <div>
          <SectionLabel
            icon={<MessageCircle className="h-3.5 w-3.5" />}>
            Contato
          </SectionLabel>
          <SectionHeading width="small" >
            Estamos à disposição para atender você.
          </SectionHeading>

          <div className="mt-10 space-y-5">
            <ContactRow icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" value={COMPANY_WHATSAPP_DISPLAY} href={WHATSAPP_LINK} />
            <ContactRow icon={<Mail className="h-5 w-5" />} label="E-mail" value={COMPANY_EMAIL} href={`mailto:${COMPANY_EMAIL}`} />
            <ContactRow icon={<MapPin className="h-5 w-5" />} label="Endereço" value={COMPANY_ADDRESS} />
            <ContactRow icon={<Clock className="h-5 w-5" />} label="Atendimento" value={COMPANY_HOURS} />
          </div>
        </div>

        <form
          className="rounded-2xl bg-background p-8 text-foreground shadow-warm"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h3 className="text-2xl">Entre em contato conosco</h3>

          <div className="mt-2 grid gap-1">
            <FormField label="Nome" error={errors.name?.message}>
              <input
                placeholder="Seu nome"
                className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                {...register("name")}
              />
            </FormField>
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Empresa" error={errors.company?.message}>
                <input
                  placeholder="Razão social"
                  className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                  {...register("company")}
                />
              </FormField>
              <FormField label="Telefone" error={errors.phone?.message}>
                <input
                  placeholder="(00) 00000-0000"
                  className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                  {...register("phone")}
                />
              </FormField>
            </div>
            <FormField label="E-mail" error={errors.email?.message}>
              <input
                type="email"
                placeholder="voce@empresa.com"
                className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                {...register("email")}
              />
            </FormField>
            <FormField label="Mensagem" error={errors.message?.message}>
              <textarea
                rows={4}
                placeholder="Tire suas dúvidas, fale sobre compras, solicite informações ou envie sua mensagem."
                className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                {...register("message")}
              />
            </FormField>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 rounded-2xl bg-[#07598C] py-3.5 text-sm font-medium text-primary-foreground shadow-warm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Enviando..." : "Enviar minha mensagem"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Tag: any = href ? "a" : "div";
  return (
    <Tag
      href={href}
      target={href ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-1 rounded-2xl border border-white/15 p-2 transition"
    >
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#07598C] text-white">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-wider opacity-70">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </Tag>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
