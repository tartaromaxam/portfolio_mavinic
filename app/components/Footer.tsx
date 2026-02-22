import Link from "next/link";

export default function Footer(): React.JSX.Element {
  return (
    <footer id="contato" className="py-24 px-6 bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        {/* CTA Section */}
        <div className="text-center mb-20">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light mb-8">
            Contato
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 leading-tight max-w-3xl mx-auto">
            Sua marca merece uma presença digital{" "}
            <span className="font-normal">à altura.</span>
          </h2>
          <p className="text-white/60 text-lg font-light mb-10 max-w-xl mx-auto">
            Vamos iniciar seu projeto.
          </p>
          <Link
            href="https://wa.me/5544988160797?text=Olá!%20Quero%20iniciar%20meu%20projeto%20com%20a%20Mavinic%20Digital."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-black text-sm font-normal hover:bg-white/90 transition-all tracking-wide"
          >
            Iniciar Projeto
          </Link>
        </div>

        {/* Footer Info */}
        <div className="border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div>
              <p className="text-white text-sm tracking-[0.3em] uppercase font-light">
                MAVINIC
              </p>
              <p className="text-white/40 text-xs font-light mt-1">
                Contemporary Creative Studio
              </p>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right">
              <a
                href="mailto:mavinicconsultoria@gmail.com"
                className="text-white/60 hover:text-white text-sm font-light transition-colors"
              >
                mavinicconsultoria@gmail.com
              </a>
              <br />
              <a
                href="https://wa.me/5544988160797"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white text-sm font-light transition-colors"
              >
                +55 44 98816-0797
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 text-center">
            <p className="text-white/30 text-xs font-light">
              © {new Date().getFullYear()} Mavinic Digital. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
