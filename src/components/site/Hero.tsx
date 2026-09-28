import { ArrowRight, ChevronDown } from "lucide-react";

const highlights = [
  "Sistemas sob medida",
  "Plataformas SaaS",
  "Sites de alta performance",
  "Automação & integrações",
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44">
      {/* Fundo: grade + glows elétricos */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 75% 65% at 50% 0%, black, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 65% at 50% 0%, black, transparent 72%)",
          }}
        />
        <div className="animate-glow absolute left-1/2 top-[-220px] h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" />
        <div className="animate-float absolute right-[8%] top-[260px] h-[280px] w-[280px] rounded-full bg-primary-glow/15 blur-[120px]" />
        <div className="absolute left-[6%] top-[120px] h-[220px] w-[220px] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <div className="reveal reveal-visible">
          <span className="eyebrow">Sistemas · SaaS · Sites · Soluções digitais</span>
        </div>

        <h1 className="reveal mx-auto mt-6 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl sm:leading-[1.08]">
          Tecnologia que <span className="text-gradient">transforma ideias</span> em
          resultados.
        </h1>

        <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A VEXTTY desenvolve sistemas, plataformas SaaS, sites e soluções digitais
          sob medida para empresas de diversos segmentos — do conceito à entrega.
        </p>

        <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contato" className="btn-primary group w-full sm:w-auto">
            Solicitar uma proposta
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#solucoes" className="btn-ghost w-full sm:w-auto">
            Conhecer soluções
          </a>
        </div>

        <div className="reveal mt-14 flex flex-wrap items-center justify-center gap-3">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-medium text-muted-foreground sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#solucoes"
            aria-label="Rolar para soluções"
            className="animate-float grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
          >
            <ChevronDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
