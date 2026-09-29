import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Platform } from "@/components/site/Platform";
import { DigitalExperience } from "@/components/site/DigitalExperience";
export const Route=createFileRoute("/solucoes")({head:()=>({meta:[{title:"Soluções | Vextty"},{name:"description",content:"Sistemas personalizados, sites, aplicações, automações e integrações para empresas."}]}),component:Page});
function Page(){return <PageShell><PageHero eyebrow="Soluções Vextty" title="Tecnologia que trabalha" accent="pelo seu negócio." description="Sistemas, sites e aplicações desenvolvidos para simplificar processos, conectar dados e apoiar o crescimento da sua empresa." visual="/hero-solucoes.png"/><Platform/><DigitalExperience/></PageShell>}
