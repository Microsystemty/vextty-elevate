import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { CTA } from "@/components/site/CTA";
export const Route=createFileRoute("/contato")({head:()=>({meta:[{title:"Contato | Vextty"},{name:"description",content:"Conte seu desafio e fale com a equipe da Vextty sobre sistemas, sites e soluções digitais."}]}),component:Page});
function Page(){return <PageShell><PageHero eyebrow="Fale com a Vextty" title="Vamos transformar sua ideia em" accent="uma solução digital." description="Responda algumas perguntas rápidas para começarmos uma conversa mais objetiva sobre o seu projeto." visual="/hero-contato.png"/><CTA/></PageShell>}
