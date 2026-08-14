import { FaWhatsapp } from "react-icons/fa";
import { Leaf, ChevronDown } from "lucide-react";
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
        min-h-[150vw]
        md:min-h-[75vw]
        lg:min-h-[38vw]
        lg:max-h-[826px]
      "
    >
      {/* Desktop */}
      <div
        className="
          absolute
          inset-0
          hidden
          bg-cover
          bg-no-repeat
          lg:block
          lg:[background-position:center_-80px]
          xl:[background-position:center_-140px]
          2xl:[background-position:center_-200px]
        "
        style={{
          backgroundImage: `url(${heroDesktop})`,
        }}
      />

      {/* Tablet */}
      <div
        className="
          absolute
          inset-0
          hidden
          bg-cover
          bg-center
          bg-no-repeat
          md:block
          lg:hidden
        "
        style={{
          backgroundImage: `url(${heroTablet})`,
          backgroundPosition: "center",
        }}
      />

      {/* Mobile */}
      <div
        className="
          absolute
          inset-0
          block
          bg-cover
          bg-center
          bg-no-repeat
          md:hidden
        "
        style={{
          backgroundImage: `url(${heroMobile})`,
        }}
      />

      {/* Overlay Desktop */}
<div
  className="absolute inset-0 hidden lg:block"
  style={{
    background: `
      linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.72) 0%,
        rgba(0, 0, 0, 0.62) 18%,
        rgba(0, 0, 0, 0.45) 34%,
        rgba(0, 0, 0, 0.22) 50%,
        rgba(0, 0, 0, 0.06) 68%,
        transparent 82%
      ),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.20) 0%,
        transparent 28%,
        rgba(0, 0, 0, 0.08) 100%
      )
    `,
  }}
/>

{/* Overlay Tablet */}
<div
  className="absolute inset-0 hidden md:block lg:hidden"
  style={{
    background: `
      linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.68) 0%,
        rgba(0, 0, 0, 0.52) 28%,
        rgba(0, 0, 0, 0.28) 50%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 100%
      ),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.28) 0%,
        transparent 40%,
        rgba(0, 0, 0, 0.12) 100%
      )
    `,
  }}
/>

{/* Overlay Mobile */}
<div
  className="absolute inset-0 block md:hidden"
  style={{
    background: `
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.68) 0%,
        rgba(0, 0, 0, 0.58) 28%,
        rgba(0, 0, 0, 0.42) 48%,
        rgba(0, 0, 0, 0.20) 70%,
        rgba(0, 0, 0, 0.05) 88%,
        transparent 100%
      )
    `,
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
            lg:mx-0
            lg:text-left
          "
        >
          <span
            className="
            inline-flex
            items-center
            gap-1.5
            rounded-full
            border
            border-[#DFA304]
            bg-black/10
            px-2
            py-1
            text-[9px]
            font-medium
            uppercase
            tracking-[0.06em]
            backdrop-blur-sm
            sm:px-2.5
            sm:py-1
            sm:text-[10px]
            sm:tracking-[0.08em]
            md:px-3
            md:text-[10px]
            md:tracking-[0.1em]
            lg:text-[11px]
            lg:tracking-[0.1em]
            text-[#DFA304]
          "
          >
            <Leaf className="h-3 w-3 shrink-0 text-[#DFA304]" />
            Desde 2023 — Construindo nossa história
          </span>

          <h1
            className="leading-[1.05] md:leading-[1.03]"
            style={{
              color: "#fff",
              textShadow: "0 2px 12px rgba(255,255,255,.15)",
              fontSize: "clamp(2rem, 4.4vw, 4.0rem)",
              marginTop: "0.75rem",
            }}
          >
            O verdadeiro sabor
            <br />
            do Queijo na{" "}
            <span
              style={{
                color: "#F6C72F",
                textShadow: "0 4px 16px rgba(0, 0, 0, 0.43)",
              }}
            >
              Paraíba
            </span>
          </h1>

          <p
            style={{
              color: "#fff",
              fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
              maxWidth: "clamp(380px, 90vw, 540px)",
              marginTop: "0.75rem",
            }}
          >
            Produzimos laticínios com cuidado em cada etapa e dedicação
            para entregar produtos que fazem parte da história de muitas famílias.
          </p>

          <div
            className="
              hero-buttons
              mt-4
              flex
              flex-col
              items-start
              gap-3
              min-[350px]:flex-row
            "
          >
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
                bg-[#DFA304]
                px-6
                text-sm
                font-medium
                text-black
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
              items-center
              justify-center
              gap-2
              px-1
              text-ls
              font-medium
              text-white
              transition
              underline
              decoration-yellow-400
              underline-offset-10
              sm:h-14
              sm:px-7
            "
            >
              Conhecer produtos
              <ChevronDown
                className="h-4 w-4 "
                strokeWidth={2}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}