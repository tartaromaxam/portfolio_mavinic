import Link from "next/link";
import { Check } from "lucide-react";

interface ServicePackage {
  name: string;
  description: string;
  features: string[];
  price: string;
  highlighted?: boolean;
}

const packages: ServicePackage[] = [
  {
    name: "Fundação",
    description: "Ideal para pequenos negócios iniciando presença digital.",
    features: [
      "Até 5 páginas",
      "Design responsivo e moderno",
      "Integração com WhatsApp",
      "SEO básico",
      "Formulário de contato",
    ],
    price: "A partir de R$ 1.500",
  },
  {
    name: "Direção",
    description: "Para negócios que querem posicionamento estratégico e conversão.",
    features: [
      "Até 8 páginas",
      "Identidade visual aplicada",
      "Landing page estratégica",
      "Integração com redes sociais",
      "SEO estruturado",
      "Otimização de performance",
      "Suporte inicial pós-entrega",
    ],
    price: "A partir de R$ 2.200",
    highlighted: true,
  },
  {
    name: "Autoridade",
    description: "Soluções sob medida para necessidades específicas.",
    features: [
      "Área de membros",
      "Agendamento online",
      "Estrutura multilíngue",
      "Integrações avançadas",
      "Funcionalidades personalizadas",
    ],
    price: "Valor sob consulta",
  },
];

export default function Services(): React.JSX.Element {
  return (
    <section id="servicos" className="py-[140px] lg:py-[160px] bg-[#0A0A0A]">
      <div className="container mx-auto max-w-[1100px] px-8">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light mb-2">
            Serviços
          </p>
          <div className="w-12 h-px bg-white/10 mb-8"></div>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-[1.2] tracking-[-0.02em]">
            Pacotes e <span className="font-semibold">Soluções</span>
          </h2>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-center">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative flex flex-col transition-all duration-500 border ${pkg.highlighted
                ? "border-white/30 bg-white/10 py-16 px-12 ring-1 ring-white/20 shadow-2xl shadow-white/5 lg:scale-105 z-10"
                : "border-white/10 bg-white/5 py-12 px-10 opacity-60 hover:opacity-100"
                } hover:border-white/40`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 right-0 bg-white !text-[#0A0A0A] text-[9px] tracking-[0.2em] font-normal px-4 py-1.5 uppercase">
                  Escolha Estratégica
                </div>
              )}

              {/* Package Name */}
              <h3 className="text-xl font-normal text-white mb-10">
                {pkg.name}
              </h3>

              {/* Description */}
              <p className="text-white/85 text-sm font-normal mb-8 leading-[1.9]">
                {pkg.description}
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-12 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-sm font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-white text-xl font-light mb-8">{pkg.price}</p>
                <Link
                  href="#contato"
                  className={`block w-full py-4 text-center text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${pkg.highlighted
                    ? "bg-white !text-[#0A0A0A] hover:bg-white/90 font-medium"
                    : "border border-white/20 text-white hover:bg-white/5 font-light"
                    }`}
                >
                  Solicitar Diagnóstico
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-white/50 text-sm font-light max-w-2xl mx-auto">
            Cada projeto é único. Os valores apresentados representam o ponto de partida para desenvolvimento.
          </p>
        </div>
      </div>
    </section>
  );
}
