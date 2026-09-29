import { ChevronDown, MessageCircle } from "lucide-react";

const questions = [
  [
    "Que tipos de soluções a Vextty desenvolve?",
    "Desenvolvemos sistemas personalizados, sites, portais, aplicações web, automações e integrações pensadas para os processos e objetivos de cada empresa.",
  ],
  [
    "A solução funciona em celular, tablet e computador?",
    "Sim. Todos os projetos são desenvolvidos com experiência responsiva, adaptando conteúdo, navegação e recursos a diferentes tamanhos de tela.",
  ],
  [
    "Quanto tempo leva para desenvolver um projeto?",
    "O prazo depende do escopo e da complexidade. Após a conversa inicial, organizamos as etapas e apresentamos uma estimativa clara de desenvolvimento e implantação.",
  ],
  [
    "A Vextty oferece suporte após a entrega?",
    "Sim. Podemos acompanhar a implantação, realizar melhorias e oferecer suporte contínuo para manter a solução segura, atualizada e preparada para crescer.",
  ],
  [
    "É possível integrar com sistemas que minha empresa já utiliza?",
    "Sim. Avaliamos as APIs e os recursos disponíveis para integrar ferramentas, centralizar informações e reduzir tarefas manuais.",
  ],
  [
    "Como solicito uma proposta?",
    "Entre em contato pelo formulário ou pelo WhatsApp. Vamos entender sua necessidade e indicar o caminho mais adequado, sem compromisso.",
  ],
] as const;

export function FAQ() {
  return (
    <section className="light-section px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="faq-title">
      <div className="mx-auto max-w-5xl">
        <div className="reveal text-center">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 id="faq-title" className="section-title mx-auto mt-5 max-w-3xl text-slate-950">
            Tudo o que você precisa saber <span className="text-gradient">antes de começar.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Respostas rápidas sobre projetos, implantação, integrações e suporte da Vextty.
          </p>
        </div>

        <div className="mt-10 grid gap-3">
          {questions.map(([question, answer]) => (
            <details key={question} className="faq-item reveal group">
              <summary>
                <span>{question}</span>
                <ChevronDown className="h-5 w-5 shrink-0" aria-hidden />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>

        <div className="reveal mt-9 flex flex-col items-center justify-between gap-5 rounded-2xl bg-slate-950 p-6 text-center text-white sm:flex-row sm:text-left">
          <div>
            <h3 className="font-display text-xl font-semibold">Ainda tem alguma dúvida?</h3>
            <p className="mt-1 text-sm text-slate-400">Converse diretamente com a equipe da Vextty.</p>
          </div>
          <a
            href="https://wa.me/5511910668305?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Vextty%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20as%20solu%C3%A7%C3%B5es."
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" /> Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
