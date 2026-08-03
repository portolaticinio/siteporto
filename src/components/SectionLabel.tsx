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
          ? "bg-[#DFA304] text-black"
          : "bg-[#DFA304] text-black"
      }`}
    >
      {icon} {children}
    </span>
  );
}