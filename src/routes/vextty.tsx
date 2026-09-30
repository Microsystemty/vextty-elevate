import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { CustomDevelopment } from "@/components/site/CustomDevelopment";
import { About } from "@/components/site/About";
import { VexttyStory } from "@/components/site/VexttyStory";
import { FAQ } from "@/components/site/FAQ";
export const Route=createFileRoute("/vextty")({head:()=>({meta:[{title:"A Vextty | Sistemas & Tecnologia"},{name:"description",content:"Conheça a forma de trabalhar, os diferenciais e o processo de desenvolvimento da Vextty."}]}),component:Page});
function Page(){return <PageShell><PageHero eyebrow="A Vextty" title="Tecnologia próxima," accent="segura e inteligente." description="Transformamos desafios de negócio em experiências digitais claras, modernas e preparadas para evoluir."/><VexttyStory/><CustomDevelopment/><About/><FAQ/></PageShell>}
