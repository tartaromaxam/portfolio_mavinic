import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: "Estudo de Caso",
    title: "Clínica Odontológica",
    description:
      "Reposicionamento focado em autoridade e conversão. Hierarquia visual clara e performance estratégica.",
    image: "/images/projects/dental_clinic.png",
  },
  {
    id: 2,
    category: "Estudo de Caso",
    title: "Restaurante Contemporâneo",
    description:
      "Experiência digital imersiva para gastronomia premium. Storytelling visual e funcionalidade intuitiva.",
    image: "/images/projects/restaurant.png",
  },
  {
    id: 3,
    category: "Estudo de Caso",
    title: "Pet Shop Premium",
    description:
      "Identidade digital acolhedora e funcional. Foco em autoridade e presença de mercado.",
    image: "/images/projects/pet_shop.png",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="portfolio" className="py-[140px] lg:py-[160px] bg-[#0A0A0A]">
      <div className="container mx-auto max-w-[1100px] px-8">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light mb-2">
            Portfólio
          </p>
          <div className="w-12 h-px bg-white/10 mb-8"></div>
          <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase font-light mb-4">
            Projetos Conceituais
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-[1.2] tracking-[-0.02em]">
            Trabalhos <span className="font-semibold">Selecionados</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-[120px]">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? "lg:grid-flow-dense" : ""
                  }`}
              >
                {/* Image */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <div className="relative aspect-[4/3] bg-white/5 border border-white/10 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <p className="text-white/40 text-xs tracking-[0.25em] uppercase font-light mb-4">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-8">
                    {project.title}
                  </h3>
                  <p className="text-white/85 text-base md:text-lg font-normal leading-[1.9]">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 border-t border-white/5 pt-12 text-center">
          <p className="text-white/60 text-base font-light mb-8 max-w-xl mx-auto italic">
            Projeto autoral desenvolvido para demonstrar nossa abordagem estratégica e visual.
          </p>
          <Link
            href="#contato"
            className="inline-block px-10 py-4 bg-white text-black text-sm font-normal hover:bg-white/90 transition-all tracking-wide"
          >
            Solicitar Proposta
          </Link>
        </div>
      </div>
    </section>
  );
}
