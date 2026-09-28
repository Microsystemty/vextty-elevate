import { Cloud, CodeXml, Globe, Rocket, ArrowUpRight } from "lucide-react";

const solutions = [
  {
    icon: CodeXml,
    title: "Sistemas sob medida",
    description:
      "Plataformas internas, ERPs e ferramentas que se adaptam ao seu processo — não o contrário.",
  },
  {
    icon: Cloud,
    title: "Plataformas SaaS",
    description:
      "Do MVP ao produto escalável: arquitetura sólida, multi-tenant e evolução contínua do software.",
  },
  {
    icon: Globe,
    title: "Sites & experiências digitais",
    description:
      "Sites institucionais, landing pages e e-commerce rápidos, bonitos e prontos para converter.",
  },
  {
    icon: Rocket,
    title: "Soluções digitais",
    description:
      "Integrações, automações e dados para digitalizar operações em qualquer segmento.",
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">Soluções</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            O que a <span className="text-gradient">VEXTTY</span> faz por você
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tecnologia de ponta a ponta para negócios de qualquer porte e segmento.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <article
              key={solution.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-primary-glow/10 text-primary-glow">
                <solution.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug">
                {solution.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
              <a
                href="#contato"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary-glow opacity-80 transition-all group-hover:gap-1.5 group-hover:opacity-100"
              >
                Falar sobre isso
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
