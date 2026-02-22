import Link from "next/link";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5">
      <nav className="px-6 py-5">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <Link 
            href="/" 
            className="text-sm font-light tracking-[0.3em] text-white hover:text-white/80 transition-colors uppercase"
          >
            MAVINIC
          </Link>
          <ul className="flex items-center gap-10 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link 
                href="#servicos" 
                className="text-white/70 hover:text-white transition-colors text-sm font-light tracking-wide"
              >
                Serviços
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link 
                href="#portfolio" 
                className="text-white/70 hover:text-white transition-colors text-sm font-light tracking-wide"
              >
                Portfólio
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link 
                href="#processo" 
                className="text-white/70 hover:text-white transition-colors text-sm font-light tracking-wide"
              >
                Processo
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link 
                href="#contato" 
                className="px-6 py-2.5 bg-white text-black text-sm font-normal hover:bg-white/90 transition-all tracking-wide"
              >
                Iniciar Projeto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
