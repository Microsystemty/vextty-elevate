export function VexttyStory() {
  return (
    <section className="light-section py-20 sm:py-28" aria-labelledby="vextty-story-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,58,110,.12)] lg:grid-cols-[.82fr_1.18fr]">
          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_25%_20%,#0a73dc_0%,#063368_35%,#020a14_78%)] p-8 sm:p-12 lg:min-h-full">
            <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-cyan-300/15 shadow-[0_0_0_55px_rgba(0,157,255,.035),0_0_0_110px_rgba(0,157,255,.025)]" aria-hidden />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom_right,black,transparent)]" aria-hidden />
            <div className="relative z-10 text-center">
              <img src="/vextty-logo.png" alt="Vextty — Sistemas & Tecnologia" className="mx-auto w-full max-w-[390px] object-contain drop-shadow-[0_0_28px_rgba(0,180,255,.3)]" />
              <div className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[.24em] text-cyan-200">Ideias. Sistemas. Resultados.</p>
            </div>
          </div>

          <div className="p-7 sm:p-12 lg:p-16">
            <span className="eyebrow">Nossa essência</span>
            <h2 id="vextty-story-title" className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-.04em] text-slate-950 sm:text-5xl">
              Tecnologia feita para <span className="text-gradient">negócios reais.</span>
            </h2>
            <div className="mt-7 space-y-5 text-[15px] leading-7 text-slate-600 sm:text-base">
              <p>A Vextty nasceu para transformar ideias e desafios empresariais em soluções digitais inteligentes.</p>
              <p>Desenvolvemos sistemas, sites, aplicações e automações sob medida, sempre considerando a realidade, os processos e os objetivos de cada negócio. Acreditamos que a tecnologia precisa ser simples de usar, segura e capaz de gerar resultados concretos.</p>
              <p>Cada projeto começa com uma conversa. Buscamos entender como a empresa funciona, identificar oportunidades de melhoria e planejar uma solução que realmente faça sentido. A partir disso, unimos estratégia, design e tecnologia para criar experiências modernas, eficientes e preparadas para evoluir.</p>
              <p>Mais do que entregar um sistema, queremos construir parcerias duradouras. Por isso, acompanhamos cada etapa do projeto com transparência, proximidade e atenção aos detalhes — desde o planejamento e desenvolvimento até a implantação e o aprimoramento contínuo.</p>
            </div>
            <p className="mt-8 border-l-2 border-cyan-500 pl-5 font-display text-xl font-semibold leading-8 text-slate-950 sm:text-2xl">
              Na Vextty, cada negócio é único. Sua tecnologia também deve ser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
