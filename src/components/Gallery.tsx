import { useState } from "react";

import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";
import { SectionParagraph } from "./SectionParagraph";
import { Factory } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const IMAGES: GalleryImage[] = [
  { id: 1, src: "https://picsum.photos/id/34/400/400", alt: "Aleks Dorohovich" },
  { id: 2, src: "https://picsum.photos/id/39/400/400", alt: "Luke Chesser" },
  { id: 3, src: "https://picsum.photos/id/56/400/400", alt: "Sebastian Muller" },
  { id: 4, src: "https://picsum.photos/id/76/400/400", alt: "Alexander Shustov" },
  { id: 5, src: "https://picsum.photos/id/124/400/400", alt: "Anton Sulsky" },
  { id: 6, src: "https://picsum.photos/id/139/400/400", alt: "Steve Richey" },
  { id: 7, src: "https://picsum.photos/id/159/400/400", alt: "Shyamanta Baruah" },
  { id: 8, src: "https://picsum.photos/id/200/400/400", alt: "Elias Carlsson" },
];

// Imagem que fica fixa no quadro grande enquanto nenhuma miniatura foi
// selecionada (e serve de base por trás da imagem que "voa" ao clicar).
const DEFAULT_IMAGE = IMAGES[0];

export default function Gallery() {
  // Replaces the :target trick from the CSS-only version — the "hash"
  // is now just React state, so no URL fragment / navigation happens.
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @layer base, demo;

        @layer demo {
          .gallery {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            inline-size: min(100% - 2rem, 56.25rem);
            margin-inline: auto;
            position: relative;
          }

          .gallery--thumbs {
            display: flex;
            gap: .5rem;
            overflow-x: auto;
            padding-block-end: .375rem;
            scroll-padding-inline: .5rem;
            border-radius: 1rem;
            scroll-snap-type: x proximity;
          }

          /* TABLET+ (30em): back to the original grid, thumbnails land
             directly in the grid cells (wrapper becomes invisible). */
@media (min-width: 30em) {
  .gallery {
    display: grid;
    gap: .5rem;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense; /* garante preenchimento das laterais se houver espaço */
  }

  .gallery--thumbs {
    display: contents;
  }
}

          @media (min-width: 48em) {
            .gallery {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          @media (max-width: 29.99em) {
            .gallery-wrapper {
              max-inline-size: 100vw;
              overflow-x: hidden;
              padding-inline: 1rem;
            }

            .gallery {
              overflow: hidden;
            }

            .gallery--fly {
              max-inline-size: 100%;
            }

            .gallery--title {
              max-inline-size: min(70vw, 18rem);
              overflow-wrap: break-word;
            }
          }

.gallery--main-img {
  anchor-name: --main-img;
  aspect-ratio: 4 / 3;
  border: .125rem double oklch(.65 .2 220 / .3);
  border-radius: 1rem;
  overflow: hidden;
  display: grid;
  font-size: 2rem;
  padding: 1rem;
  place-content: center;
  position: relative;
  isolation: isolate;
}

          @media (min-width: 30em) {
            .gallery--main-img {
              aspect-ratio: 1;
              grid-column: 1 / span 2;
              grid-row: 1 / span 2;
            }
          }

          .gallery--main-fixed {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
          }

       .gallery--main-img::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;

  background: linear-gradient(
    to top,
    oklch(0 0 0 / .8),
    transparent 45%
  );

  pointer-events: none;
  z-index: 11;
}

          .gallery--main-img h1 {
            font-size: clamp(1rem, 2.5vw + .45rem, 1.2rem);
            margin: 0;
            text-align: center;
          }

          .gallery--main-img p {
            color: oklch(.7 .05 240);
            font-size: .9rem;
            margin: 0;
            text-align: center;
          }

          /* was ".gallery--item:target ~ &" — now toggled via data-hide-hud */
          .gallery--main-img[data-hide-hud="true"] h1,
          .gallery--main-img[data-hide-hud="true"] p {
            opacity: 0;
            transition: opacity .4s ease;
          }

.gallery--item {
  aspect-ratio: 1;
  border: .0625rem dotted oklch(.65 .2 220 / .5);
  border-radius: 1rem;
  overflow: hidden;

  cursor: pointer;
  display: block;
  flex: 0 0 5.5rem;
  position: relative;
  scroll-snap-align: start;
  text-decoration: none;
  background: none;
  padding: 0;
}

          @media (min-width: 30em) {
            .gallery--item {
              flex: initial;
            }
          }

          .gallery--item:focus-visible {
            outline: .125rem solid oklch(.7 .18 140);
            outline-offset: .125rem;
          }

.gallery--thumb {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: inherit;
  transition: opacity .6s ease;
}

          .gallery--item:hover .gallery--thumb {
            opacity: .8;
          }

          /* was ".gallery--item:target &" — now toggled via data-active */
          .gallery--item[data-active="true"] .gallery--thumb {
            opacity: .4;
          }

          .gallery--item[data-active="true"] {
            border-color: oklch(.7 .18 140 / .8);
          }

.gallery--fly {
  block-size: anchor-size(height);
  inline-size: anchor-size(width);

  inset-block-start: anchor(top);
  inset-inline-start: anchor(left);

  position: absolute;

  object-fit: cover;

  border-radius: 1rem;

  overflow: hidden;

  pointer-events: none;

  transition:
    block-size .8s cubic-bezier(.25,1,.3,1),
    inline-size .8s cubic-bezier(.25,1,.3,1),
    inset-block-start .8s cubic-bezier(.25,1,.3,1),
    inset-inline-start .8s cubic-bezier(.25,1,.3,1),
    z-index .8s step-end;

  z-index: 2;
}

          .gallery--title {
            color: oklch(.95 .01 30);
            font-size: 1.2rem;
            font-weight: 300;
            inset-block-end: calc(anchor(bottom) + 1.5rem);
            inset-inline-start: calc(anchor(left) + 1.5rem);
            margin: 0;
            opacity: 0;
            pointer-events: none;
            position: absolute;
            position-anchor: --main-img;
            transform: translateY(1.5rem);
            transition: opacity .4s ease, transform .4s ease;
            z-index: 12;
          }

          .gallery--title[data-active="true"] {
            opacity: 1;
            transform: translateY(0);
          }

          ${IMAGES.map(
        (img) => `
          #item-${img.id} { anchor-name: --item-${img.id}; }
          #fly-${img.id} { position-anchor: --item-${img.id}; }
          #fly-${img.id}[data-active="true"] {
            position-anchor: --main-img;
            z-index: 10;
          }
          `
      ).join("")}
        }

        @layer base {

          .gallery-wrapper {
            background-color: var(--clr-bg);
            color: var(--clr-txt);
            font-size: 1rem;
            line-height: 1.5;
            padding: 2rem;
            place-items: center;
          }

          @supports not (position-anchor: --test) {
            .gallery-wrapper::before {
              background-color: oklch(.2 .1 10);
              border: .0625rem solid oklch(.4 .2 20);
              color: oklch(.9 .05 20);
              content: "SYSTEM ERROR: Web browser does not support CSS Anchor Positioning API";
              font-size: .8rem;
              inset-block-start: 2rem;
              inset-inline-start: 50%;
              padding: 1rem;
              position: fixed;
              transform: translateX(-50%);
              z-index: 9999;
            }
          }

          .gallery-wrapper img {
            display: block;
            max-inline-size: 100%;
          }
        }
      `}</style>

      <section className="relative bg-[#F7F3E8]"
        style={{
          backgroundImage: "url('/src/assets/back.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center -890px',
        }}
      >

        <div className="absolute inset-0 bg-[#F7F3E8]/85 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <SectionLabel icon={<Factory className="h-3.5 w-3.5" />}>Galeria da fábrica</SectionLabel>
          <SectionHeading width="full">
            Pessoas que acordam cedo e fazem cada etapa acontecer.
          </SectionHeading>
          <SectionParagraph width="large">
            Somos uma equipe de 10 pessoas que trabalha diariamente com dedicação em cada etapa da produção,
            cuidando de cada detalhe para entregar produtos com qualidade e sabor.
          </SectionParagraph>
        </div>
        <div className="gallery-wrapper">
          <div className="gallery">
            <div className="gallery--main-img" data-hide-hud={activeId !== null}>
              <img
                src={DEFAULT_IMAGE.src}
                alt={DEFAULT_IMAGE.alt}
                className="gallery--main-fixed"
              />
            </div>
            <div className="gallery--thumbs">
              {IMAGES.map((img) => (
                <button
                  key={img.id}
                  id={`item-${img.id}`}
                  className="gallery--item"
                  data-active={activeId === img.id}
                  onClick={() => setActiveId(img.id)}
                  aria-label={`Show ${img.alt}`}
                >
                  <img src={img.src} alt={img.alt} className="gallery--thumb" />
                </button>
              ))}
            </div>

            {/* Fly-away viewport clones (escapes parent overflow bounds) */}
            {IMAGES.map((img) => (
              <img
                key={img.id}
                id={`fly-${img.id}`}
                src={img.src}
                alt=""
                className="gallery--fly"
                data-active={activeId === img.id}
              />
            ))}

            {/* Captions */}
            {IMAGES.map((img) => (
              <h2
                key={img.id}
                id={`title-${img.id}`}
                className="gallery--title"
                data-active={activeId === img.id}
              >
                {img.alt}
              </h2>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}