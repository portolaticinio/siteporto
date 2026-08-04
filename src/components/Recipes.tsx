import { useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, ChefHat } from "lucide-react";

import mussarelaImg from "@/assets/product-requeijao.jpg"; // TODO: confirme o caminho correto da imagem de mussarela
import requeijaoImg from "@/assets/product-requeijao.jpg";
import pizzaImg from "@/assets/recipe-pizza.jpg";

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
    {
      id: "torrada-requeijao",
      img: requeijaoImg,
      title: "Torrada com requeijão",
      time: "5 min",
      audience: "casa",
      product: "Requeijão Porto Laticínios",
      description:
        "Uma torrada rápida e cremosa, perfeita para um café da manhã ou lanche da tarde.",
      ingredients: [
        "4 fatias de pão",
        "4 colheres de sopa de Requeijão Porto Laticínios",
        "2 colheres de sopa de mel",
        "Canela em pó a gosto",
      ],
      steps: [
        "Toste as fatias de pão até ficarem douradas.",
        "Espalhe uma camada generosa de requeijão sobre cada fatia.",
        "Regue com mel e finalize com uma pitada de canela.",
      ],
      tip: "Sirva ainda morna para o requeijão ficar levemente derretido.",
      orderLink: "/produtos/requeijao",
    },
    {
      id: "macarrao-parmegiana",
      img: mussarelaImg,
      title: "Macarrão à parmegiana",
      time: "40 min",      audience: "casa",
      product: "Mussarela Porto Laticínios",
      description:
        "Um clássico reconfortante com camadas de queijo derretido e molho de tomate encorpado.",
      ingredients: [
        "500 g de macarrão",
        "300 g de Mussarela Porto Laticínios fatiada",
        "500 ml de molho de tomate",
        "100 g de parmesão ralado",
        "Manjericão fresco a gosto",
      ],
      steps: [
        "Cozinhe o macarrão al dente e reserve.",
        "Em um refratário, monte camadas de macarrão, molho e mussarela.",
        "Finalize com parmesão e leve ao forno até gratinar.",
        "Decore com manjericão fresco antes de servir.",
      ],
      tip: "Use a mussarela em fatias generosas para um gratinado mais uniforme.",
      orderLink: "/produtos/mussarela",
    },
    {
      id: "lasanha-mussarela",
      img: pizzaImg,
      title: "Lasanha de Muçarela",
      time: "35 min",
      audience: "negocio",
      product: "Mussarela Porto Laticínios",
      description:
        "Uma lasanha cremosa com bastante queijo derretido, perfeita para reunir a família ou servir no seu negócio.",
      ingredients: [
        "500 g de Mussarela Porto Laticínios",
        "1 caixa de massa para lasanha",
        "500 ml de molho de tomate",
        "200 g de presunto",
      ],
      steps: [
        "Pré-aqueça o forno a 200°C.",
        "Monte as camadas alternando massa, molho e mussarela.",
        "Finalize com bastante mussarela por cima.",
        "Asse por aproximadamente 35 minutos, até gratinar.",
      ],
      tip: "Utilize nossa mussarela para um gratinado uniforme e sabor marcante.",
      orderLink: "/produtos/mussarela",
    },
     {
      id: "lasanha",
      img: pizzaImg,
      title: "Lasanha de Muçarela",
      time: "35 min",
      audience: "negocio",
      product: "Mussarela Porto Laticínios",
      description:
        "Uma lasanha cremosa com bastante queijo derretido, perfeita para reunir a família ou servir no seu negócio.",
      ingredients: [
        "500 g de Mussarela Porto Laticínios",
        "1 caixa de massa para lasanha",
        "500 ml de molho de tomate",
        "200 g de presunto",
      ],
      steps: [
        "Pré-aqueça o forno a 200°C.",
        "Monte as camadas alternando massa, molho e mussarela.",
        "Finalize com bastante mussarela por cima.",
        "Asse por aproximadamente 35 minutos, até gratinar.",
      ],
      tip: "Utilize nossa mussarela para um gratinado uniforme e sabor marcante.",
      orderLink: "/produtos/mussarela",
    },
  ];

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [filtro, setFiltro] = useState<"casa" | "negocio" | null>(null);
  const [receitaSelecionada, setReceitaSelecionada] = useState<Recipe | null>(
    null
  );

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
    };

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const recipesFiltradas = recipes.filter(
    (r) => !filtro || r.audience === filtro || r.audience === "ambos"
  );

  const showCarousel = recipesFiltradas.length > 3;

  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true }, [
    autoplay.current,
  ]);

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

  useEffect(() => {
    if (!receitaSelecionada) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) =>
      e.key === "Escape" && setReceitaSelecionada(null);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [receitaSelecionada]);

  return (
    <section id="receitas" className="pt-20 pb-15 relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-3">
        <div className="grid items-center lg:grid-cols-2">
          <div>
            <SectionLabel icon={<ChefHat className="h-3.5 w-3.5" />}>
              Receitas
            </SectionLabel>

            <SectionHeading width="medium">
              Inspirações para usar nossos produtos
            </SectionHeading>

            <SectionParagraph width="large">
              Receitas para valorizar o sabor dos nossos produtos e
              transformar momentos simples em experiências especiais à mesa.
            </SectionParagraph>

            <div className="mt-5 flex flex-wrap gap-3 mb-6">
              <button
                type="button"
                onClick={() => setFiltro(null)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition border ${
                  !filtro
                    ? "bg-[#07598C] text-background"
                    : "border-border/80 text-muted-foreground hover:border-[#07598C]"
                }`}
              >
                Todas as receitas
              </button>
              <button
                type="button"
                onClick={() => setFiltro("casa")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition border ${
                  filtro === "casa"
                    ? "bg-[#07598C] text-background"
                    : "border-border/80 text-muted-foreground hover:border-[#07598C]"
                }`}
              >
                Para sua casa
              </button>
              <button
                type="button"
                onClick={() => setFiltro("negocio")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition border ${
                  filtro === "negocio"
                    ? "bg-[#07598C] text-background"
                    : "border-border/80 text-muted-foreground hover:border-[#07598C]"
                }`}
              >
                Para o seu negócio
              </button>
            </div>
          </div>

          {!showCarousel ? (
            <div
              className={`grid gap-5 ${
                isMobile ? "grid-cols-2" : "grid-cols-3"
              }`}
            >
              {recipesFiltradas.map((r) => (
                <div
                  key={r.id}
                  className="group overflow-hidden rounded-2xl transition hover:-translate-y-1 border border-border/80"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-medium text-foreground shadow-sm backdrop-blur">
                      🧀 {r.product}
                    </span>
                  </div>

                  <div className="p-4 ">
                    <div className="flex gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                      <span>{r.time}</span>
                    </div>

                    <h3 className="mt-2 text-1xl font-sans font-medium text-foreground">
                      {r.title}
                    </h3>

                    <button
                      type="button"
                      onClick={() => setReceitaSelecionada(r)}
                      className="mt-3 text-sm font-medium underline underline-offset-4 text-foreground hover:opacity-70 transition"
                    >
                      Ver receita
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-[32px_1fr_32px] items-center gap-1">
              <button
                type="button"
                disabled={!canPrev}
                onClick={() => emblaApi?.scrollPrev()}
                className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full transition ${
                  canPrev
                    ? ""
                    : "cursor-not-allowed opacity-30"
                }`}
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              <div
                className="min-w-0 overflow-hidden pr-6 md:pr-0"
                ref={emblaRef}
              >
                <div className="flex">
                  {recipesFiltradas.map((r) => (
                    <div
                      key={r.id}
                      className={`flex-none pl-1 ${
                        isMobile ? "w-[82%]" : "basis-1/3"
                      }`}
                    >
                      <div className={`
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
translate-y-0
opacity-100
`}>
                        <div className="relative h-44 flex-shrink-0 overflow-hidden">
                          <img
                            src={r.img}
                            alt={r.title}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex flex-1 flex-col p-4">
                          <div className="flex gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                            <span>{r.time}</span>
                          </div>

                          <h3 className="mt-2 font-display text-xl">
                            {r.title}
                          </h3>

                          <button
                            type="button"
                            onClick={() => setReceitaSelecionada(r)}
                            className="mt-auto pt-3 text-sm font-medium underline underline-offset-4 text-foreground hover:opacity-70 transition text-left"
                          >
                            Ver receita
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                disabled={!canNext}
                onClick={() => emblaApi?.scrollNext()}
                className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full transition ${
                  canNext
                    ? ""
                    : "cursor-not-allowed opacity-30"
                }`}
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
          )}
        </div>
      </div>

      {receitaSelecionada && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setReceitaSelecionada(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-card border border-border/80"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setReceitaSelecionada(null)}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/90 shadow-sm hover:opacity-70 transition"
              aria-label="Fechar"
            >
              ✕
            </button>

            <div className="h-46 w-full overflow-hidden">
              <img
                src={receitaSelecionada.img}
                alt={receitaSelecionada.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="pl-5 pr-5 pb-5">
              <h2 className="mt-3 font-display text-2xl text-foreground">
                {receitaSelecionada.title}
              </h2>

              <div className="mt-2 flex gap-3 text-xs uppercase tracking-wider text-muted-foreground">
                <span>⏱️ {receitaSelecionada.time}</span>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                {receitaSelecionada.description}
              </p>

              <hr className="my-5 border-border/60" />

              <h3 className="text-sm font-semibold text-foreground">
                Ingredientes
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                {receitaSelecionada.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>

              <hr className="my-5 border-border/60" />

              <h3 className="text-sm font-semibold text-foreground">
                Modo de preparo
              </h3>
              <ol className="mt-2 space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                {receitaSelecionada.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>

              {receitaSelecionada.tip && (
                <div className="mt-5 rounded-xl bg-muted p-4 text-sm text-foreground">
                  💡 <strong>Dica Porto Laticínios:</strong>{" "}
                  {receitaSelecionada.tip}
                </div>
              )}

              <a
                href={receitaSelecionada.orderLink}
                className="mt-6 block w-full rounded-full bg-foreground py-3 text-center text-sm font-medium text-background transition hover:opacity-90"
              >
                Fazer pedido
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}