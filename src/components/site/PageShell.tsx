import type { ReactNode } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./CTA";
import { useReveal } from "@/hooks/use-reveal";

export function PageShell({children}:{children:ReactNode}){useReveal();return <div className="min-h-screen bg-background text-foreground"><Navbar/><main>{children}</main><Footer/><FloatingWhatsApp/></div>}

export function PageHero({eyebrow,title,accent,description,visual="/professional-computer.png"}:{eyebrow:string;title:string;accent:string;description:string;visual?:string}) {
  const isPortraitVisual = visual !== "/professional-computer.png";

  return (
    <section className="subpage-hero subpage-hero-premium">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="subpage-hero-orbit" aria-hidden />
      <div className="subpage-hero-shell mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="subpage-hero-copy">
          <span className="subpage-kicker reveal reveal-visible"><Sparkles className="h-4 w-4" />{eyebrow}</span>
          <h1 className="reveal mt-6 font-display text-[clamp(2.9rem,6vw,5.25rem)] font-bold leading-[.96] tracking-[-.05em]">
            {title} <span className="text-gradient">{accent}</span>
          </h1>
          <p className="reveal mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
          <div className="subpage-hero-actions reveal">
            <a href="/contato">Conversar sobre um projeto <ArrowRight className="h-4 w-4" /></a>
            <div><i /> Estratégia <i /> Design <i /> Tecnologia</div>
          </div>
        </div>

        <div className="subpage-human-stage reveal" aria-label="Profissional utilizando tecnologia Vextty">
          <div className="subpage-screen-card subpage-screen-card-a"><span>Processos</span><strong>+ eficiência</strong></div>
          <div className="subpage-screen-card subpage-screen-card-b"><span>Soluções</span><strong>sob medida</strong></div>
          <div className="subpage-human-halo" aria-hidden />
          <img src={visual} alt="Profissional usando um computador" loading="eager" decoding="async" className={`subpage-human-image${isPortraitVisual ? " subpage-human-image--portrait" : ""}`} />
        </div>
      </div>
      <div className="subpage-hero-bottom" aria-hidden><span /><span /><span /></div>
    </section>
  );
}
