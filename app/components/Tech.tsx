import Link from "next/link";
import { Layers, Zap, Search, Target, ShieldCheck } from "lucide-react";

const techs = [
    { label: "Arquitetura", description: "Sólida e escalável.", icon: Layers },
    { label: "Performance", description: "Velocidade máxima.", icon: Zap },
    { label: "SEO Técnico", description: "Precisão estratégica.", icon: Search },
    { label: "Conversão", description: "Design orientado.", icon: Target },
    { label: "Segurança", description: "Integridade total.", icon: ShieldCheck },
];

export default function Tech(): React.JSX.Element {
    return (
        <section id="tecnologia" className="py-[140px] lg:py-[160px] bg-[#0A0A0A] border-t border-white/5">
            <div className="container mx-auto max-w-[1100px] px-8">
                {/* Section Header */}
                <div className="mb-20">
                    <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light mb-2">
                        Tecnologia & Autoridade
                    </p>
                    <div className="w-12 h-px bg-white/10 mb-8"></div>
                    <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 max-w-3xl leading-[1.2] tracking-[-0.02em]">
                        Tecnologia moderna aplicada
                        <br />
                        <span className="font-semibold italic text-white/90">com propósito estratégico.</span>
                    </h2>
                    <p className="text-white/85 text-base md:text-lg font-normal max-w-2xl leading-[1.9]">
                        Aliamos as melhores soluções tecnológicas a uma visão clara de negócio,
                        transformando lines de código em vantagem competitiva real.
                    </p>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {techs.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-white/5 py-12 px-10 hover:bg-white/[0.08] transition-all duration-300 group border border-white/10 hover:border-white/20 flex flex-col items-start"
                        >
                            <tech.icon className="w-6 h-6 text-white/20 mb-10 group-hover:text-white transition-colors" />
                            <h3 className="text-white text-xl md:text-2xl font-light mb-4 group-hover:text-white transition-colors">
                                {tech.label}
                            </h3>
                            <p className="text-white/40 text-xs md:text-sm font-light leading-relaxed">
                                {tech.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 flex justify-start">
                    <Link
                        href="#contato"
                        className="inline-block px-8 py-4 border border-white/20 text-white text-[10px] tracking-[0.2em] uppercase font-light hover:border-white/40 hover:bg-white/5 transition-all"
                    >
                        Solicitar Tecnologia Estratégica
                    </Link>
                </div>
            </div>
        </section>
    );
}
