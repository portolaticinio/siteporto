import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ChevronLeft,
  ChevronRight,
  Truck,
  Star,
  Pizza,
  Utensils,
  ShoppingCart,
  Croissant,
  Store,
} from "lucide-react";

import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";
import { SectionParagraph } from "./SectionParagraph";

export function Clients() {
  const types = [
    {
      name: "Pizzarias",
      icon: Pizza,
    },
    {
      name: "Restaurantes",
      icon: Utensils,
    },
    {
      name: "Supermercados",
      icon: ShoppingCart,
    },
    {
      name: "Padarias",
      icon: Croissant,
    },
    {
      name: "Distribuidores",
      icon: Truck,
    },
  ];

  const reviews = [
    {
      quote:
        "A bisnaga de requeijão é cremosa na medida. Nossos clientes percebem a diferença no pão na chapa.",
      who: "Ana Costa",
      role: "Padaria Centro",
    },
    {
      quote:
        "Entrega sempre no horário, embalagem impecável, equipe atenciosa. Parceiro de confiança.",
      who: "Roberto Lima",
      role: "Distribuidora RL",
    },
    {
      quote:
        "Produtos com excelente padrão de qualidade e ótimo atendimento.",
      who: "Carlos Mendes",
      role: "Mercado Bom Sabor",
    },
    {
      quote:
        "A qualidade dos produtos mantém nosso padrão de atendimento aos clientes.",
      who: "Fernanda Alves",
      role: "Restaurante Sabor Caseiro",
    },
    {
      quote:
        "Sempre recebemos os pedidos no prazo e com ótima conservação.",
      who: "João Pereira",
      role: "Supermercado São José",
    },
    {
      quote:
        "Um fornecedor parceiro, com produtos consistentes e atendimento excelente.",
      who: "Lucas Martins",
      role: "Lanchonete Express",
    },
  ];

  /* =========================================================
     CARROSSEL DE CATEGORIAS
  ========================================================= */

  const autoplay = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay]
  );

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };

    updateButtons();

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi]);

  /* =========================================================
     CARROSSEL DE DEPOIMENTOS
  ========================================================= */

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef2, emblaApi2] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    ]
  );

  useEffect(() => {
    if (!emblaApi2) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi2.selectedScrollSnap());
    };

    emblaApi2.on("select", onSelect);
    emblaApi2.on("reInit", onSelect);

    onSelect();

    return () => {
      emblaApi2.off("select", onSelect);
      emblaApi2.off("reInit", onSelect);
    };
  }, [emblaApi2]);

  return (
    <section
      id="clientes"
      className="
        relative
        w-full
        max-w-[100vw]
        overflow-x-hidden
        py-16
        sm:py-20
        lg:py-24
      "
      style={{
        backgroundImage: "url('/src/assets/testemunhos.png')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="
            grid
            grid-cols-1
            min-w-0
            gap-10
            sm:gap-12
            lg:grid-cols-[1.25fr_.9fr]
            lg:items-center
          "
        >
          {/* =====================================================
              LADO ESQUERDO
          ===================================================== */}

          <div className="min-w-0 w-full text-white">
            <SectionLabel
              icon={<Truck className="h-3.5 w-3.5" />}
            >
              Parceiros e depoimentos
            </SectionLabel>

            <SectionHeading
              width="large"
            >
              Quem escolhe a qualidade{" "}
              <span className="text-[#F6C72F]">
                Porto Laticínios.
              </span>
            </SectionHeading>

            <SectionParagraph
              width="small"
              className="
                text-white
              "
            >
              Atendemos{" "}
              <span className="font-bold text-[#F6C72F]">
                Atacado e Varejo
              </span>
              , com parceiros que confiam na nossa qualidade e
              compartilham suas experiências com sabor e compromisso.
            </SectionParagraph>

            {/* =================================================
                CARROSSEL DE CATEGORIAS
            ================================================= */}

            <div className="relative min-w-0 w-full mt-8 sm:mt-10 px-1 sm:px-0">
              {/* BOTÃO ANTERIOR */}
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canPrev}
                aria-label="Categorias anteriores"
                className="
                  absolute
                  left-0
                  sm:-left-4
                  top-1/2
                  z-20
                  flex
                  h-8
                  w-8
                  sm:h-10
                  sm:w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-background
                  text-black
                  shadow-md
                  transition
                  hover:scale-105
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              {/* ÁREA DO CARROSSEL */}
              <div
                ref={emblaRef}
                className="overflow-hidden px-8 sm:px-0"
              >
                <div className="-mx-2 flex">
                  {types.map((type) => {
                    const Icon = type.icon;

                    return (
                      <div
                        key={type.name}
                        className="
                          min-w-0
                          flex-[0_0_85%]
                          xs:flex-[0_0_70%]
                          sm:flex-[0_0_45%]
                          md:flex-[0_0_33.333%]
                          px-2
                        "
                      >
                        <div
                          className="
                            group
                            relative
                            flex
                            h-[100px]
                            sm:h-[100px]
                            md:h-[100px]
                            w-full
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-[26px]
                            border
                            border-white/10
                            bg-white/10
                            backdrop-blur-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-white/15
                            hover:shadow-xl
                          "
                        >
                          {/* EFEITO DE BRILHO */}
                          <div
                            className="
                              absolute
                              -right-10
                              -top-10
                              h-24
                              w-24
                              rounded-full
                              bg-[#F6C72F]/10
                              blur-2xl
                              transition
                              duration-500
                              group-hover:bg-[#F6C72F]/20
                            "
                          />

                          {/* ÍCONE E TEXTO */}
                          <div
                            className="
                              relative
                              z-10
                              flex
                              flex-col
                              items-center
                              gap-2
                              sm:gap-3
                            "
                          >
                            <div
                              className="
                                flex
                                h-10
                                w-10
                                sm:h-12
                                sm:w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-white/10
                                text-[#F6C72F]
                                transition-all
                                duration-300
                                group-hover:scale-110
                                group-hover:bg-[#F6C72F]
                                group-hover:text-[#1A2B49]
                              "
                            >
                              <Icon
                                className="h-5 w-5 sm:h-6 sm:w-6"
                                strokeWidth={1.8}
                              />
                            </div>

                            <h3
                              className="
                                px-1
                                text-center
                                font-display
                                text-lg
                                leading-tight
                                text-white
                              "
                            >
                              {type.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* BOTÃO PRÓXIMO */}
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canNext}
                aria-label="Próximas categorias"
                className="
                  absolute
                  right-0
                  sm:-right-4
                  top-1/2
                  z-20
                  flex
                  h-8
                  w-8
                  sm:h-10
                  sm:w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-background
                  text-black
                  shadow-md
                  transition
                  hover:scale-105
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* =====================================================
              LADO DIREITO - DEPOIMENTOS
          ===================================================== */}

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-[320px] mx-auto lg:mx-0">

              {/* CARROSSEL */}
              <div
                ref={emblaRef2}
                className="overflow-hidden"
              >
                <div className="flex">
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className="
                        min-w-0
                        flex-[0_0_100%]
                        px-2
                      "
                    >
                      <figure
                        className="
                          flex
                          min-h-[220px]
                          sm:min-h-[220px]
                          w-full
                          flex-col
                          rounded-2xl
                          bg-card
                          p-5
                        "
                      >
                        {/* ESTRELAS */}
                        <div className="flex gap-1 text-accent">
                          {[...Array(5)].map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              className="
                                h-4
                                w-4
                                fill-current
                              "
                            />
                          ))}
                        </div>

                        {/* DEPOIMENTO */}
                        <blockquote
                          className="
                            mt-3
                            flex-1
                            text-sm
                            leading-relaxed
                          "
                        >
                          "{review.quote}"
                        </blockquote>

                        {/* AUTOR */}
                        <figcaption
                          className="
                            mt-5
                            border-t
                            border-border
                            pt-4
                          "
                        >
                          <p className="font-bold">
                            {review.who}
                          </p>

                          <p
                            className="
                              text-sm
                              text-muted-foreground
                            "
                          >
                            {review.role}
                          </p>
                        </figcaption>
                      </figure>
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  INDICADORES FIXOS
              ================================================= */}

              <div className="mt-6 mb-6 flex justify-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => emblaApi2?.scrollTo(index)}
                    aria-label={`Ir para depoimento ${index + 1}`}
                    className={`
                      h-2
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        selectedIndex === index
                          ? "w-10 bg-white"
                          : "w-2 bg-white/40"
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}