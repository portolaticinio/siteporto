import { Leaf } from "lucide-react";

import farmImg from "@/assets/dairy-farm.jpg";

import { SectionLabel } from "./SectionLabel";

export function MilkOrigin() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10">
        <img src={farmImg} alt="" className="h-full w-full object-cover" loading="lazy" width={1600} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel icon={<Leaf className="h-3.5 w-3.5" />}>De onde vem o leite</SectionLabel>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Leite de fazendas a menos de 50 km daqui.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Trabalhamos com 14 produtores rurais parceiros da região, criação semi-extensiva, ordenha mecânica e
            tanque resfriador em todas as propriedades. O leite chega todos os dias antes das 7h da manhã, sempre da
            ordenha do dia anterior.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {["14 produtores parceiros", "Raio de 50 km", "Coleta diária", "Análise na chegada"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-card/80 px-4 py-2 text-sm backdrop-blur">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
