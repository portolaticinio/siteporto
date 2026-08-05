"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRightCircle, Factory } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";

const steps = [
  {
    n: "01",
    title: "Recepção do leite",
    desc: "De produtores locais, testado na chegada.",
  },
  {
    n: "02",
    title: "Pasteurização",
    desc: "Aquecimento controlado que preserva o sabor.",
  },
  {
    n: "03",
    title: "Coagulação",
    desc: "Adição de coalho e fermentos selecionados.",
  },
  {
    n: "04",
    title: "Modelagem",
    desc: "Moldagem da mussarela com precisão e padrão.",
  },
  {
    n: "05",
    title: "Resfriamento",
    desc: "Feito em salmoura no tempo ideal.",
  },
  {
    n: "06",
    title: "Embalagem",
    desc: "Embalagem a vácuo para manter o frescor.",
  },
];

function useStepVisibility() {
  const [visible, setVisible] = useState<boolean[]>(() => steps.map(() => false));
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.index);
          setVisible((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });
        });
      },
      { threshold: 0.35 }
    );

    const nodes = itemRefs.current;
    nodes.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return { visible, itemRefs };
}

export function Process() {
  const desktop = useStepVisibility();
  const mobile = useStepVisibility();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="processo"
      className="relative overflow-hidden py-20"
      style={{
        backgroundImage: "url('/src/assets/processo.png')",
        backgroundSize: "cover",
        backgroundPosition: isMobile
          ? "88% center"
          : "100% center",
      }}
    >

      {/* profundidade sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      />


      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel icon={<Factory className="h-3.5 w-3.5" />} variant="dark">
          Do leite ao produto
        </SectionLabel>

        <SectionHeading width="full" className="text-black">
          Cada queijo passa por 6 etapas e mais de 20 conferências.
        </SectionHeading>

        <div className="flex gap-2 mt-2 items-center lg:hidden">
          <span className="text-sm text-black font-medium">
            Deslize para ver mais
          </span>
          <ArrowRightCircle className="h-4 w-4 animate-pulse text-black" />
        </div>

        {/* ===== Timeline ===== */}
        <div className="relative mt-16 py-10 hidden lg:block">
          {/* trilho central */}
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 
          bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          <div className="grid grid-cols-6">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              const isVisible = desktop.visible[i];

              const card = (
                <div
                  className="
      group
      relative
      mx-auto
      w-full
      max-w-[210px]
      rounded-2xl
      border
      border-black/10
      bg-[#0E7FE0]
      px-5
      py-6
      text-center
      backdrop-blur-md
      transition-all
      duration-500
      hover:-translate-y-1
    "
                >

                  {/* número */}
                  <div
                    className="
        absolute
        -top-6
        left-1/2
        flex
        h-12
        w-12
        -translate-x-1/2
        items-center
        justify-center
        rounded-full
        border-b-2
        border-l-2
        border-white
        bg-[#0E7FE0]
        text-sm
        font-bold
        text-white
        shadow-lg
      "
                  >
                    {step.n}
                  </div>


                  <h3
                    className="
        mt-2
        text-lg
        font-medium
        font-sans
        text-white
      "
                  >
                    {step.title}
                  </h3>


                  <p
                    className="
        text-sm
        text-white
      "
                  >
                    {step.desc}
                  </p>

                </div>
              );

              return (
                <div
                  key={step.n}
                  data-index={i}
                  ref={(el) => {
                    desktop.itemRefs.current[i] = el;
                  }}
                  className="flex flex-col"
                >
                  {/* slot superior */}
                  <div
                    className={`
                      flex h-32 items-end justify-center pb-6
                      transition-all duration-700 ease-out
                      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
                    `}
                    style={{ transitionDelay: isVisible ? `${i * 70}ms` : "0ms" }}
                  >
                    {isEven ? card : null}
                  </div>

                  {/* nó sobre o trilho */}
                  <div className="relative flex items-center justify-center py-3">
                    {/* conector vertical até o card */}
                    <span
                      className={`
                        absolute left-1/2 h-8 w-px -translate-x-1/2 bg-black/15
                        ${isEven ? "bottom-1/2" : "top-1/2"}
                      `}
                      aria-hidden
                    />
                    <span
                      className={`
    relative
    z-10
    h-5
    w-5
    rounded-full
    border-4
    border-[#0E7FE0]
    bg-white
    shadow-[0_0_25px_rgba(255,255,255,0.35)]
    transition-transform
    duration-300
    ease-out

    ${isVisible ? "scale-100" : "scale-0"}
  `}
                      style={{
                        transitionDelay: isVisible
                          ? `${i * 70 + 150}ms`
                          : "0ms"
                      }}
                    />
                  </div>

                  {/* slot inferior */}
                  <div
                    className={`
                      flex h-32 items-start justify-center pt-6
                      transition-all duration-700 ease-out
                      ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"}
                    `}
                    style={{ transitionDelay: isVisible ? `${i * 70}ms` : "0ms" }}
                  >
                    {!isEven ? card : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== Versão compacta (mobile / tablet) ===== */}
        <div className="relative mt-7 lg:hidden">

          <div
            className="
      flex overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8
      px-2
      [-ms-overflow-style:none]
      [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden
    "
          >
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              const isVisible = mobile.visible[i];

              const card = (
                <div
                  className="
      group
      relative
      max-w-[180px]
      rounded-2xl
      border
      border-black/10
      bg-[#0E7FE0]
      px-4
      py-5
      text-center
      text-white
      backdrop-blur-md
      transition-all
      duration-500

    "
                >

                  {/* número */}
                  <div
                    className="
        absolute
        -top-5
        left-1/2
        flex
        h-10
        w-10
        -translate-x-1/2
        items-center
        justify-center
        rounded-full
        border
        border-white
        bg-[#0E7FE0]
        text-xs
        font-bold
        text-white
        shadow-lg
      "
                  >
                    {step.n}
                  </div>


                  <h3
                    className="
        mt-2
        text-sm
        font-medium
        font-sans
        font
        leading-snug
        text-white
      "
                  >
                    {step.title}
                  </h3>


                  <p
                    className="
        mt-2
        text-[11px]
        font-medium
        text-white
      "
                  >
                    {step.desc}
                  </p>

                </div>
              );

              return (
                <div
                  key={step.n}
                  data-index={i}
                  ref={(el) => {
                    mobile.itemRefs.current[i] = el;
                  }}
                  className="
            flex
            w-40vw
            shrink-0
            snap-center
            flex-col
          "
                >

                  {/* topo */}
                  <div
                    className={`
              flex
              h-36
              items-end
              justify-center
              transition-all
              duration-700
              ease-out
              ${isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0"
                      }
            `}
                  >
                    {isEven && card}
                  </div>


                  {/* linha */}
                  <div className="
            relative
            flex
            h-8
            items-center
            justify-center
          ">

                    {/* linha contínua */}
                    <span
                      className="
                absolute
                left-0
                right-0
                h-px
bg-gradient-to-r from-transparent via-white/50 to-transparent
              "
                    />

                    {/* ponto */}
                    <span
                      className={`
relative z-10
h-5
w-5
rounded-full
border-4
border-[#0E7FE0]
bg-white
shadow-[0_0_20px_rgba(255,255,255,0.35)]
transition-transform
duration-300

${isVisible ? "scale-100" : "scale-0"}
`}

                    />

                  </div>


                  {/* baixo */}
                  <div
                    className={`
              flex
              h-36
              items-start
              justify-center
              pt-6
              transition-all
              duration-700
              ease-out

              ${isVisible
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-3 opacity-0"
                      }
            `}
                  >
                    {!isEven && card}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}