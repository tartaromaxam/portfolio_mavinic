import Link from "next/link";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  { number: "01", title: "Diagnóstico estratégico", description: "Imersão no negócio e objetivos." },
  { number: "02", title: "Estrutura visual", description: "Design de interface e experiência." },
  { number: "03", title: "Desenvolvimento", description: "Engenharia de software e performance." },
  { number: "04", title: "Refinamento", description: "Refinamento e controle de qualidade." },
  { number: "05", title: "Publicação", description: "Lançamento e suporte estratégico." },
];

export default function Process(): React.JSX.Element {
  return (
    <section id="processo" className="py-[140px] lg:py-[160px] bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto max-w-[1100px] px-8">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light mb-2">
            Processo
          </p>
          <div className="w-12 h-px bg-white/10 mb-8"></div>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 leading-[1.2] tracking-[-0.02em]">
            Método claro.{" "}
            <span className="font-semibold">Execução precisa.</span>
          </h2>
          <p className="text-white/85 text-lg font-normal max-w-xl leading-[1.9]">
            Cada etapa é conduzida com organização, clareza e foco em resultado.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Step Number */}
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-light text-white/10 group-hover:text-white/30 transition-colors duration-300">
                  {step.number}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="text-white text-sm font-normal leading-snug mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-white/40 text-xs font-light leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-white/10 -translate-x-4"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-white/5 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-white/60 text-base font-light max-w-md">
            Pronto para dar o próximo passo? Vamos conversar sobre o seu projeto.
          </p>
          <Link
            href="#contato"
            className="px-8 py-4 bg-white text-black text-sm font-normal hover:bg-white/90 transition-all tracking-wide whitespace-nowrap"
          >
            Solicitar Proposta
          </Link>
        </div>
      </div>
    </section>
  );
}
