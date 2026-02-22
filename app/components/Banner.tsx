"use client";

import Link from "next/link";

export default function Banner(): React.JSX.Element {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 px-6 bg-[#0A0A0A]"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Subtitle */}
        <div className="text-center mb-8">
          <p className="text-white/50 text-xs tracking-[0.25em] uppercase font-light">
            Contemporary Creative Studio
          </p>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-6">
            Construímos experiências
            <br />
            digitais com{" "}
            <span className="font-normal italic">identidade</span>
            <br />e <span className="font-normal">precisão.</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Sites modernos, minimalistas e estrategicamente projetados para marcas que valorizam presença.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="#contato"
            className="px-8 py-4 bg-white text-black text-sm font-normal hover:bg-white/90 transition-all tracking-wide w-full sm:w-auto text-center"
          >
            Iniciar Projeto
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
