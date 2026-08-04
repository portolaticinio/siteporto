import {
  ShieldCheck,
  BadgeCheck,
  ClipboardCheck,
  Landmark,
  Globe,
  Microscope,
} from "lucide-react";

import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";
import { SectionParagraph } from "./SectionParagraph";
import { useEffect, useRef, useState } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";


const seals = [
  {
    title: "SIF",
    desc: "Serviço de Inspeção Federal",
    icon: BadgeCheck,
  },
  {
    title: "SIE",
    desc: "Inspeção Estadual",
    icon: ClipboardCheck,
  },
  {
    title: "MAPA",
    desc: "Registro no Ministério da Agricultura",
    icon: Landmark,
  },
  {
    title: "Laudo Lab.",
    desc: "Análises microbiológicas mensais",
    icon: Microscope,
  },
  {
    title: "Boas Práticas",
    desc: "Manual BPF e APPCC implantados",
    icon: ShieldCheck,
  },
];

export function Certifications() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // anima apenas uma vez
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section className="py-10 items-center bg-white overflow-hidden 
">
      <div className="mx-auto max-w-7xl px-6"
        ref={sectionRef}>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">

          {/* Texto */}
          <div>
            <SectionLabel icon={<ShieldCheck className="h-4 w-4" />}>
              Selos e Qualidade
            </SectionLabel>

            <SectionHeading width="large">
              Compromisso com qualidade e excelência
            </SectionHeading>

            <SectionParagraph width="medium">
              Seguimos padrões de segurança alimentar, com registros,
              certificações e reconhecimentos que reforçam a confiança.
            </SectionParagraph>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="
                w-fit
                inline-flex
                h-12
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-[#07598C]
                px-6
                text-sm
                font-medium
                text-white
                transition-all
                hover:-translate-y-0.5
                sm:h-14
                sm:px-7
                mt-5
              "
            >
              <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
              Fazer pedido
            </a>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-4">
            {seals.map((seal, index) => {
              const Icon = seal.icon;

              return (
                <div
                  key={seal.title}
                  className={`
group
relative
overflow-hidden
rounded-2xl
border
border-gray-200
border-t-4
border-t-[#07598C]
bg-white
p-6
text-center
shadow-sm
transition-all
duration-500
ease-out
hover:-translate-y-2
hover:border-[#07598C]/30
hover:shadow-2xl
w-[calc(50%-0.5rem)]
sm:w-[calc(50%-0.5rem)]
lg:w-[calc(33.333%-1rem)]

${visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"}
`}
                >
                  <div
                    className="
      mx-auto
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-2xl
      bg-[#07598C]
      transition-transform
      duration-300
      group-hover:rotate-6
      group-hover:scale-110
    "
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="mt-3 text-lg text-black font-semibold leading-none">
                    {seal.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-black font-medium">
                    {seal.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>

  );
}