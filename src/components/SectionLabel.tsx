export function SectionLabel({
  children,
  icon,
  variant,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "dark";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-2xl font-semibold px-4 py-1.5 text-xs uppercase tracking-[0.2em] shadow-sm ${
        variant === "dark"
          ? "border border-zinc-300 bg-white text-zinc-900"
          : "border border-border bg-muted text-muted-foreground"
      }`}
    >
      {icon} {children}
    </span>
  );
}