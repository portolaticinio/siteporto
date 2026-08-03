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
    <section className="py-10 items-center overflow-hidden bg-[radial-gradient(circle_at_left,#084E80_0%,#084E80_45%,#063C67_100%)] text-white">
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

            <SectionParagraph width="medium" className="text-white">
              Seguimos padrões de segurança alimentar, com registros,
              certificações e reconhecimentos que reforçam a confiança.
            </SectionParagraph>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
            {seals.map((seal, index) => {
              const Icon = seal.icon;

              return (
                <div
                  key={seal.title}
                  className={`
  group
  rounded-xl
  border
  border-[#07598C]
  bg-[#fff]
  p-3
  text-center
  transition-all
  duration-700
  ease-out
  hover:-translate-y-2
  hover:shadow-xl

  ${visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                    }
`}
                  style={{
                    transitionDelay: `${index * 120}ms`,
                  }}
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