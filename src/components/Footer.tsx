export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-[#1771A8]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white font-display">
            V
          </div>
          <div>
            <p className="font-display text-lg text-white">Porto Laticínios</p>
            <p className="text-xs text-muted-foreground text-white">CNPJ 00.000.000/0001-00 · Reg. MAPA SIF 0000</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-white">© {new Date().getFullYear()} Porto Laticínios.</p>
      </div>
    </footer>
  );
}
