"use client";

import { useEffect, useState } from "react";
import { Milk, ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import mussarelaImg from "@/assets/product-mussarela.png";
import requeijao2Img from "@/assets/product-requeijao2.png";
import requeijaoImg from "@/assets/product-requeijao1.png";
import nata from "@/assets/nata.png";

import { SectionHeading } from "./SectionTitle";
import { SectionLabel } from "./SectionLabel";
import { WHATSAPP_LINK } from "@/lib/constants";

interface Product {
  id: number;
  images: string[];
  imageSize: number;
  name: string;
  formats: string[];
  tags: string[];
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (product.images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImage((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [product.images.length]);

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-[#E2E2DE]
        bg-[#F4F4F2]
        shadow-[0_4px_18px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)]
      "
    >
      {/* IMAGEM */}
      <div
        className="
          relative
          flex
          aspect-[5/3]
          items-center
          justify-center
          overflow-hidden
          bg-[#F8F8F6]
        "
      >
        <img
          src={product.images[currentImage]}
          alt={product.name}
          loading="lazy"
          width={700}
          height={500}
          style={{
            transform: `scale(${product.imageSize})`,
          }}
          className="
            h-full
            w-full
            object-contain
            transition-transform
            duration-700
          "
        />

        {/* SETAS */}
        {product.images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Imagem anterior"
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === 0 ? product.images.length - 1 : prev - 1
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
                shadow-md
                transition
                hover:bg-white
              "
            >
              <ChevronLeft className="h-4 w-4 text-[#17202A]" />
            </button>

            <button
              type="button"
              aria-label="Próxima imagem"
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === product.images.length - 1 ? 0 : prev + 1
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
                shadow-md
                transition
                hover:bg-white
              "
            >
              <ChevronRight className="h-4 w-4 text-[#17202A]" />
            </button>
          </>
        )}
      </div>

      {/* CONTEÚDO */}
      <div className="p-5">
        {/* NOME */}
        <h3
          className="
            line-clamp-2
            text-xl
            font-sans
            font-medium
            leading-tight
            text-[#17202A]
          "
        >
          {product.name}
        </h3>

        {/* FORMATOS */}
        <div className="mt-4 space-y-2">
          {product.formats.map((format) => (
            <div
              key={format}
              className="
                flex
                items-center
                gap-2
                text-sm
                text-[#4B5563]
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-[#F6C72F]
                "
              />

              {format}
            </div>
          ))}
        </div>

        {/* TAGS */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                bg-[#F6C72F]
                px-2.5
                py-1
                text-[12px]
                font-semibold
                text-[#17202A]
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Products() {
  const products: Product[] = [
    {
      id: 1,
      images: [mussarelaImg],

      // 1 = tamanho normal
      // 1.2 = 20% maior
      // 1.5 = 50% maior
      // 2 = 100% maior
      imageSize: 1.4,

      name: "Mussarela",

      formats: [
        "Peça inteira (a partir de 3,5kg)",
        "Porção (30g / 1 fatia)",
      ],

      tags: [
        "Fonte de Cálcio",
        "Leite pasteurizado",
        "Derrete uniforme",
        "Sem glúten",
      ],
    },

    {
      id: 2,
      images: [requeijao2Img],

      imageSize: 1.2,

      name: "Mistura de Requeijão e Amido",

      formats: [
        "Bisnaga 1,5kg",
        "Rendimento total (50 porções)",
        "Tamanho da porção (30g)",
      ],

      tags: [
        "Cremosidade balanceada",
        "Leites e derivados",
        "Sem glúten",
      ],
    },

    {
      id: 3,
      images: [requeijaoImg],

      imageSize: 1.4,

      name: "Mistura Requeijão e Amido, sabor Quatro Queijos",

      formats: [
        "Bisnaga 1,2kg",
        "Rendimento total (40 porções)",
        "Tamanho da porção (30g)",
      ],

      tags: [
        "Recheio cremoso",
        "Leites e derivados",
        "Sem glúten",
      ],
    },

    {
      id: 4,
      images: [nata],

      imageSize: 1.3,

      name: "Nata Salgada",

      formats: [
        "Bisnaga 800g",
        "Rendimento total (60 porções)",
        "Tamanho da porção (30g)",
      ],

      tags: [
        "Creme de leite",
        "Leite desnatado",
        "Sem glúten",
      ],
    },
  ];

  return (
    <section
      id="produtos"
      className="
        relative
        bg-white
        pt-6
        pb-10
        md:pt-9
        xl:pt-10
        xl:pb-10
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* TÍTULO */}
        <SectionLabel icon={<Milk className="h-3.5 w-3.5" />}>
          Nossos produtos
        </SectionLabel>

        <div
          className="
            mt-5
            flex
            flex-col
            items-start
            gap-4
            sm:flex-row
            sm:justify-between
            sm:gap-0
          "
        >
          <SectionHeading width="medium">
            Excelência em cada processo, sabor em cada momento.
          </SectionHeading>

          {/* WHATSAPP */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              h-12
              w-fit
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
              hover:bg-[#0C72C9]
              sm:h-14
              sm:px-7
            "
          >
            <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
            Fazer pedido
          </a>
        </div>

        {/* PRODUTOS */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}