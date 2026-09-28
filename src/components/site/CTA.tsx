import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section id="contato" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/15 via-card to-card p-10 text-center sm:p-16">
        <div
          aria-hidden
          className="animate-glow pointer-events-none absolute left-1/2 top-[-160px] h-[300px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[110px]"
        />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Pronto para <span className="text-gradient">transformar</span> sua ideia em
            resultado?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Conte seu desafio para a VEXTTY. Respondemos rápido com uma proposta
            clara, sem compromisso.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="mailto:contato@vextty.com" className="btn-primary group w-full sm:w-auto">
              Fale com a VEXTTY
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:contato@vextty.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-primary-glow" />
              contato@vextty.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
