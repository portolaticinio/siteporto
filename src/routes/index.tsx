import { createFileRoute } from "@tanstack/react-router";

import { Certifications } from "@/components/Certifications";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { Recipes } from "@/components/Recipes";
import { Story } from "@/components/Story";
import { Values } from "@/components/Values";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      // =====================================================
      // SEO PRINCIPAL
      // =====================================================

      {
        // ~62 caracteres — dentro do limite seguro do Google
        title: "Porto Laticínios | Mussarela e Requeijão em São Francisco-PB",
      },

      {
        name: "description",
        // ~150 caracteres — não trunca no snippet
        content:
          "Fábrica de mussarela, bisnaga de requeijão e nata salgada em São Francisco-PB. Atendemos atacado e varejo para pizzarias, padarias e mercados.",
      },

      {
        name: "keywords",
        content:
          "Porto Laticínios, Porto Laticinio, Laticínio Porto, laticínios São Francisco PB, fábrica de laticínios São Francisco PB, laticínio em São Francisco Paraíba, mussarela São Francisco PB, mussarela Paraíba, mussarela atacado, mussarela varejo, queijo mussarela, requeijão São Francisco PB, bisnaga de requeijão, requeijão atacado, nata salgada São Francisco PB, nata salgada Paraíba, queijo Paraíba, fábrica de queijo Paraíba, fornecedor de mussarela, fornecedor de requeijão, fornecedor para pizzaria, fornecedor para restaurantes, fornecedor para padarias, fornecedor para mercados, laticínios no Sertão da Paraíba",
      },

      {
        name: "author",
        content: "Porto Laticínios",
      },

      // =====================================================
      // INDEXAÇÃO
      // =====================================================

      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },

      {
        name: "googlebot",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },

      // =====================================================
      // LOCALIZAÇÃO
      // (mantidas por segurança/compatibilidade, mas o Google
      // hoje usa principalmente o JSON-LD abaixo para local SEO)
      // =====================================================

      {
        name: "geo.region",
        content: "BR-PB",
      },

      {
        name: "geo.placename",
        content: "São Francisco, Paraíba, Brasil",
      },

      // =====================================================
      // OPEN GRAPH
      // =====================================================

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:locale",
        content: "pt_BR",
      },

      {
        property: "og:site_name",
        content: "Porto Laticínios",
      },

      {
        property: "og:title",
        content: "Porto Laticínios | Mussarela, Requeijão e Nata Salgada",
      },

      {
        property: "og:description",
        content:
          "Mussarela, bisnaga de requeijão e nata salgada produzidos em São Francisco-PB. Qualidade e sabor para atacado e varejo.",
      },

      {
        property: "og:url",
        content: "https://www.portolaticinios.com.br/",
      },

      // og:image / og:image:width / og:image:height / og:image:alt removidos
      // por enquanto — não colocar essas tags sem um arquivo de imagem real
      // publicado no domínio. Sem elas, o preview em WhatsApp/redes sociais
      // usa fallback (geralmente sem imagem ou com um genérico), o que é
      // melhor do que apontar para uma imagem 404. Assim que houver uma foto
      // de produto/fábrica em 1200x630px, reative estas 4 tags.

      // =====================================================
      // TWITTER / X
      // =====================================================

      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content: "Porto Laticínios | Mussarela, Requeijão e Nata Salgada",
      },

      {
        name: "twitter:description",
        content:
          "Fábrica de mussarela, bisnaga de requeijão e nata salgada em São Francisco-PB. Atacado e varejo.",
      },

      // twitter:image / twitter:image:alt removidos pelo mesmo motivo do
      // og:image acima — reativar quando houver imagem real publicada.

      // =====================================================
      // TEMA
      // =====================================================

      {
        name: "theme-color",
        content: "#0E6AA4",
      },
    ],

    links: [
      // =====================================================
      // CANONICAL
      // =====================================================

      {
        rel: "canonical",
        href: "https://www.portolaticinios.com.br/",
      },
    ],

    // =======================================================
    // DADOS ESTRUTURADOS — SEO LOCAL
    // Agora com @context e @type, o que faz o Google
    // reconhecer o objeto como Schema.org válido.
    // =======================================================

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FoodEstablishment", // ou "Organization" se o foco for só atacado B2B

          name: "Porto Laticínios",

          alternateName: ["Porto Laticinio", "Laticínio Porto"],

          description:
            "Fábrica de laticínios localizada em São Francisco, Paraíba, especializada na produção de mussarela, bisnaga de requeijão e nata salgada.",

          url: "https://www.portolaticinios.com.br/",

          // "image" removido — reative com uma URL real assim que houver
          // uma foto publicada (ex.: https://www.portolaticinios.com.br/foto-fabrica.jpg)
          telephone: "+55XXXXXXXXXXX", // TODO: preencher com o número real

          priceRange: "$$", // opcional, ajuda no local pack

          address: {
            "@type": "PostalAddress",
            streetAddress: "Rodovia PB-359, Km 18, Sítio Chabocão",
            addressLocality: "São Francisco",
            addressRegion: "PB",
            postalCode: "58818-000",
            addressCountry: "BR",
          },

          // Coordenadas aproximadas do centro do município de São Francisco-PB
          // (-6.60773, -38.0968). O plus code "9VFX+2G" indica que a fábrica
          // fica bem próxima desse ponto, mas para precisão exata: abra o
          // Google Maps, clique com botão direito no local exato da fábrica
          // e copie o par de coordenadas que aparece no topo do menu.
          geo: {
            "@type": "GeoCoordinates",
            latitude: -6.60773,
            longitude: -38.0968,
          },

          sameAs: [
            "https://www.instagram.com/portolaticinio/",
          ],

          areaServed: [
            {
              "@type": "City",
              name: "São Francisco",
              addressRegion: "PB",
              addressCountry: "BR",
            },
            {
              "@type": "State",
              name: "Paraíba",
              addressCountry: "BR",
            },
          ],

          knowsAbout: [
            "Mussarela",
            "Requeijão",
            "Nata salgada",
            "Laticínios",
            "Produtos lácteos",
          ],

          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Mussarela",
              },
            },

            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Bisnaga de Requeijão",
              },
            },

            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Nata Salgada",
              },
            },
          ],
        }),
      },
    ],
  }),

  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Marquee />
      <Story />
      <Products />
      <Process />
      <Certifications />
      <Values />
      <Clients />
      <Recipes />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}