import { Heart } from "lucide-react";

import historyImg from "@/assets/history.png";

import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";
import { SectionParagraph } from "./SectionParagraph";

export function Story() {
  return (
    <section id="historia" className="relative py-10 bg-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative mx-auto w-fit">
          <img
            src={historyImg}
            alt="Fundador da fábrica nos anos iniciais"
            loading="lazy"
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

          <div
            className="
    absolute
    right-[-15px]
    top-[300px]
    z-10
    w-[120px]
    rounded-xl
    bg-[#DFA304]
    p-3
    text-center
    text-black
    shadow-lg
    max-[754px]:right-[-70px]
    max-[754px]:top-[220px]
    max-[754px]:w-[150px]
    max-[754px]:p-4
  "
          >
            <p className="text-2xl font-bold leading-none md:text-3xl">
              2022
            </p>

            <p className="mt-2 text-[10px] font-semibold leading-snug opacity-90 md:text-xs">
              O ano em que tudo começou.
            </p>
          </div>
        </div>
        <div className="mr-5 ml-5 mt-5">
          <SectionLabel icon={<Heart className="h-3.5 w-3.5" />}>Nossa história</SectionLabel>

          <SectionHeading width="large">
            Antes de existir uma fábrica, existia um sonho compartilhado.
          </SectionHeading>

          <SectionParagraph width="medium">
            Foi assim que nasceu a nossa história: da união de dois irmãos e um amigo,
            que escolheram caminhar juntos como uma família.
            <br />
            Com coragem, dedicação e o apoio de seus familiares, enfrentaram obstáculos,
            transformaram desafios em conquistas e construíram muito mais do que uma Fábrica de Laticínios:
            deram início a uma trajetória marcada pela confiança, dedicação e compromisso com a qualidade.
          </SectionParagraph>

          <div className="mt-5 space-y-2">
            <p className="font-display text-lg text-foreground sm:text-xl md:text-2xl">
              "Hoje, seguimos levando sabor e confiança para a mesa dos nossos clientes e parceiros."
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              — Fernando, Fabinho e Cláudio, Fundadores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}