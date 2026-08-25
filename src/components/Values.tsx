"use client";

import {
  Heart,
  Leaf,
  Recycle,
  Users,
} from "lucide-react";

import { SectionHeading } from "./SectionTitle";
import { SectionLabel } from "./SectionLabel";
import { SectionParagraph } from "./SectionParagraph";

export function Values() {
  const values = [
    {
      icon: <Recycle className="h-6 w-6" />,
      title: "Soro reaproveitado",
      description:
        "100% do soro gerado na produção é destinado a produtores rurais para alimentação animal, promovendo o reaproveitamento e reduzindo desperdícios.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Empregos locais",
      description:
        "23 empregos diretos e diversas outras oportunidades geradas pela operação da fábrica, fortalecendo famílias e movimentando a economia de São Francisco - PB e região.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Apoio aos produtores",
      description:
        "Contamos com parceiros rurais que valorizam a produção local.",
      cities: (
        <div className="mt-1 space-y-1">
          <div className="flex gap-1 text-xs leading-relaxed">
            <span className="shrink-0 font-semibold text-[#0E7FE0]">
              RN -
            </span>

            <span className="text-muted-foreground">
              Apodi · Marcelino Vieira · Pau dos Ferros · Pilões · Tenente
              Ananias
            </span>
          </div>

          <div className="flex gap-1 text-xs leading-relaxed">
            <span className="shrink-0 font-semibold text-[#0E7FE0]">
              PB -
            </span>

            <span className="text-muted-foreground">
              Bom Sucesso · São José de Piranhas · Santa Cruz · Aparecida 
              · São Francisco
            </span>
          </div>

          <p className="text-xs font-medium text-foreground/70">
            + outros produtores parceiros da região
          </p>
        </div>
      ),
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Compromisso regional",
      description:
        "Fortalecemos a produção leiteira local, geração de empregos e movimentação da economia, contribuindo para o crescimento sustentável e o desenvolvimento de toda a nossa região.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-15">
      <div className="mx-auto relative z-10 max-w-7xl px-6">
        <div className="grid items-center gap-14">
          <div>
            <SectionLabel icon={<Heart className="h-3.5 w-3.5" />}>
              Responsabilidade
            </SectionLabel>

            <SectionHeading width="full">
              Nosso propósito vai além da produção.
            </SectionHeading>

            <SectionParagraph width="large">
              Cada produto representa uma cadeia de pessoas, produtores e
              práticas responsáveis, da origem do leite ao impacto positivo
              na comunidade e nossa região.
            </SectionParagraph>
          </div>
        </div>

        {/* CARDS */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-6
            
            max-h-[460px]
            overflow-y-auto
            pr-2

            md:max-h-none
            md:overflow-visible
            md:grid-cols-2
          "
        >
          {values.map((item) => (
            <div
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                border-l-4
                border-l-[#0E7FE0]
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
                hover:border-l-[#F6C72F]
                hover:shadow-xl
              "
            >
              {/* ICON + TITLE */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#0E7FE0]
                    text-white
                  "
                >
                  {item.icon}
                </div>

                <h4 className="text-ls font-sans">
                  {item.title}
                </h4>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              {/* CITIES */}
              {item.cities && item.cities}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}