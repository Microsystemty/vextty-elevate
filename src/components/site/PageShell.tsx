import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./CTA";
import { useReveal } from "@/hooks/use-reveal";

export function PageShell({children}:{children:ReactNode}){useReveal();return <div className="min-h-screen bg-background text-foreground"><Navbar/><main>{children}</main><Footer/><FloatingWhatsApp/></div>}

export function PageHero({eyebrow,title,accent,description}:{eyebrow:string;title:string;accent:string;description:string}){return <section className="subpage-hero"><div className="hero-grid pointer-events-none absolute inset-0"/><div className="relative mx-auto max-w-7xl px-5 pb-20 pt-40 sm:px-8 sm:pb-24 sm:pt-48 lg:px-10"><span className="eyebrow reveal reveal-visible">{eyebrow}</span><h1 className="reveal mt-6 max-w-4xl font-display text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[.96] tracking-[-.05em]">{title} <span className="text-gradient">{accent}</span></h1><p className="reveal mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{description}</p></div></section>}
