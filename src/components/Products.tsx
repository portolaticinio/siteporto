"use client";

import { useEffect, useState } from "react";
import { Milk, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// DICA: converta estes PNGs para WebP/AVIF (como você já fez em assets_optimized nas receitas)
import mussarelaImg from "@/assets/product-mussarela.png";
import requeijao2Img from "@/assets/product-requeijao2.png";
import requeijaoImg from "@/assets/product-requeijao1.png";
import nata from "@/assets/nata.png";

import { SectionHeading } from "./SectionTitle";
import { SectionLabel } from "./SectionLabel";
import { WHATSAPP_LINK } from "@/lib/constants";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface Product {
  id: number;
  images: string[];
  imageSize: number;
  name: string;
  formats: string[];
  tags: string[];
}

const products: Product[] = [
  {
    id: 1,
    images: [mussarelaImg],
    imageSize: 1.4,
    name: "Mussarela",
    formats: ["Peça inteira (a partir de 3,5kg)", "Porção (30g / 1 fatia)"],
    tags: ["Fonte de Cálcio", "Leite pasteurizado", "Derrete uniforme", "Sem glúten"],
  },
  {
    id: 2,
    images: [requeijao2Img],
    imageSize: 1.2,
    name: "Mistura de Requeijão e Amido",
    formats: ["Bisnaga 1,5kg", "Rendimento total (50 porções)", "Tamanho da porção (30g)"],
    tags: ["Cremosidade balanceada", "Leites e derivados", "Sem glúten"],
  },
  {
    id: 3,
    images: [requeijaoImg],
    imageSize: 1.4,
    name: "Mistura Requeijão e Amido, sabor Quatro Queijos",
    formats: ["Bisnaga 1,2kg", "Rendimento total (40 porções)", "Tamanho da porção (30g)"],
    tags: ["Recheio cremoso", "Leites e derivados", "Sem glúten"],
  },
  {
    id: 4,
    images: [nata],
    imageSize: 1.3,
    name: "Nata Salgada",
    formats: ["Bisnaga 800g", "Rendimento total (60 porções)", "Tamanho da porção (30g)"],
    tags: ["Creme de leite", "Leite desnatado", "Sem glúten"],
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A69BA]";

const imageButton = `
  absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center
  rounded-full bg-white/90 shadow-md transition-colors hover:bg-white ${focusRing}
`;

function ProductCard({ product }: { product: Product }) {
  const reduced = usePrefersReducedMotion();
  const total = product.images.length;
  const multiple = total > 1;

  const [currentImage, setCurrentImage] = useState(0);
  const [hoverFocusPaused, setHoverFocusPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  const rotating = multiple && !reduced && !hoverFocusPaused && !userPaused;
  useEffect(() => {
    if (!rotating) return;
    const timer = setInterval(() => setCurrentImage((p) => (p + 1) % total), 4000);
    return () => clearInterval(timer);
  }, [rotating, total]);

  const titleId = `product-${product.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      onMouseEnter={() => setHoverFocusPaused(true)}
      onMouseLeave={() => setHoverFocusPaused(false)}
      onFocus={() => setHoverFocusPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setHoverFocusPaused(false);
      }}
      className="
        group overflow-hidden rounded-2xl border border-[#E2E2DE] bg-[#F4F4F2]
        shadow-[0_4px_18px_rgba(0,0,0,0.08)]
        transition-[transform,box-shadow] duration-300 motion-reduce:transition-none
        hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] motion-safe:hover:-translate-y-1
      "
    >
      {/* IMAGEM */}
      <div
        aria-live={multiple && !rotating ? "polite" : "off"}
        className="relative flex aspect-[5/3] items-center justify-center overflow-hidden bg-[#F8F8F6]"
      >
        <img
          src={product.images[currentImage]}
          alt={multiple ? `${product.name} (imagem ${currentImage + 1} de ${total})` : product.name}
          loading="lazy"
          decoding="async"
          // 700x420 = proporção real do contêiner (5/3); antes 700x500 gerava layout incorreto
          width={700}
          height={420}
          style={{ transform: `scale(${product.imageSize})` }}
          className="h-full w-full object-contain"
        />

        {multiple && (
          <>
            <button
              type="button"
              aria-label={`Imagem anterior de ${product.name}`}
              onClick={() => setCurrentImage((p) => (p === 0 ? total - 1 : p - 1))}
              className={`${imageButton} left-3`}
            >
              <ChevronLeft aria-hidden="true" className="h-4 w-4 text-[#17202A]" />
            </button>

            <button
              type="button"
              aria-label={`Próxima imagem de ${product.name}`}
              onClick={() => setCurrentImage((p) => (p + 1) % total)}
              className={`${imageButton} right-3`}
            >
              <ChevronRight aria-hidden="true" className="h-4 w-4 text-[#17202A]" />
            </button>

            {!reduced && (
              <button
                type="button"
                onClick={() => setUserPaused((v) => !v)}
                aria-label={userPaused ? "Retomar troca automática de imagens" : "Pausar troca automática de imagens"}
                className={`absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white ${focusRing}`}
              >
                {userPaused ? (
                  <Play aria-hidden="true" className="h-4 w-4 text-[#17202A]" />
                ) : (
                  <Pause aria-hidden="true" className="h-4 w-4 text-[#17202A]" />
                )}
              </button>
            )}
          </>
        )}
      </div>

      {/* CONTEÚDO */}
      <div className="p-5">
        <h3
          id={titleId}
          className="line-clamp-2 font-sans text-xl font-medium leading-tight text-[#17202A]"
        >
          {product.name}
        </h3>

        <ul className="mt-4 space-y-2">
          {product.formats.map((format) => (
            <li key={format} className="flex items-center gap-2 text-sm text-[#4B5563]">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F6C72F]" />
              {format}
            </li>
          ))}
        </ul>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-[#F6C72F] px-2.5 py-1 text-xs font-semibold text-[#17202A]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section id="produtos" className="relative bg-white pb-10 pt-6 md:pt-9 xl:pb-10 xl:pt-10">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel icon={<Milk aria-hidden="true" className="h-3.5 w-3.5" />}>
          Nossos produtos
        </SectionLabel>

        <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:justify-between sm:gap-0">
          <SectionHeading width="medium">
            Excelência em cada processo, sabor em cada momento.
          </SectionHeading>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex h-12 w-fit items-center justify-center gap-2 rounded-2xl
              bg-[#0A69BA] px-6 text-sm font-medium text-white
              transition-[transform,background-color] motion-reduce:transition-none
              hover:bg-[#095EA8] motion-safe:hover:-translate-y-0.5
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A69BA]
              sm:h-14 sm:px-7
            "
          >
            <FaWhatsapp aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
            Fazer pedido
            <span className="sr-only">(abre o WhatsApp em uma nova aba)</span>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}