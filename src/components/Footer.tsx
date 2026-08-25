import {
  Instagram,
  Mail,
  MessageCircle,
} from "lucide-react";

import logo from "@/assets/logo2.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 
    bg-[radial-gradient(circle_at_left,#0A69BA_0%,#095EA8_50%,#074A84_100%)]
    text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1fr_1fr]">
          {/* Logo */}
          <div>
            <img
            src={logo}
            alt="Porto Laticínios"
            className="h-40 w-auto object-contain rounded-full"
          />
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
              O Verdadeiro Sabor
              do Queijo na Paraíba

            </p>
          </div>

          {/* Institucional */}
          <div>

            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              Institucional
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-white/75">

              <li>
                <a
                  href="#historia"
                  className="transition hover:text-white"
                >
                  História
                </a>
              </li>

              <li>
                <a
                  href="#processo"
                  className="transition hover:text-white"
                >
                  Processo
                </a>
              </li>

              <li>
                <a
                  href="#certificacoes"
                  className="transition hover:text-white"
                >
                  Certificações
                </a>
              </li>

            </ul>

          </div>

          {/* Produtos */}
          <div>

            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              Produtos
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-white/75">

              <li>
                <a
                  href="#produtos"
                  className="transition hover:text-white"
                >
                  Queijo Mussarela
                </a>
              </li>


              <li>
                <a
                  href="#produtos"
                  className="transition hover:text-white"
                >
                  Mistura de Requeijão e Amido
                </a>
              </li>


              <li>
                <a
                  href="#produtos"
                  className="transition hover:text-white"
                >
                  Requeijão sabor Quatro Queijos
                </a>
              </li>

            </ul>

          </div>

          {/* Redes sociais */}
          <div>
            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              Contato
            </h3>
            <div className="mt-4 flex gap-3">


              {/* WhatsApp */}
              <a
                href="https://wa.me/5583981192980"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#25D366]
                  hover:bg-[#25D366]
                "
              >
                <MessageCircle className="h-5 w-5" />
              </a>


              {/* Instagram */}
              <a
                href="https://www.instagram.com/portolaticinio/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#E4405F]
                  hover:bg-[#E4405F]
                "
              >
                <Instagram className="h-5 w-5" />
              </a>


              {/* Gmail */}
              <a
                href="mailto:portolaticinio@gmail.com"
                aria-label="Email"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#EA4335]
                  hover:bg-[#EA4335]
                "
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
          </div>
        </div>
        {/* Linha inferior */}
        <div
          className="
            mt-6
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-6
            text-center
            text-sm
            text-white/60

            md:flex-row
            md:items-center
            md:justify-between
            md:text-left
          "
        >

          <p>
            © {new Date().getFullYear()} Porto Laticínios.
            Todos os direitos reservados.
          </p>


          <div className="flex flex-col gap-1 md:text-right">

            <p>
              CNPJ 42.882.487/0001-23
            </p>


          </div>

        </div>
      </div>
    </footer>
  );
}