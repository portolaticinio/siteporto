"use client";

import {
  Heart,
  Leaf,
  Recycle,
  Users,
  Truck,
  ShieldCheck,
} from "lucide-react";

import farmImg from "@/assets/dairy-farm.jpg";
import { SectionHeading } from "./SectionTitle";

import { SectionLabel } from "./SectionLabel";
import { SectionParagraph } from "./SectionParagraph";


export function Values() {
  const highlights = [
    {
      icon: <Users className="h-5 w-5" />,
      value: "14",
      label: "Produtores parceiros",
    },
    {
      icon: <Truck className="h-5 w-5" />,
      value: "Diária",
      label: "Coleta do leite",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      value: "100%",
      label: "Análise na chegada",
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      value: "Regional",
      label: "Produção local",
    },
  ];

  const values = [
    {
      icon: <Recycle className="h-6 w-6" />,
      title: "Soro reaproveitado",
      description:
        "100% do soro gerado é destinado a produtores rurais para alimentação animal, evitando desperdícios.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Empregos locais",
      description:
        "24 empregos diretos e 15 indiretos fortalecendo famílias e movimentando a economia de São Francisco - PB e região.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Apoio aos produtores",
      description:
        "Parcerias duradouras com 14 produtores parceiros que valorizam o produtor rural e garantem matéria-prima de qualidade.",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Compromisso regional",
      description:
        "Fortalecemos a produção leiteira local e contribuímos para o desenvolvimento da nossa região.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-10 py-20 "
      style={{
  backgroundImage: "url('/src/assets/back.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center -179px', // Ajuste este valor em pixels para subir mais (-100px, -200px, etc.)
}}
    >
      {/* Camada de sobreposição para clarear e diminuir o contraste do fundo */}
      <div className="absolute inset-0 bg-[#F7F3E8]/85 pointer-events-none" />
      
      <div className="mx-auto relative z-10 max-w-7xl px-6">
        {/* TOPO */}

        <div className="grid items-center gap-14">
          <div>
            <SectionLabel icon={<Heart className="h-3.5 w-3.5" />}>
              Responsabilidade
            </SectionLabel>

            <SectionHeading width="full">
              Nosso propósito vai além da produção.
            </SectionHeading>

            <SectionParagraph width="large">
              Cada produto representa uma cadeia de pessoas, produtores e práticas responsáveis,
              da origem do leite ao impacto positivo na comunidade e nossa região.
            </SectionParagraph>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                  {item.icon}
                </div>
                <h4 className="text-xl">{item.title}</h4>
              </div>


              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}