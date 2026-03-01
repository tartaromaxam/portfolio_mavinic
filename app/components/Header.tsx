import Link from "next/link";
import Logo from "./Logo";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5">
      <nav className="py-5">
        <div className="container mx-auto max-w-[1100px] px-8 flex items-center justify-between">
          <Logo />
          <ul className="flex items-center gap-10 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link
                href="#servicos"
                className="text-white/85 hover:text-white transition-colors text-sm font-normal tracking-wider"
              >
                Serviços
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#portfolio"
                className="text-white/85 hover:text-white transition-colors text-sm font-normal tracking-wider"
              >
                Portfólio
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#processo"
                className="text-white/85 hover:text-white transition-colors text-sm font-normal tracking-wider"
              >
                Processo
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#contato"
                className="px-6 py-2.5 bg-white !text-[#0A0A0A] text-sm font-normal hover:bg-white/90 transition-all tracking-wide"
              >
                Solicitar Proposta
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
