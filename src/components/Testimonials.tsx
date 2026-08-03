"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Truck, Star } from "lucide-react";

import { useEffect, useState } from "react";


export function Testimonials() {
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
    <div>
          {/* Carrossel + indicador */}
          <div>
            <div
              className="overflow-hidden"
              ref={emblaRef2}
            >
              <div className="flex">

                {reviews.map((r, i) => (
                  <div
                    key={i}
                    className="
                      min-w-0
                      flex-[0_0_100%]
                      px-2
                    
                    "
                  >
                    <figure
                      className="
    mx-auto
    flex
    aspect-square
    w-full
    max-w-[270px]
    flex-col
    rounded-2xl
    bg-card
    p-5
  "
                    >

                      <div className="flex gap-1 text-accent">
                        {[...Array(5)].map((_, k) => (
                          <Star
                            key={k}
                            className="h-4 w-4 fill-current"
                          />
                        ))}
                      </div>

                      <blockquote className="mt-3 text-1xl leading-relaxed">
                        "{r.quote}"
                      </blockquote>

                      <figcaption className="mt-1 border-t border-border pt-5">
                        <p className="font-bold">
                          {r.who}
                        </p>

                        <p className="text-1xl text-muted-foreground">
                          {r.role}
                        </p>
                      </figcaption>

                    </figure>
                  </div>
                ))}

              </div>
            </div>


            {/* Indicador abaixo dos cards */}
            <div className="mt-6 flex justify-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi2?.scrollTo(index)}
                  className={`
                    h-2 rounded-full transition-all duration-300
                    ${selectedIndex === index
                      ? "w-10 bg-primary"
                      : "w-3 bg-border"
                    }
                  `}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

          </div>
    </div>
  );
}