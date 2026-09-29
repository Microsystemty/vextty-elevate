import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Solutions } from "@/components/site/Solutions";
export const Route=createFileRoute("/segmentos")({head:()=>({meta:[{title:"Segmentos | Vextty"},{name:"description",content:"Soluções digitais para automotivo, imobiliário, comércio, restaurantes, serviços, educação e saúde."}]}),component:Page});
function Page(){return <PageShell><PageHero eyebrow="Tecnologia multissetorial" title="Uma base tecnológica." accent="Infinitas possibilidades." description="Entendemos a operação de cada segmento para construir ferramentas adequadas à sua realidade." visual="/hero-segmentos.png"/><Solutions/></PageShell>}
