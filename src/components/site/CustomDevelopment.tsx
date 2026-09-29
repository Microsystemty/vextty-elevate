import {
  ArrowRight,
  Blocks,
  Compass,
  Lightbulb,
  Rocket,
  Sparkles,
} from "lucide-react";

const steps = [
  ["01", "Entendemos", "Mapeamos o negócio, os desafios e as oportunidades.", Compass],
  ["02", "Planejamos", "Desenhamos funcionalidades, arquitetura e experiência.", Lightbulb],
  ["03", "Desenvolvemos", "Transformamos estratégia em tecnologia sob medida.", Blocks],
  ["04", "Implantamos", "Colocamos a solução em operação com segurança.", Rocket],
  ["05", "Evoluímos", "Acompanhamos resultados e aprimoramos continuamente.", Sparkles],
] as const;

export function CustomDevelopment() {
  return (
    <section id="vextty" className="custom-journey">
      <div className="custom-journey-glow" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="custom-journey-hero">
          <div className="relative z-10 max-w-3xl reveal">
            <span className="custom-kicker"><Sparkles className="h-4 w-4" /> Tecnologia feita para o seu negócio</span>
            <h2 className="mt-7 font-display text-4xl font-bold leading-[.98] tracking-[-.045em] text-white sm:text-6xl lg:text-7xl">
              Seu negócio é único.
              <span className="custom-title-accent"> Seu sistema também pode ser.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Quando uma solução pronta limita sua empresa, a Vextty constrói uma plataforma sob medida — do primeiro diagnóstico à evolução contínua.
            </p>
            <a href="/contato" className="custom-journey-link mt-8">
              Tirar uma ideia do papel <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="custom-vex-stage reveal" aria-label="Vex apresenta o processo de desenvolvimento da Vextty">
            <div className="custom-vex-orbit" aria-hidden />
            <div className="custom-vex-message">
              <span>Vex explica</span>
              <strong>Eu acompanho sua ideia em cada etapa.</strong>
            </div>
            <img src="/vex-mascot.png" alt="Vex, mascote da Vextty" className="custom-vex-image" />
          </div>
        </div>

        <div className="custom-process-banner reveal">
          <div>
            <span>Nosso método</span>
            <strong>Uma jornada clara, sem complicação.</strong>
          </div>
          <p>Estratégia, design e tecnologia conectados para entregar valor em todas as fases.</p>
        </div>

        <div className="custom-process-grid">
          {steps.map(([number, title, description, Icon], index) => (
            <article
              key={number}
              className="custom-process-card reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="custom-process-card-top">
                <span>{number}</span>
                <Icon className="h-5 w-5" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="custom-process-progress" aria-hidden><i /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
