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
  return (
    <section className="pt-15 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Texto */}
          <div>
            <SectionLabel
              icon={<ShieldCheck className="h-4 w-4" />}
            >
              Selos e Qualidade
            </SectionLabel>

            <SectionHeading width="large">
              Compromisso com qualidade e excelência
            </SectionHeading>

            <SectionParagraph width="medium">
              Seguimos padrões de segurança alimentar, com registros,
              certificações e reconhecimentos que reforçam a confiança.
            </SectionParagraph>

          </div>

          {/* Imagem */}
          <div className="relative">
            <img
              src="/images/queijos-certificacao.png"
              className="w-full"
              alt=""
            />
          </div>

        </div>

        {/* Certificações */}


        <div className="grid grid-cols-2 lg:grid-cols-5 mt-10 ">

          {seals.map((seal, index) => {

            const Icon = seal.icon;

            return (
              <div
                key={seal.title}
                className=
                "px-4 py-2 text-center "
              >
                <Icon className="h-11 w-11 text-primary mx-auto" />
                <h3 className="mt-2 font-sans text-3xl">
                  {seal.title}
                </h3>
                <div className="mx-auto mt-2 h-px w-10 bg-primary" />
                <p className="mt-2 text-muted-foreground leading-relaxed text-sm">
                  {seal.desc}
                </p>

              </div>
            );

          })}
        </div>

      </div>
    </section>
  );
}