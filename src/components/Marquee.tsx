export function Marquee() {
  const items = [
    "Leite pasteurizado",
    "Atacado e varejo",
    "Direto da fábrica",
    "Laticínios no Sertão da Paraíba",
    "Fábrica de queijo mussarela peça",
    "Sem glúten",
    "Fábrica de requeijão em bisnaga",
    "Queijo Paraibano"
  ];

  return (
    <section className="overflow-hidden bg-[#07598C] text-secondary-foreground">
      <div className="flex animate-marquee whitespace-nowrap py-4">
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center px-6 text-lg tracking-[0.03em]"
          >
            <span className="text-[#BF7E04]">✦</span>
            <span>{t}</span>
          </span>
        ))}
      </div>
    </section>
  );
}