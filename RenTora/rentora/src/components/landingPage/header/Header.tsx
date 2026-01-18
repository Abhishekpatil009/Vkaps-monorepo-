import Link from "next/link";
import RentoraLogoMascot from "./RentoraLogoMascot";
import HeaderClient from "./HeaderClient";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
      {/* Floating glass container */}
      <div className="w-[95%] max-w-7xl mt-4 pointer-events-auto">
        <div className="rounded-2xl">
          <div className="flex items-center px-6 md:px-10 h-20">
            <Link href="/" className="flex items-center gap-4 group">
              <RentoraLogoMascot />
              <span className="text-2xl md:text-3xl font-bold tracking-tighter text-white group-hover:text-[#5A80E9] transition-colors">
                RENTORA
              </span>
            </Link>

            <HeaderClient />
          </div>
        </div>
      </div>
    </header>
  );
}
