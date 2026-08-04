import { Heart } from "lucide-react";

import historyImg from "@/assets/history.png";

import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";

export function Story() {
  return (
    <section id="historia" className="relative py-10 bg-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative">
        <img
  src={historyImg}
  alt="Fundador da fábrica nos anos iniciais"
  loading="lazy"
  width={700}
  height={550}
  className="
    mx-auto
    h-auto
    w-full
    max-w-[280px]
    rounded-2xl
    sepia-[0.2]
    shadow-[0_30px_70px_rgba(0,0,0,0.35)]

    sm:max-w-[320px]
    md:max-w-[380px]
    lg:max-w-[420px]
  "
/>
          <div
            className="
    absolute
    bottom-[-30px] right-3
    w-[120px]
    rounded-xl
    bg-[#07598C]
    p-2
    text-white
    shadow-warm

    sm:-bottom-6
    sm:-right-3
    sm:w-[140px]
    sm:p-3
    
    md:-bottom-8
    md:-right-4
    md:w-[160px]
    md:rounded-xl
    md:p-4
  "
          >
            <p className="font-display text-2xl leading-none md:text-3xl">
              2022
            </p>

            <p className="mt-2 text-[11px] leading-snug opacity-90 md:text-xs">
              O ano em que tudo começou.
            </p>
          </div>
        </div>
        <div>
          <SectionLabel icon={<Heart className="h-3.5 w-3.5" />}>Nossa história</SectionLabel>
          <SectionHeading className="mt-4 text-4xl text-balance">
            Antes de existir uma fábrica, existia um sonho compartilhado.
          </SectionHeading>
          <div className="mt-4 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Foi assim que nasceu a nossa história: da união de dois irmãos e um amigo,
              que escolheram caminhar juntos como uma família.
              <br></br>
              Com coragem, dedicação e o apoio de seus familiares, enfrentaram obstáculos,
              transformaram desafios em conquistas e construíram muito mais do que uma Fábrica de Laticínios:
              deram início a uma trajetória marcada pela confiança, dedicação e compromisso com a qualidade.
            </p>
            <p className="font-display text-2xl text-foreground">
              "Hoje, seguimos levando sabor e confiança para a mesa dos nossos clientes e parceiros."
            </p>
            <p className="text-sm">— Fernando, Fabinho e Cláudio, Fundadores</p>
          </div>
        </div>
      </div>
    </section>
  );
}
