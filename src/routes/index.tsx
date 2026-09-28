import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Solutions } from "@/components/site/Solutions";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VEXTTY — Sistemas & Tecnologia" },
      {
        name: "description",
        content:
          "A VEXTTY desenvolve sistemas, plataformas SaaS, sites e soluções digitais sob medida para empresas de diversos segmentos.",
      },
      { property: "og:title", content: "VEXTTY — Sistemas & Tecnologia" },
      {
        property: "og:description",
        content: "Tecnologia que transforma ideias em resultados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
