"use client";

import { useState } from "react";
import { Factory, X, ChevronDown } from "lucide-react";

import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";

export function Process() {
  const [openModal, setOpenModal] = useState(false);
  const [openCard, setOpenCard] = useState<string | null>(null);

  const steps = [
    ["01", "Recepção do leite", "Leite coletado em fazendas locais, testado na chegada."],
    ["02", "Pasteurização", "Aquecimento controlado para eliminar microrganismos preservando o sabor."],
    ["03", "Coagulação", "Adição de coalho natural e fermento lácteo selecionado."],
    ["04", "Modelagem", "Máquinas especializadas moldam a mussarela ainda quente com precisão e padronização."],
    ["05", "Resfriamento", "Banho em salmoura fria por tempo cuidadosamente calibrado."],
    ["06", "Embalagem", "Embalagem a vácuo no mesmo dia para máxima frescor."],
  ];

  return (
    <section
      id="processo"
      className="relative overflow-hidden bg-secondary py-20 text-secondary-foreground"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionLabel
          icon={<Factory className="h-3.5 w-3.5" />}
          variant="dark"
        >
          Do leite ao produto
        </SectionLabel>

        <SectionHeading width="full">
          Cada queijo passa por 6 etapas e mais de 20 conferências.
        </SectionHeading>


        {/* Desktop */}
        <div className="mt-10 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([n, t, d]) => (
            <StepCard
              key={n}
              number={n}
              title={t}
              description={d}
            />
          ))}
        </div>
        {/* Botão */}
        <button
          onClick={() => setOpenModal(true)}
          className="
            mt-8
            text-sm
            font-medium
            underline
            underline-offset-4
            md:hidden
          "
        >
          Ver todas as etapas
        </button>

        {/* Mobile compacto */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:hidden">

          {steps.map(([n, t, d]) => {
            const isOpen = openCard === n;

            return (
              <div
                key={n}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  p-4
                "
              >

                <span className="text-xl">
                  {n}
                </span>

                <p className="mt-1 text-sm font-medium">
                  {t}
                </p>

                <button
                  type="button"
                  onClick={() => setOpenCard(isOpen ? null : n)}
                  aria-expanded={isOpen}
                  className="
                    mt-2
                    flex
                    items-center
                    gap-1
                    text-xs
                    font-medium
                    underline
                    underline-offset-4
                    opacity-80
                  "
                >
                  {isOpen ? "Ver menos" : "Ver mais"}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${isOpen ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                  `}
                >
                  <p className="overflow-hidden text-sm leading-relaxed opacity-80">
                    {d}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>


      {/* Modal */}
      {openModal && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/60
            px-6
          "
          onClick={() => setOpenModal(false)}
        >

          <div
            className="
              relative
              max-h-[85vh]
              w-full
              max-w-lg
              overflow-y-auto
              rounded-2xl
              bg-secondary
              p-6
            "
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setOpenModal(false)}
              className="
                absolute
                right-4
                top-4
                flex
                h-9
                w-9
                items-center justify-center
                rounded-full
                bg-white/10
              "
            >
              <X className="h-5 w-5" />
            </button>


            <h3 className="mb-6 text-3xl">
              Nosso processo
            </h3>


            <div className="grid gap-4">

              {steps.map(([n, t, d]) => (
                <StepCard
                  key={n}
                  number={n}
                  title={t}
                  description={d}
                />
              ))}

            </div>

          </div>

        </div>
      )}

    </section>
  );
}


function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border border-white/10
        bg-white/5
        p-5
      "
    >
      <p className="text-3xl text-accen font-bold">
        {number}
      </p>

      <p className="mt-2 text-xl">
        {title}
      </p>

      <p className="mt-2 text-sm leading-relaxed opacity-80">
        {description}
      </p>

    </div>
  );
}