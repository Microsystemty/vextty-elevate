import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BriefcaseBusiness, Building2, Layers3, MessageCircle } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { PageShell } from "@/components/site/PageShell";

export const Route=createFileRoute("/")({head:()=>({meta:[{title:"Vextty | Sistemas, Sites e Soluções em Tecnologia"},{name:"description",content:"A Vextty desenvolve sistemas, sites, aplicações e soluções digitais personalizadas para empresas que querem crescer e automatizar seus processos."}]}),component:Home});
const destinations=[[Layers3,"Soluções","Sistemas, sites, aplicações e automações.","/solucoes"],[Building2,"Segmentos","Tecnologia adaptada a diferentes negócios.","/segmentos"],[BriefcaseBusiness,"Cases","Conheça cenários e aplicações na prática.","/cases"],[MessageCircle,"Contato","Conte seu desafio para a nossa equipe.","/contato"]] as const;
function Home(){return <PageShell><Hero/><section className="light-section py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{destinations.map(([Icon,title,text,href])=><a key={href} href={href} className="home-link-card group"><Icon/><div><h2>{title}</h2><p>{text}</p></div><ArrowRight className="arrow"/></a>)}</div></div></section></PageShell>}
