import { Instagram, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // mesmo ícone usado no restante do site

import logo from "@/assets/logo2.png"; // DICA: exportar em ~320px (2x de 160px) e em WebP
import { WHATSAPP_LINK } from "@/lib/constants";

const institutionalLinks = [
  { href: "#historia", label: "História" },
  { href: "#processo", label: "Processo" },
  { href: "#certificacoes", label: "Certificações" },
];

const productLinks = [
  { href: "#produtos", label: "Queijo Mussarela" },
  { href: "#produtos", label: "Mistura de Requeijão e Amido" },
  { href: "#produtos", label: "Requeijão sabor Quatro Queijos" },
];

const socials = [
  {
    label: "WhatsApp",
    href: WHATSAPP_LINK,
    icon: FaWhatsapp,
    hover: "hover:border-[#25D366] hover:bg-[#25D366] focus-visible:bg-[#25D366]",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/portolaticinio/",
    icon: Instagram,
    hover: "hover:border-[#E4405F] hover:bg-[#E4405F] focus-visible:bg-[#E4405F]",
    external: true,
  },
  {
    label: "E-mail",
    href: "mailto:portolaticinio@gmail.com",
    icon: Mail,
    hover: "hover:border-[#EA4335] hover:bg-[#EA4335] focus-visible:bg-[#EA4335]",
    external: false,
  },
];

const linkClass =
  "rounded-sm transition-colors hover:text-white hover:underline underline-offset-4 " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const headingClass = "text-sm font-semibold uppercase tracking-[0.18em] text-white";

export function Footer() {
  return (
    <footer
      className="
        border-t border-white/10 text-white
        bg-[radial-gradient(circle_at_left,#0A69BA_0%,#095EA8_50%,#074A84_100%)]
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Porto Laticínios"
              width={160}
              height={160}
              loading="lazy"
              decoding="async"
              className="h-40 w-auto rounded-full object-contain"
            />
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/90">
              O Verdadeiro Sabor do Queijo na Paraíba
            </p>
          </div>

          {/* Institucional */}
          <nav aria-labelledby="footer-institucional">
            <h2 id="footer-institucional" className={headingClass}>
              Institucional
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              {institutionalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Produtos */}
          <nav aria-labelledby="footer-produtos">
            <h2 id="footer-produtos" className={headingClass}>
              Produtos
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h2 className={headingClass}>Contato</h2>
            <ul className="mt-4 flex gap-3">
              {socials.map(({ label, href, icon: Icon, hover, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`
                      flex h-11 w-11 items-center justify-center rounded-xl
                      border border-white/20 bg-white/10
                      transition-[transform,background-color,border-color]
                      duration-300 motion-reduce:transition-none
                      motion-safe:hover:-translate-y-1
                      focus-visible:outline focus-visible:outline-2
                      focus-visible:outline-offset-2 focus-visible:outline-white
                      ${hover}
                    `}
                  >
                    <Icon aria-hidden="true" className="h-5 w-5" />
                    <span className="sr-only">
                      {label}
                      {external ? " (abre em uma nova aba)" : ""}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Linha inferior */}
        <div
          className="
            mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 text-center
            text-sm text-white/90
            md:flex-row md:items-center md:justify-between md:text-left
          "
        >
          <p>© {new Date().getFullYear()} Porto Laticínios. Todos os direitos reservados.</p>
          <p>CNPJ 42.882.487/0001-23</p>
        </div>
      </div>
    </footer>
  );
}