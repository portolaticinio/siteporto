import { Clock } from "lucide-react";

import { SectionLabel } from "./SectionLabel";

export function Timeline() {
  const events = [
    ["1998", "Fundação", "2 funcionários, produção de 200kg/semana."],
    ["2005", "Primeiro supermercado", "Entrada nos grandes mercados da região."],
    ["2012", "Selo SIF", "Inspeção federal e expansão para outros estados."],
    ["2015", "Bisnaga de requeijão", "Lançamento da nossa segunda linha de produtos."],
    ["2020", "Nova planta", "Triplicamos a capacidade com tecnologia limpa."],
    ["Hoje", "300+ clientes", "Atendemos pizzarias, padarias e mercados em todo o estado."],
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel icon={<Clock className="h-3.5 w-3.5" />}>Linha do tempo</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-4xl md:text-5xl text-balance">
          Mais de duas décadas crescendo com cuidado.
        </h2>
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border md:block" />
          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-6">
            {events.map(([year, title, desc]) => (
              <div key={year} className="relative">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary text-primary-foreground text-lg shadow-warm">
                  {year}
                </div>
                <h3 className="mt-5 text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
