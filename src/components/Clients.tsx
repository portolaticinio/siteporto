import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Truck } from "lucide-react";

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


  return (
    <section
      id="clientes"
      className="relative pt-20 pb-8">

      {/* Conteúdo da seção com z-index para garantir a visibilidade sobre o overlay */}
      < div className="relative z-10 mx-auto max-w-7xl px-6" >

        <SectionLabel icon={<Truck className="h-3.5 w-3.5" />}>
          Nossos parceiros
        </SectionLabel>

        <SectionHeading width="medium">
          Parceiros que confiam no nosso sabor.
        </SectionHeading>

        <SectionParagraph width="large">
          Atendemos <span className="font-bold">Atacado e Varejo</span>, oferecendo soluções 
          para estabelecimentos e consumidores que buscam produtos 
          com qualidade e rendimento.
        </SectionParagraph>


        <div className="relative mt-10">


          {/* seta esquerda */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            className="
              absolute -left-4 top-1/2 z-10
              flex h-10 w-10
              -translate-y-1/2
              items-center justify-center
              rounded-full
              bg-background
              shadow-md
              transition
              hover:scale-105
              disabled:opacity-30
            "
          >
            <ChevronLeft className="h-5 w-5" />
          </button>


          {/* carrossel */}
          <div
            className="overflow-hidden"
            ref={emblaRef}
          >

            <div className="flex">

              {types.map((type) => (

                <div
                  key={type.name}
                  className="
                  flex-none
                  w-[260px]
                  pr-4
                  md:w-[320px]
                "
                >

                  <div
                    className="
                    group
                    relative
                    h-[120px]
                    overflow-hidden
                    rounded-2xl
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
                        absolute inset-0
                        bg-gradient-to-t
                        bg-gradient-to-r
                        from-black/80
                        to-transparent
                      "
                    />


                    <h3
                      className="
    absolute
    bottom-3
    left-5
    font-display
    text-xl
    text-white
  "
                    >
                      {type.name}
                    </h3>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* seta direita */}
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            className="
              absolute -right-4 top-1/2 z-10
              flex h-10 w-10
              -translate-y-1/2
              items-center justify-center
              rounded-full
              bg-background
              shadow-md
              transition
              hover:scale-105
              disabled:opacity-30
            "
          >
            <ChevronRight className="h-5 w-5" />
          </button>


        </div>

      </div >

    </section >
  );
}