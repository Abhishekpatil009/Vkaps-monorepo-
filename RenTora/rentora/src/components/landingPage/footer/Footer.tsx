import './Footer.css';

import {
  SOCIALS,
  BROWSE_LINKS,
  OWNER_LINKS,
  LEGAL_LINKS,
} from '@/data/footer';

export default function Footer() {
  return (
    <footer className="relative bg-[#12131C] pt-32 pb-12 border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#5A80E9]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">

          {/* Branding */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4 group cursor-pointer w-fit">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5A80E9] to-[#A8C5FF]
                rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(90,128,233,0.4)]
                group-hover:rotate-[15deg] transition-transform duration-500"
              >
                <span className="text-white font-black text-2xl">R</span>
              </div>

              <span className="text-4xl font-black tracking-tighter text-white
                group-hover:text-[#5A80E9] transition-colors"
              >
                RENTORA
              </span>
            </div>

            <p className="text-lg text-[#C5C8D7] max-w-sm">
              The world&apos;s premium rental ecosystem. Experience anything, own less.
            </p>

            <div className="flex gap-5">
              {SOCIALS.map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-12 h-12 rounded-2xl bg-[#0D1117] border border-white/5
                    flex items-center justify-center text-[#C5C8D7]
                    hover:text-white hover:border-[#5A80E9]
                    hover:shadow-[0_0_20px_rgba(90,128,233,0.3)]
                    transition-all hover:-translate-y-2"
                >
                  <span className="uppercase text-xs font-bold neon-pulse">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Browse */}
          <FooterColumn title="Browse" items={BROWSE_LINKS} />

          {/* Owners */}
          <FooterColumn title="Owners" items={OWNER_LINKS} />

          {/* Newsletter */}
          <div>
            <h4 className="footer-title">Stay Updated</h4>
            <p className="text-sm text-[#C5C8D7] mb-6">
              Join 10,000+ explorers getting early access.
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="email@rentora.com"
                className="w-full bg-[#0D1117] border border-white/10 rounded-2xl
                  py-4 px-6 text-white text-sm outline-none
                  focus:border-[#5A80E9] focus:ring-1 focus:ring-[#5A80E9]"
              />
              <button className="w-full py-4 bg-[#5A80E9] rounded-2xl
                text-xs uppercase tracking-[2px] font-black
                hover:shadow-[0_0_30px_rgba(90,128,233,0.4)]"
              >
                Join Ecosystem
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap gap-8 text-[10px] font-black uppercase tracking-[3px] text-[#C5C8D7]">
            {LEGAL_LINKS.map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>

          <p className="text-[10px] tracking-[4px] text-[#C5C8D7]/50">
            © 2025 Rentora Technology Corp.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="footer-title">{title}</h4>
      <ul className="space-y-5">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-[#C5C8D7] hover:text-[#5A80E9]
                hover:pl-2 transition-all block"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
