import { Heart } from "lucide-react";

import history420 from "@/assets_optimized/history-420.webp";
import history840 from "@/assets_optimized/history-840.webp";

import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";
import { SectionParagraph } from "./SectionParagraph";

export function Story() {
  return (
    <section id="historia" className="relative bg-white py-10">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <figure className="relative mx-auto w-fit">
          <img
            src={history840}
            srcSet={`${history420} 420w, ${history840} 840w`}
            sizes="(min-width: 1024px) 420px, (min-width: 768px) 380px, (min-width: 640px) 320px, 280px"
            alt="Fundador da fábrica nos anos iniciais"
            loading="lazy"
            decoding="async"
            width={700}
            height={550}
            className="
              h-auto
              w-full
              max-w-[280px]
              rounded-2xl
              sepia-[0.2]
              shadow-[30px_50px_#0E7FE0]
              sm:max-w-[320px]
              md:max-w-[380px]
              lg:max-w-[420px]
            "
          />

          <figcaption
            className="
              absolute
              -bottom-6
              -right-3
              z-10
              w-[130px]
              rounded-xl
              bg-[#DFA304]
              p-3
              text-center
              text-black
              shadow-lg
              md:-right-4
              md:w-[150px]
              md:p-4
            "
          >
            <span className="block text-2xl font-bold leading-none md:text-3xl">2022</span>
            <span className="mt-2 block text-xs font-semibold leading-snug">
              O ano em que tudo começou.
            </span>
          </figcaption>
        </figure>

        <div>
          <SectionLabel icon={<Heart aria-hidden="true" className="h-3.5 w-3.5" />}>
            Nossa história
          </SectionLabel>

          <SectionHeading width="large">
            Antes de existir uma fábrica, existia um sonho compartilhado.
          </SectionHeading>

          <SectionParagraph width="medium">
            Foi assim que nasceu a nossa história: da união de dois irmãos e um amigo, que
            escolheram caminhar juntos como uma família.
            <br />
            Com coragem, dedicação e o apoio de seus familiares, enfrentaram obstáculos,
            transformaram desafios em conquistas e construíram muito mais do que uma Fábrica de
            Laticínios: deram início a uma trajetória marcada pela confiança, dedicação e
            compromisso com a qualidade.
          </SectionParagraph>

          <figure className="mt-5 space-y-2">
            <blockquote className="font-display text-lg text-foreground sm:text-xl md:text-2xl">
              “Hoje, seguimos levando sabor e confiança para a mesa dos nossos clientes e
              parceiros.”
            </blockquote>
            <figcaption className="text-sm text-muted-foreground">
              — Fernando, Fabinho e Cláudio, Fundadores
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}