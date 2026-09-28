import { ArrowRight, BarChart3, Check, ChevronDown, Headphones, RefreshCw, Server, ShieldCheck } from "lucide-react";

const highlights = [
  [Server, "Sistemas personalizados"],
  [RefreshCw, "Implantação rápida"],
  [Headphones, "Suporte especializado"],
  [ShieldCheck, "Segurança e confiabilidade"],
] as const;

export function Hero() {
  return (
    <section id="inicio" className="hero relative flex min-h-[780px] items-center overflow-hidden pb-12 pt-28">
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />
      <div aria-hidden className="hero-rays pointer-events-none absolute inset-0" />
      <div aria-hidden className="orb orb-one" />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="hero-stage grid min-h-[585px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#030d1b]/70 shadow-2xl shadow-black/60 lg:grid-cols-[1.06fr_.94fr]">
          <div className="relative z-20 flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-14">
            <p className="reveal reveal-visible text-[11px] font-semibold uppercase tracking-[.24em] text-primary-glow">Tecnologia para o seu crescimento</p>
            <h1 className="reveal mt-4 max-w-[660px] font-display text-[clamp(3rem,4.2vw,3.8rem)] font-bold leading-[.96] tracking-[-.05em]">
              Soluções completas para <span className="text-gradient">diferentes segmentos.</span>
            </h1>
            <p className="reveal mt-6 max-w-xl text-base leading-7 text-slate-300">
              Desenvolvemos sistemas, sites e aplicações personalizadas para empresas que querem evoluir, simplificar processos e alcançar melhores resultados.
            </p>
            <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/solucoes" className="btn-primary group">Conheça nossas soluções <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              <a href="/contato" className="btn-ghost">Falar com um especialista</a>
            </div>
            <div className="reveal mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map(([Icon, item]) => <div key={item} className="flex items-center gap-2.5 text-[12px] leading-4 text-slate-300"><Icon className="h-5 w-5 shrink-0 text-primary-glow" />{item}</div>)}
            </div>
          </div>

          <div className="hero-visual reveal relative min-h-[500px] overflow-hidden lg:min-h-0" style={{ transitionDelay: "120ms" }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_40%,rgba(0,139,255,.32),transparent_44%)]" />
            <div className="hero-v absolute left-[12%] top-[4%] font-display text-[300px] font-black leading-none tracking-[-.16em] text-white/[.035]">V</div>
            <div className="absolute inset-x-0 bottom-[-7%] z-20 flex justify-center">
              <img src="/vex-mascot.png" alt="Vex, mascote robô da Vextty" className="vex-hero h-auto max-h-[560px] w-auto max-w-[100%] object-contain" />
            </div>
            <div className="glass-note absolute right-[6%] top-[18%] z-30 w-44 rounded-2xl p-4 sm:w-48">
              <p className="text-base font-semibold text-white">Ideias</p><p className="mt-1 text-base font-semibold text-white">Sistemas</p><p className="mt-1 text-base font-semibold text-primary-glow">Resultados</p>
              <BarChart3 className="absolute right-3 top-4 h-6 w-6 text-primary-glow" />
            </div>
            <div className="vex-badge absolute bottom-[13%] left-[5%] z-30 rounded-2xl border border-white/10 bg-[#061429]/80 p-3 backdrop-blur-xl">
              <p className="text-[10px] text-slate-400">Olá! Eu sou o</p><p className="font-display text-lg font-bold text-white">Vex <span className="text-primary-glow">●</span></p>
            </div>
          </div>
        </div>
      </div>
      <a href="/solucoes" aria-label="Conhecer soluções" className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2 text-slate-500 transition-colors hover:text-white"><ChevronDown className="h-6 w-6 animate-bounce" /></a>
    </section>
  );
}
