"use client";

import { Milk } from "lucide-react";

import mussarelaImg from "@/assets/product-mussarela.png";
import requeijao2Img from "@/assets/product-requeijao2.png";
import requeijaoImg from "@/assets/product-requeijao1.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeading } from "./SectionTitle";
import { SectionLabel } from "./SectionLabel";

export function Products() {
  const products = [
    {
      id: 1,
      images: [
        mussarelaImg,
      ],
      name: "Mussarela",
      formats: [
        "Peça inteira ( a partir de 3,5kg)",
        "Porção  (30g / 1 fatia)",
      ],
      tags: ["Fonte de Cálcio", "Leite pasteurizado", "Derrete uniforme", "Sem glúten "],
    },
    {
      id: 2,
      images: [
        requeijao2Img,
      ],
      name: "Mistura de Requeijão e Amido",
      formats: [
        "Bisnaga 1,5kg",
        "Rendimento total (50 porções)",
        "Tamanho da porção (30g) ",
      ],
      tags: ["Cremosidade balanceada", "Leites e derivados", "Sem glúten"],
    },
    {
      id: 3,
      images: [
        requeijaoImg,
      ],
      name: "Mistura Requeijão e Amido, sabor Quatro Queijos",
      formats: [
        "Bisnaga 1,2kg",
        "Rendimento total (40 porções)",
        "Tamanho da porção (30g) ",
      ],
      tags: ["Recheio cremoso", "Leites e derivados", "Sem glúten"],
    },
  ];
  return (
    <section id="produtos" className="relative  
    pt-6
    pb-10
    md:pt-9
    xl:pt-10
    xl:pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel icon={<Milk className="h-3.5 w-3.5" />}>Nossos produtos</SectionLabel>
        <div className="mt-5">
          <SectionHeading width="medium">
            Excelência em cada processo, sabor em cada momento.
          </SectionHeading>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const [currentImage, setCurrentImage] = useState(0);

            useEffect(() => {
              if (p.images.length <= 1) return;

              const timer = setInterval(() => {
                setCurrentImage((prev) =>
                  prev === p.images.length - 1 ? 0 : prev + 1
                );
              }, 4000);

              return () => clearInterval(timer);
            }, [p.images.length]);

            return (
              <article
  key={p.id}
  className="
    group
    overflow-hidden
    rounded-2xl
    bg-card
    shadow-soft
    transition
    hover:shadow-warm
  "
>
  {/* Imagem */}
  <div
    className="
      relative
      aspect-[5/3]
      overflow-hidden
      bg-muted
    "
  >
    <img
      src={p.images[currentImage]}
      alt={p.name}
      loading="lazy"
      width={700}
      height={500}
      className="
        h-full
        w-full
        object-cover
        transition
        duration-700
        group-hover:scale-105
      "
    />

    {p.images.length > 1 && (
      <>
        <button
          onClick={() =>
            setCurrentImage((prev) =>
              prev === 0 ? p.images.length - 1 : prev - 1
            )
          }
          className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            rounded-full
            bg-white/90
            p-1.5
            shadow
          "
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <button
          onClick={() =>
            setCurrentImage((prev) =>
              prev === p.images.length - 1 ? 0 : prev + 1
            )
          }
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            rounded-full
            bg-white/90
            p-1.5
            shadow
          "
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </>
    )}
  </div>


  {/* Conteúdo */}
  <div className="p-5">
    <h3
      className="
        line-clamp-2
        text-xl
        font-semibold
        leading-tight
      "
    >
      {p.name}
    </h3>

    <div className="mt-4 space-y-2">
      {p.formats.map((f) => (
        <div
          key={f}
          className="
            flex
            items-center
            gap-2
            text-sm
            text-muted-foreground
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {f}
        </div>
      ))}
    </div>

    <div className="mt-4 flex flex-wrap gap-1.5">
      {p.tags.map((t) => (
        <span
          key={t}
          className="
            rounded-full
            bg-muted
            px-2.5
            py-1
            text-[11px]
            text-muted-foreground
          "
        >
          {t}
        </span>
      ))}
    </div>
  </div>
</article>
            );
          })}
        </div>
      </div>
    </section >
  );
}
