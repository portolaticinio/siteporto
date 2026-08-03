"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

import { WHATSAPP_LINK } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["História", "historia"],
    ["Processo", "processo"],
    ["Clientes", "clientes"],
    ["Receitas", "receitas"],
    ["Contato", "contato"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <p className="font-display text-lg font-semibold sm:text-xl">
            Porto Laticínios
          </p>
        </a>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={`#${href}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center gap-2 rounded-2xl bg-[#07598C] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          <FaWhatsapp className="h-5 w-5" />
          Fazer pedido
        </a>

        {/* Ações Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          {!open && (
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#07598C] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              <FaWhatsapp className="h-4 w-4" />
              Fazer pedido
            </a>
          )}

          {/* Botão Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-foreground"
            aria-label="Abrir menu"
          >
            {open ? (
              <HiX className="h-7 w-7" />
            ) : (
              <HiMenu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-screen border-t border-border/60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col bg-background px-4 py-4">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={`#${href}`}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#07598C] px-5 py-3 font-medium text-white"
          >
            <FaWhatsapp className="h-5 w-5" />
            Fazer pedido
          </a>
        </nav>
      </div>
    </header>
  );
}