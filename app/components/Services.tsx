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
    name: "Pacote Essencial",
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
    name: "Pacote Profissional",
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
    name: "Projeto Personalizado",
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
    <section id="servicos" className="py-32 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light mb-2">
            Serviços
          </p>
          <div className="w-12 h-px bg-white/10 mb-8"></div>
          <h2 className="text-3xl md:text-5xl font-light text-white">
            Pacotes e <span className="font-normal">Soluções</span>
          </h2>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`border ${
                pkg.highlighted
                  ? "border-white/20 bg-white/5"
                  : "border-white/10"
              } p-8 hover:border-white/30 transition-all duration-300`}
            >
              {/* Package Name */}
              <h3 className="text-xl font-normal text-white mb-3">
                {pkg.name}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm font-light mb-8 leading-relaxed">
                {pkg.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-10">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-sm font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-white text-base font-normal">{pkg.price}</p>
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
