import Link from "next/link";
import Logo from "./Logo";

export default function Footer(): React.JSX.Element {
  return (
    <footer id="contato" className="py-[180px] bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto max-w-[1100px] px-8">
        {/* CTA Section */}
        <div className="text-center mb-20">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light mb-8">
            Contato
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-12 leading-[1.2] tracking-[-0.02em] max-w-3xl mx-auto">
            Pronto para elevar sua marca?
            <br />
            <span className="font-semibold italic text-white/90">Inicie seu projeto estratégico.</span>
          </h2>
          <Link
            href="https://wa.me/5544988160797?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20estratégico%20com%20a%20Mavinic%20Digital."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white !text-[#0A0A0A] text-sm font-normal hover:bg-white/90 transition-all tracking-wide"
          >
            Solicitar Diagnóstico
          </Link>
        </div>

        {/* Footer Info */}
        <div className="border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <Logo />

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
