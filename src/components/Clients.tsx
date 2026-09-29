
import { useEffect, useMemo, useState } from "react";
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
  Pause,
  Play,
} from "lucide-react";
import testemunhosBg from "@/assets_optimized/testemunhos.webp";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";
import { SectionParagraph } from "./SectionParagraph";

/* =========================================================
   CONFIGURAÇÃO
   =========================================================
   true  = mostra os testemunhos
   false = esconde os testemunhos e coloca o carrossel
           de tipos no lado direito no desktop
   ========================================================= */
const SHOW_REVIEWS = false;

const types = [
  { name: "Pizzarias", icon: Pizza },
  { name: "Restaurantes", icon: Utensils },
  { name: "Supermercados", icon: ShoppingCart },
  { name: "Padarias", icon: Croissant },
  { name: "Distribuidores", icon: Truck },
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

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onChange = () => setReduced(mq.matches);

    mq.addEventListener("change", onChange);

    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

const arrowButton = `
  absolute top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center
  justify-center rounded-full bg-background text-black shadow-md
  transition-transform motion-reduce:transition-none motion-safe:hover:scale-105
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
  focus-visible:outline-white
`;

export function Clients() {
  const reduced = usePrefersReducedMotion();

  const [userPaused, setUserPaused] = useState(false);

  /*
    Plugins estáveis com useMemo.
  */
  const autoplayCategories = useMemo(
    () =>
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        playOnInit: !reduced,
      }),
    [reduced]
  );

  const autoplayReviews = useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        playOnInit: !reduced,
      }),
    [reduced]
  );

  /* =========================================================
     CARROSSEL DE CATEGORIAS
     ========================================================= */
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplayCategories]
  );

  /* =========================================================
     CARROSSEL DE DEPOIMENTOS
     ========================================================= */
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef2, emblaApi2] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [autoplayReviews]
  );

  useEffect(() => {
    if (!emblaApi2) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi2.selectedScrollSnap());
    };

    onSelect();

    emblaApi2.on("select", onSelect);
    emblaApi2.on("reInit", onSelect);

    return () => {
      emblaApi2.off("select", onSelect);
      emblaApi2.off("reInit", onSelect);
    };
  }, [emblaApi2]);

  /* =========================================================
     PAUSAR / RETOMAR AUTOPLAY
     ========================================================= */
  const toggleAutoplay = () => {
    const next = !userPaused;

    setUserPaused(next);

    [emblaApi, emblaApi2].forEach((api) => {
      const autoplay = api?.plugins()?.autoplay;

      if (!autoplay) return;

      if (next) {
        autoplay.stop();
      } else {
        autoplay.play();
      }
    });
  };

  /* =========================================================
     CARROSSEL DE TIPOS
     ========================================================= */
  const categoriesCarousel = (
    <div
      role="region"
      aria-roledescription="carrossel"
      aria-label="Tipos de clientes atendidos"
      className={`relative w-full min-w-0 ${SHOW_REVIEWS
          ? "mt-8 px-1 sm:mt-10 sm:px-0"
          : "mt-8 px-1 sm:mt-10 sm:px-0 lg:mt-0"
        }`}
    >
      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Categorias anteriores"
        className={`${arrowButton} left-0 sm:-left-4`}
      >
        <ChevronLeft aria-hidden="true" className="h-5 w-5" />
      </button>

      <div ref={emblaRef} className="overflow-hidden px-8 sm:px-0">
        <div className="-mx-2 flex">
          {types.map((type, i) => {
            const Icon = type.icon;

            return (
              <div
                key={type.name}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} de ${types.length}`}
                className="
                  min-w-0 flex-[0_0_85%]
                  px-2
                  xs:flex-[0_0_70%]
                  sm:flex-[0_0_45%]
                  md:flex-[0_0_33.333%]
                "
              >
                <div
                  className="
                    group relative flex h-[100px] w-full items-center
                    justify-center overflow-hidden rounded-[26px]
                    border border-white/10 bg-white/15
                    transition-[transform,background-color,box-shadow] duration-300
                    motion-reduce:transition-none
                    hover:bg-white/20 hover:shadow-xl
                    motion-safe:hover:-translate-y-1
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      absolute -right-10 -top-10 h-24 w-24
                      rounded-full bg-[#F6C72F]/10 blur-2xl
                      transition-colors duration-500
                      group-hover:bg-[#F6C72F]/20
                    "
                  />

                  <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3">
                    <div
                      className="
                        flex h-10 w-10 items-center justify-center rounded-xl
                        bg-white/10 text-[#F6C72F]
                        transition-[transform,background-color,color] duration-300
                        motion-reduce:transition-none
                        group-hover:bg-[#F6C72F]
                        group-hover:text-[#1A2B49]
                        motion-safe:group-hover:scale-110
                        sm:h-12 sm:w-12
                      "
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="px-1 text-center font-display text-lg leading-tight text-white">
                      {type.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Próximas categorias"
        className={`${arrowButton} right-0 sm:-right-4`}
      >
        <ChevronRight aria-hidden="true" className="h-5 w-5" />
      </button>
    </div>
  );

  /* =========================================================
     DEPOIMENTOS
     ========================================================= */
  const reviewsCarousel = (
    <div className="flex justify-center lg:justify-end">
      <div
        role="region"
        aria-roledescription="carrossel"
        aria-label="Depoimentos de clientes"
        className="mx-auto w-full max-w-sm sm:max-w-[320px] lg:mx-0"
      >
        <div ref={emblaRef2} className="overflow-hidden">
          <div
            className="flex"
            aria-live={userPaused || reduced ? "polite" : "off"}
          >
            {reviews.map((review, index) => (
              <div
                key={review.who}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} de ${reviews.length}`}
                aria-hidden={selectedIndex !== index}
                className="min-w-0 flex-[0_0_100%] px-2"
              >
                <figure className="flex min-h-[220px] w-full flex-col rounded-2xl bg-card p-5">
                  <div
                    aria-hidden="true"
                    className="flex gap-1 text-accent"
                  >
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star
                        key={s}
                        aria-hidden="true"
                        className="h-4 w-4 fill-current"
                      />
                    ))}
                  </div>

                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed">
                    “{review.quote}”
                  </blockquote>

                  <figcaption className="mt-5 border-t border-border pt-4">
                    <p className="font-bold">{review.who}</p>

                    <p className="text-sm text-muted-foreground">
                      {review.role}
                    </p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores + pausa */}
        <div className="mb-6 mt-4 flex items-center justify-center gap-1">
          {!reduced && (
            <button
              type="button"
              onClick={toggleAutoplay}
              aria-label={
                userPaused
                  ? "Retomar rotação automática"
                  : "Pausar rotação automática"
              }
              className="
                mr-2 flex h-9 w-9 items-center justify-center rounded-full
                bg-white/20 text-white transition-colors hover:bg-white/30
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-white
              "
            >
              {userPaused ? (
                <Play aria-hidden="true" className="h-4 w-4" />
              ) : (
                <Pause aria-hidden="true" className="h-4 w-4" />
              )}
            </button>
          )}

          {reviews.map((review, index) => (
            <button
              type="button"
              key={review.who}
              onClick={() => emblaApi2?.scrollTo(index)}
              aria-label={`Ir para depoimento ${index + 1}`}
              aria-current={selectedIndex === index}
              className="
                flex h-6 min-w-6 items-center justify-center px-0.5
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-white
              "
            >
              <span
                className={`
                  block h-2 rounded-full
                  transition-[width,background-color]
                  duration-300 motion-reduce:transition-none
                  ${selectedIndex === index
                    ? "w-10 bg-white"
                    : "w-2 bg-white/60"
                  }
                `}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="clientes"
      className="
        relative isolate w-full max-w-[100vw]
        overflow-x-hidden py-16
        sm:py-20 lg:py-24
      "
    >
      {/* Fundo */}
      <img
        src={testemunhosBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="
          absolute inset-0 -z-10 h-full w-full
          object-cover object-bottom
        "
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-black/30"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* =====================================================
            COM TESTEMUNHOS
            Mantém o layout original
           ===================================================== */}
        {SHOW_REVIEWS ? (
          <div
            className="
              grid min-w-0 grid-cols-1 gap-10
              sm:gap-12
              lg:grid-cols-[1.25fr_.9fr]
              lg:items-center
            "
          >
            {/* LADO ESQUERDO */}
            <div className="w-full min-w-0 text-white">
              <SectionLabel
                icon={
                  <Truck
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                  />
                }
              >
                Parceiros e depoimentos
              </SectionLabel>

              <SectionHeading width="large">
                Quem escolhe a qualidade{" "}
                <span className="text-[#F6C72F]">
                  Porto Laticínios.
                </span>
              </SectionHeading>

              <SectionParagraph
                width="small"
                className="text-white"
              >
                Atendemos{" "}
                <span className="font-bold text-[#F6C72F]">
                  Atacado e Varejo
                </span>
                , com parceiros que confiam na nossa qualidade e
                compartilham suas experiências com sabor e
                compromisso.
              </SectionParagraph>

              {/* CATEGORIAS */}
              {categoriesCarousel}
            </div>

            {/* LADO DIREITO — DEPOIMENTOS */}
            {reviewsCarousel}
          </div>
        ) : (
          /* ===================================================
             SEM TESTEMUNHOS
             Desktop:
             TEXTO             | CATEGORIAS
             =================================================== */
          <div
            className="
              grid min-w-0 grid-cols-1 gap-10
              sm:gap-12
              lg:grid-cols-[1fr_1.05fr]
              lg:items-center
              lg:gap-16
            "
          >
            {/* LADO ESQUERDO — TEXTO */}
            <div className="w-full min-w-0 text-white">
              <SectionLabel
                icon={
                  <Truck
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                  />
                }
              >
                Nossos parceiros
              </SectionLabel>

              <SectionHeading width="large">
                Quem escolhe a qualidade{" "}
                <span className="text-[#F6C72F]">
                  Porto Laticínios.
                </span>
              </SectionHeading>

              <SectionParagraph
                width="small"
                className="text-white"
              >
                Atendemos{" "}
                <span className="font-bold text-[#F6C72F]">
                  Atacado e Varejo
                </span>
                , levando produtos de qualidade para diferentes
                tipos de negócios.
              </SectionParagraph>
            </div>

            {/* LADO DIREITO — CATEGORIAS */}
            <div className="w-full min-w-0">
              {categoriesCarousel}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
