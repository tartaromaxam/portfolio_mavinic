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
    category: "Projeto Conceito — Dentista",
    title: "Clínica Odontológica Digital",
    description:
      "Site de alta autoridade para consultório odontológico. Design clean e profissional que transmite confiança, facilitando agendamentos e posicionando o especialista no digital.",
    image: "https://picsum.photos/800/600?grayscale",
  },
  {
    id: 2,
    category: "Projeto Conceito — Pet Shop",
    title: "Presença Digital Afetiva",
    description:
      "Site caloroso e estratégico para pet shop. Layout que conecta emocionalmente com os tutores, exibe serviços com clareza e converte visitantes em clientes fiéis.",
    image: "https://picsum.photos/800/600?grayscale&random=5",
  },
  {
    id: 3,
    category: "Projeto Conceito — Profissional Liberal",
    title: "Identidade Digital Forte",
    description:
      "Identidade forte e presença digital estratégica. Site que posiciona o profissional como autoridade em sua área e gera credibilidade instantânea.",
    image: "https://picsum.photos/800/600?grayscale&random=3",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="portfolio" className="py-32 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light mb-2">
            Portfólio
          </p>
          <div className="w-12 h-px bg-white/10 mb-8"></div>
          <h2 className="text-3xl md:text-5xl font-light text-white">
            Trabalhos <span className="font-normal">Selecionados</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "lg:grid-flow-dense" : ""
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
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 border-t border-white/5 pt-12 text-center">
          <p className="text-white/60 text-base font-light mb-8 max-w-xl mx-auto">
            Cada projeto é único. Estes são conceitos que demonstram nossa abordagem estratégica e visual.
          </p>
          <Link
            href="#contato"
            className="inline-block px-10 py-4 bg-white text-black text-sm font-normal hover:bg-white/90 transition-all tracking-wide"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </section>
  );
}
