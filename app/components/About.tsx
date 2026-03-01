export default function About(): React.JSX.Element {
  return (
    <section id="sobre" className="py-[140px] lg:py-[160px] bg-[#0A0A0A]">
      <div className="container mx-auto max-w-[1100px] px-8">
        {/* Section Label */}
        <div className="mb-16">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light mb-2">
            Sobre
          </p>
          <div className="w-12 h-px bg-white/10"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          <h2 className="text-3xl md:text-[40px] font-medium text-white leading-[1.3] tracking-[-0.02em] mb-8">
            Estúdio autoral de
            <br />
            <span className="font-semibold italic">estratégia digital</span>
          </h2>

          <div className="space-y-5 max-w-[600px]">
            <p className="text-white/70 text-[17px] font-light leading-[1.9]">
              Estratégia, identidade e execução com precisão.
            </p>

            <p className="text-white/90 text-[17px] font-light leading-[1.9] mt-12">
              Presença digital não é apenas <span className="italic">visual.</span>
              <br />
              <span className="text-white/40">É posicionamento, percepção e autoridade.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
