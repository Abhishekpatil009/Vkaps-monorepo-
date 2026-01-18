import HeroMotion from './HeroSectionClient';

export default function HeroSection() {
  return (
    <section className="relative pt-24 h-[90vh] w-full overflow-hidden bg-[#0D1117]">

      {/* Static overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Client-only motion */}
      <HeroMotion />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-6 md:px-12">
        <div className="w-full max-w-6xl p-12 md:p-20 rounded-[3rem] border border-white/10 backdrop-blur-xl bg-white/5 shadow-2xl text-center">

          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
            RENT ANYTHING.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A80E9] to-[#A8C5FF]">
              OWN LESS.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-[#C5C8D7] max-w-2xl mx-auto">
            Unlock a lifestyle of limitless experience with high-end rentals for modern explorers.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[#5A80E9] rounded-full font-bold hover:scale-105 transition-transform">
              Start Browsing
            </button>
            <button className="px-10 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
              How it Works
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
