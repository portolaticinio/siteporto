"use client";

import { Heart, Leaf, Recycle, Users, type LucideIcon } from "lucide-react";

import { SectionHeading } from "./SectionTitle";
import { SectionLabel } from "./SectionLabel";
import { SectionParagraph } from "./SectionParagraph";

type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
  cities?: { uf: string; list: string[] }[];
  citiesNote?: string;
};

const values: Value[] = [
  {
    icon: Recycle,
    title: "Soro reaproveitado",
    description:
      "100% do soro gerado na produção é destinado a produtores rurais para alimentação animal, promovendo o reaproveitamento e reduzindo desperdícios.",
  },
  {
    icon: Users,
    title: "Empregos locais",
    description:
      "23 empregos diretos e diversas outras oportunidades geradas pela operação da fábrica, fortalecendo famílias e movimentando a economia de São Francisco - PB e região.",
  },
  {
    icon: Heart,
    title: "Apoio aos produtores",
    description: "Contamos com parceiros rurais que valorizam a produção local.",
    cities: [
      {
        uf: "RN",
        list: ["Apodi", "Marcelino Vieira", "Pau dos Ferros", "Pilões", "Tenente Ananias"],
      },
      {
        uf: "PB",
        list: ["Bom Sucesso", "São José de Piranhas", "Santa Cruz", "Aparecida", "São Francisco"],
      },
    ],
    citiesNote: "+ outros produtores parceiros da região",
  },
  {
    icon: Leaf,
    title: "Compromisso regional",
    description:
      "Fortalecemos a produção leiteira local, geração de empregos e movimentação da economia, contribuindo para o crescimento sustentável e o desenvolvimento de toda a nossa região.",
  },
];

export function Values() {
  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-[60px]">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14">
          <div>
            <SectionLabel icon={<Heart aria-hidden="true" className="h-3.5 w-3.5" />}>
              Responsabilidade
            </SectionLabel>

            <SectionHeading width="full">Nosso propósito vai além da produção.</SectionHeading>

            <SectionParagraph width="large">
              Cada produto representa uma cadeia de pessoas, produtores e práticas responsáveis,
              da origem do leite ao impacto positivo na comunidade e nossa região.
            </SectionParagraph>
          </div>
        </div>

        <ul
          role="list"
          tabIndex={0}
          aria-label="Nossos compromissos"
          className="
            mt-10 grid max-h-[460px] grid-cols-1 gap-6 overflow-y-auto pr-2
            md:max-h-none md:grid-cols-2 md:overflow-visible
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A69BA]
          "
        >
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.title}
                className="
                  group relative overflow-hidden rounded-2xl border border-l-4 border-gray-200
                  border-l-[#0A69BA] bg-white p-7 shadow-sm
                  transition-[transform,box-shadow,border-color] duration-500 ease-out
                  motion-reduce:transition-none
                  hover:border-l-[#F6C72F] hover:shadow-xl motion-safe:hover:-translate-y-2
                "
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0A69BA] text-white">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>

                  <h3 className="font-sans text-lg font-semibold">{item.title}</h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {item.cities && (
                  <div className="mt-2 space-y-1.5">
                    {item.cities.map(({ uf, list }) => (
                      // 12px → 14px; #0E7FE0 em fonte pequena dava ~4,1:1, #0A69BA dá ~5,6:1
                      <p key={uf} className="flex gap-1 text-sm leading-relaxed">
                        <span className="shrink-0 font-semibold text-[#0A69BA]">{uf} -</span>
                        <span className="text-muted-foreground">{list.join(" · ")}</span>
                      </p>
                    ))}
                    {item.citiesNote && (
                      <p className="text-sm font-medium text-foreground/70">{item.citiesNote}</p>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}