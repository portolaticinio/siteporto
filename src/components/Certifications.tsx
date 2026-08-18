import { ShieldCheck, TreePine, PackageCheck, Medal} from "lucide-react";

import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";
import { SectionParagraph } from "./SectionParagraph";
import { useEffect, useRef, useState } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";


const seals = [
{
  title: "SIE",
  desc: "Registro de Estabelecimento - Serviço de Inspeção Estadual (SEDAP-PB)",
  icon: ShieldCheck,
},
{
  title: "CCF",
  desc: "Cadastro Técnico Estadual de Consumidores de Produtos Florestais - SUDEMA/DIFLOR",
  icon: TreePine,
},
{
  title: "Registro de Produtos",
  desc: "Mistura de Requeijão e Amido - nº 01860 e 01861 (SIE)",
  icon: PackageCheck,
},
{
  title: "Medalha de Prata",
  desc: "Categoria Queijos de Massa Filada (Queijo Mussarela) - Concurso de Produtos Lácteos do Estado da Paraíba",
  icon: Medal,
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
    <section id="certificacoes" className="py-10 items-center bg-white overflow-hidden 
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
                bg-[#0E7FE0]
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
  border-t-[#0E7FE0]
  bg-white
  p-6
  text-center
  shadow-sm
  transition-all
  duration-500
  ease-out
  hover:-translate-y-2
  hover:border-[#0E7FE0]/30
  hover:shadow-2xl
  w-[calc(50%-0.5rem)]
  sm:w-[calc(50%-0.5rem)]
  lg:w-[calc(50%-0.5rem)]
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
      bg-[#0E7FE0]
      transition-transform
      duration-300
      group-hover:rotate-6
      group-hover:scale-110
    "
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="mt-3 text-ls text-black font-semibold font-sans leading-none">
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