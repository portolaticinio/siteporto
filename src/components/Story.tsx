import { Heart } from "lucide-react";

import historyImg from "@/assets/history-vintage.jpg";

import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionTitle";

export function Story() {
  return (
    <section id="historia" className="relative py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src={historyImg}
            alt="Fundador da fábrica nos anos iniciais"
            loading="lazy"
            width={1200}
            height={900}
            className="rounded-2xl shadow-soft sepia-[0.2]"
          />
          <div
            className="
            absolute
            bottom-[-50px] right-4
            w-[160px]
            rounded-2xl
            bg-primary
            p-3
            text-primary-foreground
            shadow-warm

            sm:-bottom-8
            sm:-right-4
            sm:w-[180px]
            sm:p-4

            md:-bottom-10
            md:-right-6
            md:w-[200px]
            md:rounded-2xl
            md:p-5
          "
          >
            <p className="font-display text-2xl leading-none md:text-3xl">
              1998
            </p>

            <p className="mt-2 text-[11px] leading-snug opacity-90 md:text-xs">
              O ano em que tudo começou na cozinha de Seu Antônio.
            </p>
          </div>
        </div>
        <div>
          <SectionLabel icon={<Heart className="h-3.5 w-3.5" />}>Nossa história</SectionLabel>
          <SectionHeading className="mt-4 text-4xl text-balance">
            Tudo começou com uma receita guardada num caderno de capa preta.
          </SectionHeading>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Em 1998, <strong className="text-foreground">Seu Antônio</strong> deixou o sítio do interior com pouco
              mais que uma receita de mussarela ensinada pela mãe e a vontade de transformar o leite das fazendas
              vizinhas em algo que a região reconhecesse.
            </p>
            <p>
              Começamos com duas pessoas, uma panela e uma bicicleta para entregar nas padarias do bairro. Hoje somos
              uma fábrica com SIF, mas a receita continua a mesma — e o caderno continua na gaveta.
            </p>
            <p className="font-display text-2xl italic text-foreground">
              "Queijo bom não tem segredo: tem leite bom, tempo e mão atenta."
            </p>
            <p className="text-sm">— Seu Antônio, fundador</p>
          </div>
        </div>
      </div>
    </section>
  );
}
