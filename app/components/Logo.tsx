import Link from "next/link";

interface LogoProps {
    className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
    return (
        <Link href="/" className={`flex items-center gap-4 group ${className}`}>
            {/* Brand Box */}
            <div className="w-10 h-10 border border-white flex items-center justify-center shrink-0">
                <span className="font-manrope font-light text-[18px] text-white leading-none">
                    MV
                </span>
            </div>

            {/* Brand Name */}
            <div className="flex flex-col justify-center">
                <h2 className="font-inter font-semibold text-[23px] leading-tight tracking-[0.04em] text-white uppercase">
                    MAVINIC
                </h2>
                <span className="text-[10px] font-light tracking-[0.3em] text-white/70 uppercase -mt-0.5">
                    Estúdio Digital
                </span>
            </div>
        </Link>
    );
}
