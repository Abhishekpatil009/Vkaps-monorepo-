'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function OwnerCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 px-6 bg-[#0D1117]">
      <div
        ref={ref}
        className={`max-w-[1920px] mx-auto rounded-[3.5rem] p-24 bg-gradient-to-br from-[#1A1B2E] to-[#0D1117]
        transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <h2 className="text-6xl font-black text-white mb-8">
          MAKE MONEY <br />
          <span className="text-[#5A80E9]">WITH YOUR GEAR</span>
        </h2>

        <p className="text-xl text-[#C5C8D7] max-w-2xl mb-10">
          List your unused professional equipment and earn passive income effortlessly.
        </p>

        <div className="flex gap-6">
          <button className="px-12 py-5 bg-[#5A80E9] rounded-2xl font-black">
            Start Listing →
          </button>
          <button className="px-12 py-5 border border-white/10 rounded-2xl">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
