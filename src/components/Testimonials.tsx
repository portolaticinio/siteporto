"use client";

import { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Pause, Play } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

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
    quote: "Produtos com excelente padrão de qualidade e ótimo atendimento.",
    who: "Carlos Mendes",
    role: "Mercado Bom Sabor",
  },
  {
    quote: "A qualidade dos produtos mantém nosso padrão de atendimento aos clientes.",
    who: "Fernanda Alves",
    role: "Restaurante Sabor Caseiro",
  },
  {
    quote: "Sempre recebemos os pedidos no prazo e com ótima conservação.",
    who: "João Pereira",
    role: "Supermercado São José",
  },
  {
    quote: "Um fornecedor parceiro, com produtos consistentes e atendimento excelente.",
    who: "Lucas Martins",
    role: "Lanchonete Express",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function Testimonials() {
  const reduced = usePrefersReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);

  // Plugin estável + pausa em hover/foco (antes: nova instância a cada render, sem pausa)
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

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const toggleAutoplay = () => {
    const next = !userPaused;
    setUserPaused(next);
    const ap = emblaApi?.plugins()?.autoplay;
    if (next) ap?.stop();
    else ap?.play();
  };

  return (
    <div role="region" aria-roledescription="carrossel" aria-label="Depoimentos de clientes">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex" aria-live={userPaused || reduced ? "polite" : "off"}>
          {reviews.map((r, i) => (
            <div
              key={r.who}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${reviews.length}`}
              aria-hidden={selectedIndex !== i}
              className="min-w-0 flex-[0_0_100%] px-2"
            >
              <figure className="mx-auto flex min-h-[270px] w-full max-w-[270px] flex-col rounded-2xl bg-card p-5">
                <div aria-hidden="true" className="flex gap-1 text-accent">
                  {[0, 1, 2, 3, 4].map((k) => (
                    <Star key={k} aria-hidden="true" className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <blockquote className="mt-3 flex-1 text-base leading-relaxed">
                  “{r.quote}”
                </blockquote>

                <figcaption className="mt-1 border-t border-border pt-5">
                  <p className="font-bold">{r.who}</p>
                  <p className="text-sm text-muted-foreground">{r.role}</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores + pausa */}
      <div className="mt-6 flex items-center justify-center gap-1">
        {!reduced && (
          <button
            type="button"
            onClick={toggleAutoplay}
            aria-label={userPaused ? "Retomar rotação automática" : "Pausar rotação automática"}
            className={`mr-2 flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted ${focusRing}`}
          >
            {userPaused ? (
              <Play aria-hidden="true" className="h-4 w-4" />
            ) : (
              <Pause aria-hidden="true" className="h-4 w-4" />
            )}
          </button>
        )}

        {reviews.map((r, index) => (
          <button
            key={r.who}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Ir para depoimento ${index + 1}`}
            aria-current={selectedIndex === index}
            // área de toque de 24px em volta da bolinha visual (WCAG 2.5.8)
            className={`flex h-6 min-w-6 items-center justify-center px-0.5 ${focusRing}`}
          >
            <span
              className={`
                block h-2 rounded-full transition-[width,background-color] duration-300
                motion-reduce:transition-none
                ${selectedIndex === index ? "w-10 bg-primary" : "w-3 bg-muted-foreground/60"}
              `}
            />
          </button>
        ))}
      </div>
    </div>
  );
}