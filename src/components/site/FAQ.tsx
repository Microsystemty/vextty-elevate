import { MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  ["O que a Vextty desenvolve?", "Desenvolvemos sistemas, sites, aplicações, automações e integrações sob medida para apoiar processos, melhorar experiências e ajudar empresas a crescer."],
  ["A Vextty atende empresas de qualquer segmento?", "Sim. Conhecemos a operação de cada negócio antes de propor uma solução. Assim, a tecnologia é planejada de acordo com seus processos, desafios e objetivos."],
  ["Como funciona o início de um projeto?", "Tudo começa com uma conversa para entender sua necessidade. Depois organizamos as prioridades, definimos o escopo e apresentamos o caminho mais adequado para a sua solução."],
  ["É possível criar um sistema totalmente personalizado?", "Sim. Quando uma ferramenta pronta não atende sua realidade, construímos uma solução sob medida, com as funcionalidades que realmente fazem sentido para sua empresa."],
  ["A Vextty acompanha o projeto depois da entrega?", "Sim. A implantação é apenas uma etapa. Podemos acompanhar a evolução da solução, realizar melhorias e apoiar a empresa conforme novas necessidades surgirem."],
  ["Como posso solicitar um orçamento?", "Você pode falar conosco pelo formulário de contato ou pelo WhatsApp. Conte brevemente seu desafio e prepararemos uma conversa mais direcionada."],
];

export function FAQ() {
  return (
    <section className="light-section py-20 sm:py-28" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-20 lg:px-10">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 id="faq-title" className="section-title mt-5 text-slate-950">Tudo o que você precisa saber sobre a <span className="text-gradient">Vextty.</span></h2>
          <p className="mt-6 max-w-md leading-7 text-slate-600">Ainda ficou com alguma dúvida? Nossa equipe está pronta para entender o seu momento e orientar o próximo passo.</p>
          <a href="/contato" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-cyan-600"><MessageCircle className="h-4 w-4" /> Falar com a Vextty</a>
        </div>
        <div className="reveal rounded-[1.5rem] border border-slate-200 bg-white px-6 shadow-[0_20px_55px_rgba(15,58,110,.08)] sm:px-8">
          <Accordion type="single" collapsible className="w-full">
            {questions.map(([question, answer], index) => (
              <AccordionItem key={question} value={`question-${index}`} className="border-slate-200">
                <AccordionTrigger className="py-6 text-left font-display text-base font-semibold text-slate-900 hover:no-underline sm:text-lg">{question}</AccordionTrigger>
                <AccordionContent className="pb-6 pr-8 text-sm leading-7 text-slate-600 sm:text-[15px]">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
