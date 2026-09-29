import { ShieldCheck, TreePine, PackageCheck, Medal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";
import { SectionParagraph } from "./SectionParagraph";
import { WHATSAPP_LINK } from "@/lib/constants";

const BRAND_BLUE = "#0A69BA";

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
    const el = sectionRef.current;

    // Sem animação para quem prefere movimento reduzido ou navegador sem IO:
    // o conteúdo aparece imediatamente (antes ficava invisível).
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!el || prefersReduced || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // anima apenas uma vez
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certificacoes" className="overflow-hidden bg-white py-10">
      <div className="mx-auto max-w-7xl px-6" ref={sectionRef}>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionLabel icon={<ShieldCheck aria-hidden="true" className="h-4 w-4" />}>
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
              rel="noopener noreferrer"
              style={{ backgroundColor: BRAND_BLUE }}
              className="
                mt-5
                inline-flex
                h-12
                w-fit
                items-center
                justify-center
                gap-2
                rounded-2xl
                px-6
                text-sm
                font-medium
                text-white
                transition-transform
                motion-reduce:transition-none
                motion-safe:hover:-translate-y-0.5
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#0A69BA]
                sm:h-14
                sm:px-7
              "
            >
              <FaWhatsapp aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
              Fazer pedido
              <span className="sr-only">(abre o WhatsApp em uma nova aba)</span>
            </a>
          </div>

          <ul className="flex flex-wrap justify-center gap-4">
            {seals.map((seal) => {
              const Icon = seal.icon;

              return (
                <li
                  key={seal.title}
                  className={`
                    group
                    relative
                    w-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-t-4
                    border-gray-200
                    border-t-[#0A69BA]
                    bg-white
                    p-6
                    text-center
                    shadow-sm
                    transition-[transform,opacity,box-shadow,border-color]
                    duration-500
                    ease-out
                    motion-reduce:transition-none
                    hover:border-[#0A69BA]/30
                    hover:shadow-2xl
                    motion-safe:hover:-translate-y-2
                    sm:w-[calc(50%-0.5rem)]
                    ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                  `}
                >
                  <div
                    style={{ backgroundColor: BRAND_BLUE }}
                    className="
                      mx-auto
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      transition-transform
                      duration-300
                      motion-reduce:transition-none
                      motion-safe:group-hover:rotate-6
                      motion-safe:group-hover:scale-110
                    "
                  >
                    <Icon aria-hidden="true" className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="mt-3 font-sans text-lg font-semibold leading-tight text-black">
                    {seal.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium leading-6 text-black">
                    {seal.desc}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}