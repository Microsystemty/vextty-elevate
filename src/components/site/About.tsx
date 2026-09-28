import { CheckCircle2 } from "lucide-react";

const differentials = [
  "Time sênior e multidisciplinar",
  "Entrega ágil com qualidade",
  "Suporte próximo e contínuo",
  "Foco em resultado e retorno",
];

const stats = [
  { value: "80+", label: "Projetos entregues" },
  { value: "12+", label: "Segmentos atendidos" },
  { value: "99,9%", label: "Disponibilidade" },
  { value: "100%", label: "Foco no cliente" },
];

export function About() {
  return (
    <section id="empresa" className="relative py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-1/3 h-[320px] w-[320px] rounded-full bg-primary/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div className="reveal">
          <span className="eyebrow">A VEXTTY</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Tecnologia com <span className="text-gradient">propósito de negócio</span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Somos uma empresa de sistemas e tecnologia dedicada a transformar desafios
            reais em soluções digitais que funcionam. Unimos engenharia de software,
            design e estratégia para entregar produtos que geram resultado desde o
            primeiro dia.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Atendemos diversos segmentos — do comércio à indústria, do serviço ao
            digital — sempre com o mesmo compromisso: qualidade, clareza e parceria
            de longo prazo.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {differentials.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-glow" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: "120ms" }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card/60 p-6 text-center transition-colors duration-300 hover:border-primary/40"
            >
              <p className="text-gradient font-display text-3xl font-bold sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
