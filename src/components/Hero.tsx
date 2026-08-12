import { Leaf } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import heroTablet from "@/assets/herotablet.png";
import heroMobile from "@/assets/heromobile.png";
import heroDesktop from "@/assets/herodesktop.png";

import { WHATSAPP_LINK } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        min-h-[77dvh]
        sm:min-h-[85dvh]
        md:min-h-[70dvh]
        lg:min-h-[60vh]
        xl:min-h-[58vh]
        2xl:min-h-[52vh]
        landscape:min-h-[100dvh]
        landscape:md:min-h-[70dvh]
      "
    >
      {/* Imagem Desktop (lg a 2xl+) */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center lg:block"
        style={{
          backgroundImage: `url(${heroDesktop})`,
        }}
      />

      {/* Imagem Tablet (md a lg) */}
      <div
        className="absolute inset-0 hidden bg-no-repeat md:block lg:hidden"
        style={{
          backgroundImage: `url(${heroTablet})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Imagem Mobile (ate md) */}
      <div
        className="absolute inset-0 block bg-cover bg-center md:hidden"
        style={{
          backgroundImage: `url(${heroMobile})`,
          backgroundPosition: "center top",
        }}
      />

      {/* Overlay Desktop */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(247, 241, 231, 0.27) 0%, rgba(247, 241, 231, 0.07) 10%, transparent 100%)",
        }}
      />

      {/* Overlay Tablet */}
      <div
        className="absolute inset-0 hidden md:block lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(247,241,231,.65) 0%, rgba(247, 241, 231, 0.47) 10%, transparent 100%)",
        }}
      />

      {/* Overlay Mobile */}
      <div
        className="absolute inset-0 block md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(247,241,231,.78) 20%, rgba(247, 241, 231, 0.3) 50%, transparent 100%)",
        }}
      />

      <div
        className="
  relative z-10
  mx-auto
  lg:mt-16
  lg:mb-16
  lg:ml-16
  w-full
  max-w-[1920px]
  px-4
  py-6
  xs:px-5
  sm:px-6
  sm:py-8
  md:px-8
  md:py-10
  lg:grid
  lg:grid-cols-2
  lg:items-center
  lg:gap-10
  lg:px-8
  lg:py-12
  xl:max-w-7xl
  xl:gap-12
  xl:px-6
  2xl:max-w-[1600px]
"
      >
        <div
          className="
            animate-float-up
            text-start
            sm:max-w-2xl
            md:mx-auto
            md:max-w-2xl
            lg:mx-0
            lg:max-w-xl
            lg:text-left
            xl:max-w-2xl
          "
        >
          <span
            className="
    inline-flex
    items-center
    gap-2
    rounded-xl
    border
    border-black/10
    bg-white/65
    px-2.5
    py-1.5
    text-[10px]
    font-medium
    uppercase
    tracking-[0.08em]
    backdrop-blur-sm
    sm:px-3
    sm:text-[11px]
    sm:tracking-[0.12em]
    md:px-4
    md:text-xs
    md:tracking-[0.16em]
    lg:text-sm
    lg:tracking-[0.18em]
  "
          >
            <Leaf className="h-3.5 w-3.5 shrink-0 text-[#2B776A]" />
            Desde 2023 — Com o sabor que sua família merece
          </span>

          <h1
            className="
              mt-3
              text-[clamp(2.1rem,7vw,2.75rem)]
              leading-[1.08]
              sm:text-[clamp(2.5rem,5.5vw,3.25rem)]
              md:leading-[1.05]
              lg:text-5xl
              xl:text-6xl
              2xl:text-[4.25rem]
            "
            style={{
              color: "#000",
              textShadow: "0 2px 12px rgba(255,255,255,.15)",
            }}
          >
            O verdadeiro sabor
            <br />
            do Queijo na {" "}
            <span style={{ color: "#0c4c74" }}>Paraíba</span>
          </h1>

          <p
            className="
              mt-3
              max-w-full
              text-base
              font-semibold
              leading-relaxed
              xs:max-w-[300px]
              sm:max-w-[420px]
              sm:text-lg
              md:max-w-[520px]
              md:text-xl
              lg:max-w-[480px]
              xl:max-w-[560px]
              2xl:max-w-[620px]
            "
            style={{ color: "#000" }}
          >
            Mussarela, requeijão cremoso e nata salgada: produtos feitos com leite de qualidade, cuidado em cada etapa e o sabor que chega à sua mesa.

          </p>
          <div className="mt-4 flex items-start gap-3 xs:flex-row lg:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="
    w-fit
    inline-flex
    h-12
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
    sm:h-14
    sm:px-7
  "
            >
              <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
              Fazer pedido
            </a>

            <a
              href="#produtos"
              className="
    w-fit
    inline-flex
    h-12
    items-center
    justify-center
    rounded-2xl
    bg-white/90
    px-6
    text-sm
    font-medium
    text-[#1A140F]
    shadow-sm
    backdrop-blur-sm
    transition
    hover:bg-white
    sm:h-14
    sm:px-7
  "
            >
              Ver produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}