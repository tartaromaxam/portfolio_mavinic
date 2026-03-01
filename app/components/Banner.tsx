"use client";

import Link from "next/link";

export default function Banner(): React.JSX.Element {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-[220px] pb-[200px] bg-[#0A0A0A]"
    >
      <div className="container mx-auto max-w-[1100px] px-8">
        <div className="text-center mb-8">
          <p className="text-white/50 text-xs tracking-[0.25em] uppercase font-light">
            Estúdio Digital Estratégico
          </p>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-7xl lg:text-[80px] font-normal text-white leading-[1.1] tracking-[-0.02em] mb-8">
            Marcas digitais com
            <br />
            direção, identidade e <span className="font-semibold italic">presença.</span>
          </h1>
          <p className="text-white/85 text-[18px] leading-[1.9] max-w-[620px] mx-auto font-normal">
            Projetos autorais para negócios que valorizam estratégia e posicionamento.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="#contato"
            className="px-8 py-4 bg-white !text-[#0A0A0A] text-sm font-normal hover:bg-white/90 transition-all tracking-wide w-full sm:w-auto text-center"
          >
            Solicitar Proposta
          </Link>
          <Link
            href="#portfolio"
            className="px-8 py-4 border border-white/20 text-white text-sm font-light hover:border-white/40 hover:bg-white/5 transition-all tracking-wide w-full sm:w-auto text-center"
          >
            Explorar Trabalhos
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-2 text-white/30">
            <span className="text-xs tracking-widest uppercase font-light">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
