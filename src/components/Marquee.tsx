const items = [
  "Leite pasteurizado",
  "Atacado e varejo",
  "Direto da fábrica",
  "Laticínios no Sertão da Paraíba",
  "Fábrica de queijo mussarela peça",
  "Sem glúten",
  "Fábrica de requeijão em bisnaga",
  "Queijo Paraibano",
];

const COPIES = [0, 1, 2];

export function Marquee() {
  return (
    <section
      aria-label="Destaques da Porto Laticínios"
      className="overflow-hidden bg-[#0A69BA] text-white"
    >
      <div
        className="
          flex animate-marquee whitespace-nowrap py-4
          hover:[animation-play-state:paused]
          motion-reduce:animate-none motion-reduce:justify-center motion-reduce:whitespace-normal
        "
      >
        {COPIES.map((copy) => (
          <ul
            key={copy}
            role="list"
            aria-hidden={copy > 0 ? true : undefined}
            className={`flex shrink-0 motion-reduce:w-full motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center ${
              copy > 0 ? "motion-reduce:hidden" : ""
            }`}
          >
            {items.map((text) => (
              <li
                key={text}
                className="inline-flex items-center px-6 text-lg tracking-[0.03em] motion-reduce:py-1"
              >
                <span aria-hidden="true" className="mr-2 text-[#F6C72F]">
                  ✦
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}