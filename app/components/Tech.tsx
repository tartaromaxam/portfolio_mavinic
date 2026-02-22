import Link from "next/link";

const techs = [
    { label: "Next.js", description: "Framework moderno com SSR e performance superior" },
    { label: "Design Estratégico", description: "Identidade visual aplicada com precisão" },
    { label: "SEO Técnico", description: "Estrutura otimizada para indexação e alcance" },
    { label: "Performance", description: "Carregamento rápido e experiência fluida" },
    { label: "Responsividade", description: "Adaptação perfeita a qualquer dispositivo" },
    { label: "Segurança", description: "Plataformas robustas e hospedagem confiável" },
];

export default function Tech(): React.JSX.Element {
    return (
        <section id="tecnologia" className="py-32 px-6 bg-[#0A0A0A] border-t border-white/5">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="mb-20">
                    <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light mb-2">
                        Tecnologia & Performance
                    </p>
                    <div className="w-12 h-px bg-white/10 mb-8"></div>
                    <h2 className="text-3xl md:text-5xl font-light text-white mb-6 max-w-3xl leading-tight">
                        Tecnologia a serviço{" "}
                        <span className="font-normal">da sua marca.</span>
                    </h2>
                    <p className="text-white/60 text-base md:text-lg font-light max-w-2xl leading-relaxed">
                        Aliamos design estratégico a tecnologias modernas como Next.js e plataformas robustas
                        para garantir performance, segurança e escalabilidade.
                    </p>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/5">
                    {techs.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-[#0A0A0A] p-8 hover:bg-white/[0.02] transition-all duration-300 group"
                        >
                            <h3 className="text-white text-base font-normal mb-3 group-hover:text-white transition-colors">
                                {tech.label}
                            </h3>
                            <p className="text-white/40 text-sm font-light leading-relaxed">
                                {tech.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 flex justify-start">
                    <Link
                        href="#contato"
                        className="inline-block px-8 py-4 border border-white/20 text-white text-sm font-light hover:border-white/40 hover:bg-white/5 transition-all tracking-wide"
                    >
                        Ver Nossos Projetos
                    </Link>
                </div>
            </div>
        </section>
    );
}
