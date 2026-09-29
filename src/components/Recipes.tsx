import { useEffect, useMemo, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronLeft, ChevronRight, ChefHat, Clock, Pause, Play, X } from "lucide-react";

import crepioca from "@/assets_optimized/crepioca.webp";
import frango from "@/assets_optimized/frango.webp";
import paodealho from "@/assets_optimized/paodealho.webp";
import molhomassas from "@/assets_optimized/molho-massas.webp";
import molhonata from "@/assets_optimized/molho-nata.webp";
import pao from "@/assets_optimized/pao-recheado.webp";
import pizza from "@/assets_optimized/pizza.webp";
import torrada from "@/assets_optimized/torrada.webp";

import { WHATSAPP_LINK } from "@/lib/constants";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";
import { SectionParagraph } from "./SectionParagraph";

type Audience = "casa" | "negocio" | "ambos";
type Filter = "casa" | "negocio" | null;

type Recipe = {
  id: string;
  img: string;
  title: string;
  time: string;
  audience: Audience;
  product: string;
  description: string;
  ingredients: string[];
  steps: string[];
  tip?: string;
  orderLink: string;
};

const recipes: Recipe[] = [
  // MUSSARELA
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
  // REQUEIJÃO DE AMIDO
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
  // REQUEIJÃO 4 QUEIJOS
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
  // NATA SALGADA
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

const filters: { value: Filter; label: string }[] = [
  { value: null, label: "Todas as receitas" },
  { value: "casa", label: "Para sua casa" },
  { value: "negocio", label: "Para o seu negócio" },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A69BA]";

function RecipeCard({ recipe, onOpen }: { recipe: Recipe; onOpen: (r: Recipe) => void }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-white shadow-sm transition-transform duration-500 motion-reduce:transition-none motion-safe:hover:-translate-y-1">
      <div className="relative h-44 overflow-hidden">
        <img
          src={recipe.img}
          alt={recipe.title}
          width={900}
          height={600}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 motion-reduce:transition-none motion-safe:group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 z-10 max-w-[85%] rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold leading-tight text-gray-900 shadow-md">
          {recipe.product}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock aria-hidden="true" className="h-3.5 w-3.5" />
          <span>
            <span className="sr-only">Tempo de preparo: </span>
            {recipe.time}
          </span>
        </div>

        <h3 className="mt-2 font-display text-xl text-foreground">{recipe.title}</h3>

        <button
          type="button"
          aria-haspopup="dialog"
          aria-label={`Ver receita: ${recipe.title}`}
          onClick={() => onOpen(recipe)}
          className={`mt-auto self-start rounded-sm pt-3 text-left text-sm font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-70 ${focusRing}`}
        >
          Ver receita
        </button>
      </div>
    </article>
  );
}

function RecipeDialog({ recipe, onClose }: { recipe: Recipe | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (recipe) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (dialog.open) {
      dialog.close();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [recipe]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="recipe-dialog-title"
      onClose={onClose} // dispara com Esc e com dialog.close()
      onClick={(e) => {
        // clique no backdrop (o próprio <dialog>) fecha
        if (e.target === e.currentTarget) onClose();
      }}
      className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl border border-border/80 bg-card p-0 text-foreground backdrop:bg-black/60"
    >
      {recipe && (
        <div className="relative">
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar receita"
            className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black shadow-sm transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A69BA]"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>

          <div className="h-44 w-full overflow-hidden">
            <img
              src={recipe.img}
              alt=""
              width={900}
              height={600}
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="px-5 pb-5">
            <span className="mt-4 inline-block max-w-full rounded-full bg-muted px-3 py-1.5 text-xs font-semibold text-foreground">
              {recipe.product}
            </span>

            <h2 id="recipe-dialog-title" className="mt-3 font-display text-2xl text-foreground">
              {recipe.title}
            </h2>

            <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock aria-hidden="true" className="h-3.5 w-3.5" />
              <span>
                <span className="sr-only">Tempo de preparo: </span>
                {recipe.time}
              </span>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">{recipe.description}</p>

            <hr className="my-5 border-border/60" />

            <h3 className="text-sm font-semibold text-foreground">Ingredientes</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              {recipe.ingredients.map((ing) => (
                <li key={ing}>{ing}</li>
              ))}
            </ul>

            <hr className="my-5 border-border/60" />

            <h3 className="text-sm font-semibold text-foreground">Modo de preparo</h3>
            <ol className="mt-2 list-inside list-decimal space-y-2 text-sm text-muted-foreground">
              {recipe.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            {recipe.tip && (
              <div className="mt-5 rounded-xl bg-muted p-4 text-sm text-foreground">
                <span aria-hidden="true">💡 </span>
                <strong>Dica Porto Laticínios:</strong> {recipe.tip}
              </div>
            )}

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A69BA]"
            >
              <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
              Fazer pedido do produto
              <span className="sr-only">(abre o WhatsApp em uma nova aba)</span>
            </a>
          </div>
        </div>
      )}
    </dialog>
  );
}

/* ====================================================================
   SEÇÃO
==================================================================== */
export function Recipes() {
  const reduced = usePrefersReducedMotion();
  const [filtro, setFiltro] = useState<Filter>(null);
  const [receitaSelecionada, setReceitaSelecionada] = useState<Recipe | null>(null);
  const [userPaused, setUserPaused] = useState(false);

  const recipesFiltradas = useMemo(
    () => recipes.filter((r) => !filtro || r.audience === filtro || r.audience === "ambos"),
    [filtro]
  );
  const showCarousel = recipesFiltradas.length > 3;

  // Plugin estável (antes: useRef(Autoplay(...)) criava uma instância nova a cada render, descartada)
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        playOnInit: !reduced,
      }),
    [reduced]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true }, [autoplay]);

  // Com loop:true sempre dá para avançar/voltar → canPrev/canNext e "disabled" eram código morto.
  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi, filtro]);

  const toggleAutoplay = () => {
    const next = !userPaused;
    setUserPaused(next);
    const ap = emblaApi?.plugins()?.autoplay;
    if (next) ap?.stop();
    else ap?.play();
  };

  return (
    <section id="receitas" className="relative overflow-hidden bg-white pb-16 pt-20">
      <div className="mx-auto max-w-7xl px-3">
        <div className="grid items-center lg:grid-cols-2">
          {/* INTRODUÇÃO */}
          <div>
            <SectionLabel icon={<ChefHat aria-hidden="true" className="h-3.5 w-3.5" />}>
              Receitas
            </SectionLabel>

            <SectionHeading width="medium">Inspirações para usar nossos produtos</SectionHeading>

            <SectionParagraph width="large">
              Receitas para valorizar o sabor dos nossos produtos e transformar momentos simples
              em experiências especiais à mesa.
            </SectionParagraph>

            <div role="group" aria-label="Filtrar receitas" className="mb-6 mt-5 flex flex-wrap gap-3">
              {filters.map(({ value, label }) => {
                const active = filtro === value;
                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFiltro(value)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${focusRing} ${
                      active
                        ? "border-[#0A69BA] bg-[#0A69BA] text-white"
                        : "border-border/80 text-muted-foreground hover:border-[#0A69BA]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Anuncia o resultado do filtro para leitores de tela */}
            <p className="sr-only" role="status">
              {recipesFiltradas.length} receitas exibidas
            </p>
          </div>

          {/* LISTAGEM */}
          {!showCarousel ? (
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
              {recipesFiltradas.map((r) => (
                <RecipeCard key={r.id} recipe={r} onOpen={setReceitaSelecionada} />
              ))}
            </div>
          ) : (
            <div role="region" aria-roledescription="carrossel" aria-label="Receitas">
              <div className="grid grid-cols-[40px_1fr_40px] items-center gap-1 md:grid-cols-[48px_1fr_48px]">
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollPrev()}
                  aria-label="Receita anterior"
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-70 md:h-12 md:w-12 ${focusRing}`}
                >
                  <ChevronLeft aria-hidden="true" className="h-5 w-5 md:h-6 md:w-6" />
                </button>

                <div className="min-w-0 overflow-hidden pr-6 md:pr-0" ref={emblaRef}>
                  <div className="flex">
                    {recipesFiltradas.map((r, i) => (
                      <div
                        key={r.id}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${i + 1} de ${recipesFiltradas.length}`}
                        className="flex-none basis-[82%] pl-1 md:basis-1/3"
                      >
                        <RecipeCard recipe={r} onOpen={setReceitaSelecionada} />
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => emblaApi?.scrollNext()}
                  aria-label="Próxima receita"
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-70 md:h-12 md:w-12 ${focusRing}`}
                >
                  <ChevronRight aria-hidden="true" className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>

              {/* Controle de pausa (WCAG 2.2.2) — oculto se o autoplay nem inicia */}
              {!reduced && (
                <div className="mt-3 flex justify-center">
                  <button
                    type="button"
                    onClick={toggleAutoplay}
                    aria-label={userPaused ? "Retomar rotação automática" : "Pausar rotação automática"}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-border/80 transition-colors hover:bg-muted ${focusRing}`}
                  >
                    {userPaused ? (
                      <Play aria-hidden="true" className="h-4 w-4" />
                    ) : (
                      <Pause aria-hidden="true" className="h-4 w-4" />
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <RecipeDialog recipe={receitaSelecionada} onClose={() => setReceitaSelecionada(null)} />
    </section>
  );
}