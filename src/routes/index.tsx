import { createFileRoute } from "@tanstack/react-router";

import hero from "@/assets/hero-cheese.jpg";
import { Certifications } from "@/components/Certifications";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import  Gallery from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { MilkOrigin } from "@/components/MilkOrigin";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { Recipes } from "@/components/Recipes";
import { Story } from "@/components/Story";
import { Testimonials } from "@/components/Testimonials";
import { Timeline } from "@/components/Timeline";
import { Values } from "@/components/Values";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Porto Laticínios — Mussarela e Bisnaga de Requeijão" },
      {
        name: "description",
        content:
          "Fábrica familiar de mussarela e bisnaga de requeijão há mais de 3 anos. Atendemos pizzarias, padarias, restaurantes e mercados em atacado e varejo."
      },
      { property: "og:title", content: "Porto Laticínios" },
      { property: "og:description", content: "Do campo à sua mesa — sabor que a família confia há mais de 3 anos." },
      { property: "og:image", content: hero },
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
      <Products />         
      <Process />          
      <Certifications />   
      <Story />             
      <Values />            
      <Gallery />        
      <Clients />          
      <Testimonials />     
      <Recipes />           
      <Contact />       
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
