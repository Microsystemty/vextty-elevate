import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Cases } from "@/components/site/Cases";
export const Route=createFileRoute("/cases")({head:()=>({meta:[{title:"Cases | Vextty"},{name:"description",content:"Cenários demonstrativos de sistemas e soluções digitais desenvolvidas para diferentes operações."}]}),component:Page});
function Page(){return <PageShell><PageHero eyebrow="Aplicações na prática" title="Soluções pensadas para" accent="problemas reais." description="Conheça cenários demonstrativos e visualize como uma solução Vextty pode transformar diferentes operações."/><Cases/></PageShell>}
