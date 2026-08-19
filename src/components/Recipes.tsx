import { useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WHATSAPP_LINK } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

import {
  ChevronLeft,
  ChevronRight,
  ChefHat,
  Clock,
} from "lucide-react";

import crepioca from "@/assets/crepioca.jpg";
import frango from "@/assets/frango.jpg";
import paodealho from "@/assets/paodealho.jpg";
import molhomassas from "@/assets/molho-massas.jpg";
import molhonata from "@/assets/molho-nata.jpg";
import pao from "@/assets/pao-recheado.jpg";
import pizza from "@/assets/pizza.jpg";
import torrada from "@/assets/torrada.jpg";

import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";
import { SectionParagraph } from "./SectionParagraph";

type Recipe = {
  id: string;
  img: string;
  title: string;
  time: string;
  audience: "casa" | "negocio" | "ambos";
  product: string;
  description: string;
  ingredients: string[];
  steps: string[];
  tip?: string;
  orderLink: string;
};

export function Recipes() {
  const recipes: Recipe[] = [
    // =====================================================
    // MUSSARELA
    // =====================================================
    {
      id: "pao-alho-mussarela",
      img: paodealho,
      title: "Pão de alho com mussarela",
      time: "15 min",
      audience: "casa",
      product: "Mussarela Porto Laticínios",
      description:
        "Pão crocante, manteiga temperada e mussarela derretida para um acompanhamento fácil e saboroso.",
      ingredients: [
        "4 pães pequenos",
        "150 g de Mussarela Porto Laticínios",
        "2 colheres de sopa de manteiga",
        "1 dente de alho picado",
        "Orégano a gosto",
      ],
      steps: [
        "Misture a manteiga com o alho picado e espalhe sobre os pães.",
        "Cubra com a mussarela ralada.",
        "Leve ao forno até o pão dourar e o queijo derreter.",
      ],
      tip: "Sirva ainda quente para aproveitar a mussarela bem derretida.",
      orderLink: "/produtos/mussarela",
    },

    {
      id: "pizza-mussarela-negocio",
      img: pizza,
      title: "Pizza de mussarela",
      time: "20 min",
      audience: "negocio",
      product: "Mussarela Porto Laticínios",
      description:
        "Uma opção clássica para pizzarias, com boa cobertura e mussarela bem derretida.",
      ingredients: [
        "1 disco de massa para pizza",
        "150 g de Mussarela Porto Laticínios",
        "4 colheres de sopa de molho de tomate",
        "Tomate em rodelas a gosto",
        "Orégano a gosto",
      ],
      steps: [
        "Espalhe o molho de tomate sobre a massa.",
        "Cubra com a mussarela e distribua as rodelas de tomate.",
        "Finalize com orégano e asse até a massa dourar e o queijo derreter.",
      ],
      tip: "Distribua a mussarela de maneira uniforme para garantir uma cobertura homogênea.",
      orderLink: "/produtos/mussarela",
    },

    // =====================================================
    // REQUEIJÃO DE AMIDO
    // =====================================================
    {
      id: "torrada-requeijao-amido",
      img: torrada,
      title: "Torrada dourada com requeijão",
      time: "5 min",
      audience: "casa",
      product: "Requeijão de Amido Porto Laticínios",
      description:
        "Uma opção rápida para o café da manhã, com pão crocante e requeijão cremoso.",
      ingredients: [
        "4 fatias de pão",
        "4 colheres de sopa de Requeijão de Amido Porto Laticínios",
        "Orégano a gosto",
      ],
      steps: [
        "Toste as fatias de pão até ficarem douradas.",
        "Espalhe o requeijão sobre as torradas.",
        "Finalize com orégano e sirva.",
      ],
      tip: "Sirva ainda quente para aproveitar melhor a cremosidade do requeijão.",
      orderLink: "/produtos/requeijao-de-amido",
    },

    {
      id: "molho-requeijao-amido",
      img: molhomassas,
      title: "Molho cremoso para massas",
      time: "15 min",
      audience: "negocio",
      product: "Requeijão de Amido Porto Laticínios",
      description:
        "Um molho prático e cremoso para massas, ideal para lanchonetes e restaurantes.",
      ingredients: [
        "500 g de massa cozida",
        "300 g de Requeijão de Amido Porto Laticínios",
        "100 ml de leite",
        "50 g de queijo ralado",
        "Sal a gosto",
      ],
      steps: [
        "Aqueça o requeijão com o leite em fogo baixo.",
        "Adicione o queijo ralado e misture até formar um molho cremoso.",
        "Misture à massa cozida e sirva.",
      ],
      tip: "Ajuste a quantidade de leite para alcançar a textura ideal para o serviço.",
      orderLink: "/produtos/requeijao-de-amido",
    },

    // =====================================================
    // REQUEIJÃO 4 QUEIJOS
    // =====================================================
    {
      id: "pao-recheado-quatro-queijos",
      img: pao,
      title: "Pão recheado quatro queijos",
      time: "15 min",
      audience: "casa",
      product: "Requeijão Sabor 4 Queijos Porto Laticínios",
      description:
        "Pão quentinho e cremoso, perfeito para um lanche rápido e cheio de sabor.",
      ingredients: [
        "2 pães franceses",
        "4 colheres de sopa de Requeijão Sabor 4 Queijos Porto Laticínios",
        "50 g de mussarela ralada",
        "Orégano a gosto",
      ],
      steps: [
        "Corte os pães ao meio e espalhe o requeijão.",
        "Cubra com a mussarela ralada.",
        "Leve ao forno até o queijo derreter e dourar levemente.",
      ],
      tip: "Finalize com orégano para realçar o sabor dos queijos.",
      orderLink: "/produtos/requeijao-4-queijos",
    },

    {
      id: "crepioca-quatro-queijos",
      img: crepioca,
      title: "Crepioca quatro queijos",
      time: "10 min",
      audience: "negocio",
      product: "Requeijão Sabor 4 Queijos Porto Laticínios",
      description:
        "Uma opção prática e saborosa para cafeterias, lanchonetes e cafés.",
      ingredients: [
        "2 ovos",
        "2 colheres de sopa de tapioca",
        "2 colheres de sopa de Requeijão Sabor 4 Queijos Porto Laticínios",
        "30 g de mussarela ralada",
        "Sal a gosto",
      ],
      steps: [
        "Misture os ovos, a tapioca e o sal.",
        "Despeje em uma frigideira e doure dos dois lados.",
        "Recheie com o requeijão e a mussarela, dobre e sirva.",
      ],
      tip: "Monte a crepioca na hora do pedido para servir com o recheio bem cremoso.",
      orderLink: "/produtos/requeijao-4-queijos",
    },

    // =====================================================
    // NATA SALGADA
    // =====================================================
    {
      id: "molho-nata-salgada",
      img: molhonata,
      title: "Molho cremoso de nata",
      time: "15 min",
      audience: "casa",
      product: "Nata Salgada Porto Laticínios",
      description:
        "Um molho cremoso e saboroso para acompanhar massas, carnes e outros pratos.",
      ingredients: [
        "200 g de Nata Salgada Porto Laticínios",
        "100 ml de leite",
        "1 dente de alho picado",
        "Parmesão ralado a gosto",
        "Pimenta-do-reino a gosto",
      ],
      steps: [
        "Refogue o alho rapidamente em uma panela.",
        "Adicione a nata e o leite, mexendo em fogo baixo.",
        "Finalize com parmesão e pimenta-do-reino.",
      ],
      tip: "Não deixe o molho ferver intensamente para manter a textura cremosa.",
      orderLink: "/produtos/nata-salgada",
    },

    {
      id: "frango-cremoso-nata",
      img: frango,
      title: "Frango cremoso com nata",
      time: "25 min",
      audience: "negocio",
      product: "Nata Salgada Porto Laticínios",
      description:
        "Uma preparação cremosa e prática para restaurantes, marmitas e refeições comerciais.",
      ingredients: [
        "500 g de peito de frango em cubos",
        "200 g de Nata Salgada Porto Laticínios",
        "100 ml de leite",
        "1 cebola pequena picada",
        "Sal e pimenta a gosto",
      ],
      steps: [
        "Doure o frango com a cebola até ficar bem cozido.",
        "Acrescente a nata e o leite, misturando em fogo baixo.",
        "Cozinhe por alguns minutos até formar um molho cremoso.",
      ],
      tip: "Sirva com arroz branco e batata palha para montar um prato comercial completo.",
      orderLink: "/produtos/nata-salgada",
    },
  ];

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [filtro, setFiltro] = useState<
    "casa" | "negocio" | null
  >(null);

  const [receitaSelecionada, setReceitaSelecionada] =
    useState<Recipe | null>(null);

  // =====================================================
  // RESPONSIVIDADE
  // =====================================================

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
    };

    update();

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  // =====================================================
  // FILTRO
  // =====================================================

  const recipesFiltradas = recipes.filter(
    (r) =>
      !filtro ||
      r.audience === filtro ||
      r.audience === "ambos"
  );

  const showCarousel = recipesFiltradas.length > 3;

  // =====================================================
  // EMBLA
  // =====================================================

  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [autoplay.current]
  );

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

  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi, filtro]);

  // =====================================================
  // MODAL
  // =====================================================

  useEffect(() => {
    if (!receitaSelecionada) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setReceitaSelecionada(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [receitaSelecionada]);

  return (
    <section
      id="receitas"
      className="relative overflow-hidden bg-white pb-15 pt-20"
    >
      <div className="mx-auto max-w-7xl px-3">
        <div className="grid items-center lg:grid-cols-2">
          {/* =====================================================
              INTRODUÇÃO
          ===================================================== */}

          <div>
            <SectionLabel
              icon={<ChefHat className="h-3.5 w-3.5" />}
            >
              Receitas
            </SectionLabel>

            <SectionHeading width="medium">
              Inspirações para usar nossos produtos
            </SectionHeading>

            <SectionParagraph width="large">
              Receitas para valorizar o sabor dos nossos produtos e
              transformar momentos simples em experiências especiais
              à mesa.
            </SectionParagraph>

            {/* FILTROS */}

            <div className="mb-6 mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setFiltro(null)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${!filtro
                  ? "bg-[#0E7FE0] text-background"
                  : "border-border/80 text-muted-foreground hover:border-[#0E7FE0]"
                  }`}
              >
                Todas as receitas
              </button>

              <button
                type="button"
                onClick={() => setFiltro("casa")}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${filtro === "casa"
                  ? "bg-[#0E7FE0] text-background"
                  : "border-border/80 text-muted-foreground hover:border-[#0E7FE0]"
                  }`}
              >
                Para sua casa
              </button>

              <button
                type="button"
                onClick={() => setFiltro("negocio")}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${filtro === "negocio"
                  ? "bg-[#0E7FE0] text-background"
                  : "border-border/80 text-muted-foreground hover:border-[#0E7FE0]"
                  }`}
              >
                Para o seu negócio
              </button>
            </div>
          </div>

          {/* =====================================================
              GRID
          ===================================================== */}

          {!showCarousel ? (
            <div
              className={`grid gap-5 ${isMobile ? "grid-cols-2" : "grid-cols-3"
                }`}
            >
              {recipesFiltradas.map((r) => (
                <div
                  key={r.id}
                  className="group overflow-hidden rounded-2xl border border-border/80 transition hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <span className="absolute left-3 top-3 z-10 max-w-[85%] rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold leading-tight text-black shadow-md backdrop-blur-sm">
                      {r.product}
                    </span>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{r.time}</span>
                    </div>

                    <h3 className="mt-2 font-sans text-xl text-foreground">
                      {r.title}
                    </h3>

                    <button
                      type="button"
                      onClick={() =>
                        setReceitaSelecionada(r)
                      }
                      className="mt-3 text-sm font-medium text-foreground underline underline-offset-4 transition hover:opacity-70"
                    >
                      Ver receita
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-[32px_1fr_32px] items-center gap-1">
              {/* SETA ESQUERDA */}

              <button
                type="button"
                disabled={!canPrev}
                onClick={() => emblaApi?.scrollPrev()}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition md:h-12 md:w-12 ${canPrev
                  ? ""
                  : "cursor-not-allowed opacity-30"
                  }`}
                aria-label="Receita anterior"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              {/* CAROUSEL */}

              <div
                className="min-w-0 overflow-hidden pr-6 md:pr-0"
                ref={emblaRef}
              >
                <div className="flex">
                  {recipesFiltradas.map((r) => (
                    <div
                      key={r.id}
                      className={`flex-none pl-1 ${isMobile
                        ? "w-[82%]"
                        : "basis-1/3"
                        }`}
                    >
                      <div
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-2xl
                          border
                          border-gray-200
                          bg-white
                          shadow-sm
                          transition-all
                          duration-700
                          ease-out
                        "
                      >
                        {/* IMAGEM */}

                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={r.img}
                            alt={r.title}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />

                          {/* PRODUTO */}

                          <span
                            className="
                              absolute
                              left-3
                              top-3
                              z-20
                              max-w-[85%]
                              rounded-full
                              bg-white/95
                              px-3
                              py-1.5
                              text-[10px]
                              font-semibold
                              leading-tight
                              text-gray-900
                              shadow-md
                              backdrop-blur-sm
                            "
                          >
                            {r.product}
                          </span>
                        </div>

                        {/* CONTEÚDO */}

                        <div className="flex flex-1 flex-col p-4">
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            <span>{r.time}</span>
                          </div>

                          <h3 className="mt-2 font-display text-xl text-foreground">
                            {r.title}
                          </h3>

                          <button
                            type="button"
                            onClick={() =>
                              setReceitaSelecionada(r)
                            }
                            className="mt-auto pt-3 text-left text-sm font-medium text-foreground underline underline-offset-4 transition hover:opacity-70"
                          >
                            Ver receita
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SETA DIREITA */}

              <button
                type="button"
                disabled={!canNext}
                onClick={() => emblaApi?.scrollNext()}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition md:h-12 md:w-12 ${canNext
                  ? ""
                  : "cursor-not-allowed opacity-30"
                  }`}
                aria-label="Próxima receita"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* =====================================================
          MODAL
      ===================================================== */}

      {receitaSelecionada && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setReceitaSelecionada(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border/80 bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* FECHAR */}

            <button
              type="button"
              onClick={() => setReceitaSelecionada(null)}
              className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black shadow-sm transition hover:opacity-70"
              aria-label="Fechar"
            >
              ✕
            </button>

            {/* IMAGEM */}

            <div className="h-46 w-full overflow-hidden">
              <img
                src={receitaSelecionada.img}
                alt={receitaSelecionada.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* CONTEÚDO */}

            <div className="px-5 pb-5">
              {/* PRODUTO */}

              <span className="mt-4 inline-block max-w-full rounded-full bg-muted px-3 py-1.5 text-[11px] font-semibold text-foreground">
                {receitaSelecionada.product}
              </span>

              {/* TÍTULO */}

              <h2 className="mt-3 font-display text-2xl text-foreground">
                {receitaSelecionada.title}
              </h2>

              {/* TEMPO */}

              <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span>{receitaSelecionada.time}</span>
              </div>

              {/* DESCRIÇÃO */}

              <p className="mt-4 text-sm text-muted-foreground">
                {receitaSelecionada.description}
              </p>

              <hr className="my-5 border-border/60" />

              {/* INGREDIENTES */}

              <h3 className="text-sm font-semibold text-foreground">
                Ingredientes
              </h3>

              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                {receitaSelecionada.ingredients.map(
                  (ing, i) => (
                    <li key={i}>{ing}</li>
                  )
                )}
              </ul>

              <hr className="my-5 border-border/60" />

              {/* MODO DE PREPARO */}

              <h3 className="text-sm font-semibold text-foreground">
                Modo de preparo
              </h3>

              <ol className="mt-2 list-inside list-decimal space-y-2 text-sm text-muted-foreground">
                {receitaSelecionada.steps.map(
                  (step, i) => (
                    <li key={i}>{step}</li>
                  )
                )}
              </ol>

              {/* DICA */}

              {receitaSelecionada.tip && (
                <div className="mt-5 rounded-xl bg-muted p-4 text-sm text-foreground">
                  💡{" "}
                  <strong>
                    Dica Porto Laticínios:
                  </strong>{" "}
                  {receitaSelecionada.tip}
                </div>
              )}

              {/* PEDIDO */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 font-medium text-white text-background transition hover:opacity-90"
              >
                <FaWhatsapp className="h-5 w-5" />
                Fazer pedido do produto
              </a>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}