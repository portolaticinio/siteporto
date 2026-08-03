interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  width?: "full" | "large" | "medium" | "small";
}

export function SectionHeading({
  children,
  className = "",
  width = "large",
}: SectionHeadingProps) {
  const widths = {
    full: "max-w-full",
    large: "max-w-6xl",
    medium: "max-w-4xl",
    small: "max-w-2xl",
  };

  return (
    <h2
      className={`
        mt-4 
        text-2xl 
        md:text-4xl 
        text-balance
        ${widths[width]}
        ${className}
      `}
    >
      {children}
    </h2>
  );
}