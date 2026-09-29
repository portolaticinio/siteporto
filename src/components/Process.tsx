"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRightCircle, Factory } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import processoBg from "@/assets_optimized/processo3.webp";

const steps = [
  { n: "01", title: "Recepção do leite", desc: "De produtores locais, testado na chegada." },
  { n: "02", title: "Pasteurização", desc: "Aquecimento controlado que preserva o sabor." },
  { n: "03", title: "Coagulação", desc: "Adição de coalho e fermentos selecionados." },
  { n: "04", title: "Modelagem", desc: "Moldagem da mussarela com precisão e padrão." },
  { n: "05", title: "Resfriamento", desc: "Feito em salmoura no tempo ideal." },
  { n: "06", title: "Embalagem", desc: "Embalagem a vácuo para manter o frescor." },
];

type Step = (typeof steps)[number];

function useStepVisibility() {
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState<boolean[]>(() => steps.map(() => false));
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    if (reduced || !("IntersectionObserver" in window)) {
      setVisible(steps.map(() => true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const shown: number[] = [];
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          shown.push(Number((entry.target as HTMLElement).dataset.index));
          observer.unobserve(entry.target);
        });
        if (!shown.length) return;
        setVisible((prev) => {
          const next = [...prev];
          shown.forEach((i) => (next[i] = true));
          return next;
        });
      },
      { threshold: 0.35 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [reduced]);

  return { visible, itemRefs };
}

function StepCard({ step, compact = false }: { step: Step; compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "relative max-w-[165px] rounded-2xl bg-[#0A69BA] px-4 py-5 text-center text-white"
          : `
            relative mx-auto w-full max-w-[210px] rounded-2xl bg-[#0A69BA]
            px-5 py-6 text-center transition-transform duration-500
            motion-reduce:transition-none motion-safe:hover:-translate-y-1
          `
      }
    >
      <div
        className={
          compact
            ? "absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white bg-[#0A69BA] text-xs font-bold text-white shadow-lg"
            : "absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-b-2 border-l-2 border-white bg-[#0A69BA] text-sm font-bold text-white shadow-lg"
        }
      >
        {step.n}
      </div>

      <h3
        className={
          compact
            ? "mt-2 font-sans text-sm font-medium leading-snug text-white"
            : "mt-2 font-sans text-lg font-medium text-white"
        }
      >
        {step.title}
      </h3>

      <p className={compact ? "mt-2 text-xs font-medium text-white" : "text-sm text-white"}>
        {step.desc}
      </p>
    </div>
  );
}

const revealClass = (visible: boolean, from: "translate-y-3" | "-translate-y-3") =>
  `transition-[transform,opacity] duration-700 ease-out motion-reduce:transition-none ${
    visible ? "translate-y-0 opacity-100" : `${from} opacity-0`
  }`;

export function Process() {
  const desktop = useStepVisibility();
  const mobile = useStepVisibility();

  return (
    <section id="processo" className="relative isolate overflow-hidden py-20">
      <img
        src={processoBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[88%_center] min-[900px]:object-[90%_center]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel icon={<Factory aria-hidden="true" className="h-3.5 w-3.5" />} variant="dark">
          Do leite ao produto
        </SectionLabel>

        <SectionHeading width="full" className="text-black">
          Cada queijo passa por {steps.length} etapas
        </SectionHeading>

        <div className="mt-2 flex items-center gap-2 lg:hidden">
          <span className="text-sm font-medium text-black">Deslize para ver mais</span>
          <ArrowRightCircle
            aria-hidden="true"
            className="h-4 w-4 text-black motion-safe:animate-pulse"
          />
        </div>

        {/* ===================== DESKTOP ===================== */}
        <div className="relative mt-16 hidden py-10 lg:block">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#DFA304] to-transparent"
          />

          <ol role="list" className="grid grid-cols-6">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              const isVisible = desktop.visible[i];
              const delay = { transitionDelay: isVisible ? `${i * 70}ms` : "0ms" };

              return (
                <li
                  key={step.n}
                  data-index={i}
                  ref={(el) => {
                    desktop.itemRefs.current[i] = el;
                  }}
                  className="flex flex-col"
                >
                  <div
                    className={`flex h-32 items-end justify-center ${revealClass(isVisible, "translate-y-3")}`}
                    style={delay}
                  >
                    {isEven ? <StepCard step={step} /> : null}
                  </div>

                  <div aria-hidden="true" className="relative flex items-center justify-center py-3">
                    <span
                      className={`
                        relative z-10 h-5 w-5 rounded-full border-4 border-[#0A69BA] bg-white
                        shadow-[0_0_15px_rgba(223,163,4,0.45)]
                        transition-transform duration-300 ease-out motion-reduce:transition-none
                        ${isVisible ? "scale-100" : "scale-0"}
                      `}
                      style={{ transitionDelay: isVisible ? `${i * 70 + 150}ms` : "0ms" }}
                    />
                  </div>

                  <div
                    className={`flex h-32 items-start justify-center pt-6 ${revealClass(isVisible, "-translate-y-3")}`}
                    style={delay}
                  >
                    {!isEven ? <StepCard step={step} /> : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* ===================== MOBILE / TABLET ===================== */}
        <div
          role="region"
          aria-label="Etapas do processo, role para o lado para ver todas"
          tabIndex={0}
          className="
            relative mt-7 flex overflow-x-auto px-2 pb-8 pt-6
            scroll-smooth motion-reduce:scroll-auto
            snap-x snap-mandatory lg:hidden
            [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black
          "
        >
          <ol role="list" className="flex w-max">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              const isVisible = mobile.visible[i];

              return (
                <li
                  key={step.n}
                  data-index={i}
                  ref={(el) => {
                    mobile.itemRefs.current[i] = el;
                  }}
                  className="flex w-[32vw] shrink-0 snap-center flex-col"
                >
                  <div
                    className={`flex h-36 items-end justify-center ${revealClass(isVisible, "translate-y-3")}`}
                  >
                    {isEven && <StepCard step={step} compact />}
                  </div>

                  <div
                    aria-hidden="true"
                    className="relative flex h-8 w-full items-center justify-center"
                  >
                    <span className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#DFA304]/20 via-[#DFA304] to-[#DFA304]/20" />
                    <span
                      className={`
                        relative z-10 h-5 w-5 rounded-full border-4 border-[#0A69BA] bg-white
                        shadow-[0_0_12px_rgba(223,163,4,0.45)]
                        transition-transform duration-300 ease-out motion-reduce:transition-none
                        ${isVisible ? "scale-100" : "scale-0"}
                      `}
                    />
                  </div>

                  <div
                    className={`flex h-36 items-start justify-center pt-6 ${revealClass(isVisible, "-translate-y-3")}`}
                  >
                    {!isEven && <StepCard step={step} compact />}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}