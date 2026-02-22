export default function About(): React.JSX.Element {
  return (
    <section id="sobre" className="py-32 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-5xl">
        {/* Section Label */}
        <div className="mb-16">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light mb-2">
            Sobre
          </p>
          <div className="w-12 h-px bg-white/10"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
            Estúdio Criativo
            <br />
            <span className="font-normal">Contemporâneo</span>
          </h2>

          <div className="space-y-6 max-w-3xl">
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
              A Mavinic Digital desenvolve sites estratégicos para negócios modernos que desejam se destacar no ambiente digital.
            </p>

            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
              Fundada por Marcelo, a Mavinic nasceu com o propósito de unir design, estratégia e tecnologia em projetos que fortalecem a identidade e a presença online de cada cliente.
            </p>

            <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed italic mt-12">
              Acreditamos que presença digital não é apenas estética.
              <br />
              <span className="text-white/60">É percepção, posicionamento e resultado.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
