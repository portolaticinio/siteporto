interface SectionParagraphProps {
  children: React.ReactNode;
  className?: string;
  width?: "full" | "large" | "medium" | "small";
}

export function SectionParagraph({
  children,
  className = "",
  width = "large",
}: SectionParagraphProps) {
  const widths = {
    full: "max-w-full",
    large: "max-w-5xl",
    medium: "max-w-3xl",
    small: "max-w-2xl",
  };

  return (
    <p
      className={`
        mt-4
        text-base
        md:text-lg
        leading-relaxed
        text-black
        text-balance
        ${widths[width]}
        ${className}
      `}
    >
      {children}
    </p>
  );
}