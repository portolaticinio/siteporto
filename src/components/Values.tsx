"use client";

import {
  Heart,
  Leaf,
  Recycle,
  Users,
  Truck,
  ShieldCheck,
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
              Cada produto representa uma cadeia de pessoas, produtores e práticas
              responsáveis, da origem do leite ao impacto positivo na comunidade
              e nossa região.
            </SectionParagraph>
          </div>
        </div>


        {/* MOBILE = 2 CARDS + SCROLL */}
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
              className={`
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
`}
              "
            >
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
                    text-secondary-foreground
                  "
                >
                  {item.icon}
                </div>

                <h4 className="text-xl">
                  {item.title}
                </h4>
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