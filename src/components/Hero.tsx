import { FaWhatsapp } from "react-icons/fa";
import { Leaf, ChevronDown } from "lucide-react";
import heroTablet from "@/assets/herodesktop2.png";
import heroMobile from "@/assets/heromobile2.png";
import heroDesktop from "@/assets/herodesktop2.png";

import { WHATSAPP_LINK } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        h-[62vh]
        max-h[750px]
        min-h-[620px]
        md:h-auto
        md:aspect-[1672/941]
        md:min-h-0
        md:max-h-none
        lg:aspect-auto
        lg:h-[600px]
        xl:h-[640px]
        2xl:h-[680px]
      "
    >

      <div
        className="
          absolute
          inset-0
          hidden
          bg-cover
          bg-no-repeat
          lg:block
          lg:[background-position:68%_center]
        "
        style={{
          backgroundImage: `url(${heroDesktop})`,
        }}
      />

      <div
        className="
          absolute
          inset-0
          hidden
          bg-cover
          bg-no-repeat
          md:block
          lg:hidden
          md:[background-position:82%_center]
        "
        style={{
          backgroundImage: `url(${heroTablet})`,
        }}
      />

      <div
        className="
          absolute
          inset-0
          block
          bg-cover
          bg-no-repeat
          md:hidden
          [background-position:center_8%]
        "
        style={{
          backgroundImage: `url(${heroMobile})`,
        }}
      />

      {/* Overlay Desktop — dark only where the text sits (left side) */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background: `
      linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.72) 0%,
        rgba(0, 0, 0, 0.62) 16%,
        rgba(0, 0, 0, 0.42) 30%,
        rgba(0, 0, 0, 0.18) 44%,
        rgba(0, 0, 0, 0.04) 58%,
        transparent 70%
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
        rgba(0, 0, 0, 0.70) 0%,
        rgba(0, 0, 0, 0.55) 22%,
        rgba(0, 0, 0, 0.30) 40%,
        rgba(0, 0, 0, 0.08) 60%,
        transparent 80%
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

      <div
        className="absolute inset-0 block md:hidden"
        style={{
          background: `
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.72) 0%,
        rgba(0, 0, 0, 0.62) 22%,
        rgba(0, 0, 0, 0.40) 40%,
        rgba(0, 0, 0, 0.15) 55%,
        rgba(0, 0, 0, 0.02) 68%,
        transparent 78%
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
          items-center
          lg:gap-10
          lg:px-8
          lg:py-12
          xl:max-w-7xl
          xl:gap-12
          xl:px-6
          2xl:max-w-[1200px]
        "
      >
        <div
          className="
            animate-float-up
            text-start
            max-w-[420px]
            sm:max-w-[460px]
            md:max-w-[420px]
            lg:mx-0
            lg:max-w-none
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
              maxWidth: "clamp(320px, 100vw, 560px)",
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
              items-center
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