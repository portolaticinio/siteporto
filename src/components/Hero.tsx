import { FaWhatsapp } from "react-icons/fa";
import { Leaf, ChevronDown } from "lucide-react";

import { WHATSAPP_LINK } from "@/lib/constants";

const HERO_DIR = "/hero";

const srcSet = (
  name: string,
  widths: number[],
  ext: "avif" | "webp",
) => widths.map((w) => `${HERO_DIR}/${name}-${w}.${ext} ${w}w`).join(", ");

const DESKTOP_WIDTHS = [800, 1200, 1672];
const MOBILE_WIDTHS = [480, 768, 1080];

const overlayDesktop = {
  background: `
    linear-gradient(90deg,
      rgba(0,0,0,.72) 0%, rgba(0,0,0,.62) 16%, rgba(0,0,0,.42) 30%,
      rgba(0,0,0,.18) 44%, rgba(0,0,0,.04) 58%, transparent 70%),
    linear-gradient(180deg,
      rgba(0,0,0,.20) 0%, transparent 28%, rgba(0,0,0,.08) 100%)
  `,
};

const overlayTablet = {
  background: `
    linear-gradient(90deg,
      rgba(0,0,0,.70) 0%, rgba(0,0,0,.55) 22%, rgba(0,0,0,.30) 40%,
      rgba(0,0,0,.08) 60%, transparent 80%),
    linear-gradient(180deg,
      rgba(0,0,0,.28) 0%, transparent 40%, rgba(0,0,0,.12) 100%)
  `,
};

const overlayMobile = {
  background: `
    linear-gradient(180deg,
      rgba(0,0,0,.72) 0%, rgba(0,0,0,.62) 22%, rgba(0,0,0,.40) 40%,
      rgba(0,0,0,.15) 55%, rgba(0,0,0,.02) 68%, transparent 78%)
  `,
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="
        relative
        overflow-hidden
        bg-neutral-900
        h-[62vh]
        max-h-[700px]
        min-h-[610px]
        md:h-auto
        md:min-h-0
        md:aspect-[1672/941]
        md:max-h-none
        lg:aspect-auto
        lg:h-[600px]
        xl:h-[640px]
        2xl:h-[680px]
      "
    >
      {/* =====================================================
          IMAGEM PRINCIPAL — LCP
          Mantemos picture para entregar AVIF/WebP responsivo.
          O preload fica no head da rota.
      ====================================================== */}
      <picture>
        {/* Desktop AVIF */}
        <source
          media="(min-width: 768px)"
          type="image/avif"
          srcSet={srcSet("hero-desktop", DESKTOP_WIDTHS, "avif")}
          sizes="100vw"
        />

        {/* Desktop WebP */}
        <source
          media="(min-width: 768px)"
          type="image/webp"
          srcSet={srcSet("hero-desktop", DESKTOP_WIDTHS, "webp")}
          sizes="100vw"
        />

        {/* Mobile AVIF */}
        <source
          type="image/avif"
          srcSet={srcSet("hero-mobile", MOBILE_WIDTHS, "avif")}
          sizes="100vw"
        />

        {/* Mobile WebP */}
        <source
          type="image/webp"
          srcSet={srcSet("hero-mobile", MOBILE_WIDTHS, "webp")}
          sizes="100vw"
        />

        {/* Fallback */}
        <img
          src={`${HERO_DIR}/hero-mobile-768.webp`}
          alt=""
          width={1080}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-[center_50%]
            md:object-[80%_center]
            lg:object-[68%_center]
          "
        />
      </picture>

      {/* =====================================================
          OVERLAYS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block"
        style={overlayDesktop}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 hidden md:block lg:hidden"
        style={overlayTablet}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 block md:hidden"
        style={overlayMobile}
      />

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <div
        className="
          relative
          z-10
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
          2xl:max-w-[1200px]
        "
      >
        <div
          className="
            animate-float-up
            motion-reduce:animate-none
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
              bg-black/20
              px-2.5
              py-1
              text-[11px]
              font-medium
              uppercase
              tracking-[0.06em]
              text-[#DFA304]
              sm:text-xs
              sm:tracking-[0.08em]
              md:px-3
              md:tracking-[0.1em]
            "
          >
            <Leaf
              aria-hidden="true"
              className="h-3 w-3 shrink-0"
            />

            Desde 2023 — Construindo nossa história
          </span>

          <h1
            id="hero-title"
            className="leading-[1.05] md:leading-[1.03]"
            style={{
              color: "#fff",
              textShadow: "0 2px 12px rgba(255,255,255,.15)",
              fontSize: "clamp(2rem, 4.4vw, 4rem)",
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
            className="mt-3 max-w-[560px] text-white"
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
            }}
          >
            Produzimos laticínios com cuidado em cada etapa e dedicação para
            entregar produtos que fazem parte da história de muitas famílias.
          </p>

          <div className="hero-buttons mt-4 flex w-full items-center gap-3 sm:w-fit sm:gap-5">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex
                h-12
                flex-1
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-[#DFA304]
                px-4
                text-sm
                font-medium
                text-black
                transition-[transform,background-color]
                motion-reduce:transition-none
                motion-safe:hover:-translate-y-0.5
                hover:bg-[#F6C72F]
                sm:h-14
                sm:flex-none
                sm:px-7
                sm:text-base
                ${focusRing}
              `}
            >
              <FaWhatsapp
                aria-hidden="true"
                className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
              />

              <span>Fazer pedido</span>

              <span className="sr-only">
                (abre o WhatsApp em uma nova aba)
              </span>
            </a>

            <a
              href="#produtos"
              className={`
                inline-flex
                h-12
                shrink-0
                items-center
                justify-center
                gap-1
                rounded-md
                px-1
                text-sm
                font-medium
                text-white
                underline
                decoration-yellow-400
                underline-offset-8
                transition-colors
                hover:text-[#F6C72F]
                sm:h-14
                sm:px-4
                sm:text-base
                ${focusRing}
              `}
            >
              <span>Conhecer produtos</span>

              <ChevronDown
                aria-hidden="true"
                className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                strokeWidth={2}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
