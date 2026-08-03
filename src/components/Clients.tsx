import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Truck } from "lucide-react";
import { Star, Store } from "lucide-react";

import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";
import { SectionParagraph } from "./SectionParagraph";

import pizzariaImg from "@/assets/client-pizzaria.jpg";
import supermercadoImg from "@/assets/client-supermercado.jpg";
import restauranteImg from "@/assets/client-restaurante.jpg";


export function Clients() {
  const types = [
    {
      name: "Pizzarias",
      image: pizzariaImg,
    },
    {
      name: "Restaurantes",
      image: restauranteImg,
    },
    {
      name: "Supermercados",
      image: supermercadoImg,
    },
    {
      name: "Padarias",
      image: pizzariaImg,
    },
    {
      name: "Mercearias",
      image: supermercadoImg,
    },
    {
      name: "Distribuidores",
      image: restauranteImg,
    },
  ];
  const autoplay = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
  });
  const [
    emblaRef,
    emblaApi
  ] = useEmblaCarousel(
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
    <section
      id="clientes"
      className="
    relative
    overflow-hidden
    py-28
    bg-[radial-gradient(circle_at_left,#0E6AA4_0%,#084E80_45%,#063C67_100%)]
"

    >
      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
        grid
        gap-12
        lg:grid-cols-[1.25fr_.9fr]
        lg:items-center
      "
        >

          {/* LADO ESQUERDO */}
          <div className="text-white">

            <SectionLabel icon={<Truck className="h-3.5 w-3.5" />}>
              Parceiros e depoimentos
            </SectionLabel>

            <SectionHeading width="large" className="
        max-w-[760px]
        text-6xl
        leading-[1.05]
        font-black
    ">
              Quem escolhe a qualidade <span className="text-[#F7B21A]"> Porto Laticínios.
              </span>
            </SectionHeading>

            <SectionParagraph width="small" className="text-white text-xl leading-10">
              Atendemos{" "}
              <span className="font-bold">
                Atacado e Varejo
              </span>
              , com parceiros que confiam na nossa qualidade e compartilham suas experiências com sabor e compromisso.
            </SectionParagraph>


            {/* CARROSSEL CLIENTES */}
            <div className="relative mt-10">

              <button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canPrev}
                className="
                text-black
              absolute
              -left-4
              top-1/2
              z-10
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-background
              shadow-md
              transition
              hover:scale-105
              disabled:opacity-30
            "
              >
                <ChevronLeft />
              </button>


              <div
                ref={emblaRef}
                className="overflow-hidden"
              >

                <div className="flex -mx-2">

                  {types.map((type) => (
                    <div
                      key={type.name}
                      className="
                    flex-[0_0_50%]
                    px-2
                  "
                    >
                      <div
                        className="
                      group
                      relative
                      h-[150px]
                      rounded-[26px]
                      overflow-hidden
                      shadow-2xl
                      border border-white/10
                      group-hover:scale-105
                      group-hover:brightness-110
                    "
                      >

                        <img
                          src={type.image}
                          alt={type.name}
                          className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-105
                      "
                        />


                        <div
                          className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-black/80
                        to-transparent
                      "
                        />


                        <h3
                          className="
                        absolute
                        bottom-4
                        left-5
                        font-display
                        text-xl
                        text-white
                        lading-relaxed
                      "
                        >
                          {type.name}
                        </h3>

                      </div>
                    </div>
                  ))}
                </div>
              </div>


              <button
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canNext}
                className="
                text-black
              absolute
              -right-4
              top-1/2
              z-10
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-background
              shadow-md
              transition
              hover:scale-105
              disabled:opacity-30
            "
              >
                <ChevronRight />
              </button>


            </div>

          </div>


          <div className="flex justify-center lg:justify-end">

            <div className="w-full max-w-[320px]">

              <div
                className="overflow-hidden"
                ref={emblaRef2}
              >

                <div className="flex">

                  {reviews.map((r, i) => (
                    <div
                      key={i}
                      className="
              flex-[0_0_100%]
              px-2
            "
                    >

                      <figure
                        className="
                flex
                min-h-[260px]
                w-full
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


                        <blockquote className="mt-3 flex-1 text-sm leading-relaxed">
                          "{r.quote}"
                        </blockquote>


                        <figcaption className="mt-5 border-t border-border pt-4">
                          <p className="font-bold">
                            {r.who}
                          </p>

                          <p className="text-sm text-muted-foreground">
                            {r.role}
                          </p>
                        </figcaption>

                      </figure>

                      {/* Indicador de progresso */}
                      <div className="mt-6 flex justify-center gap-2">

                        {reviews.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => emblaApi2?.scrollTo(index)}
                            aria-label={`Ir para depoimento ${index + 1}`}
                            className={`
        h-2
        rounded-full
        transition-all
        duration-300
        ${selectedIndex === index
                                ? "w-10 bg-white"
                                : "w-2 bg-white/40"
                              }
      `}
                          />
                        ))}

                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>


          

        </div>

      </div>

    </section>
  );
}