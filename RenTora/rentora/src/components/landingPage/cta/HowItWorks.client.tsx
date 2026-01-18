'use client';

import React, { useEffect, useRef, useState } from 'react';
import { STEPS } from '@/data/steps';

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-32 bg-[#12131C]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <h2 className="text-center text-6xl font-black text-white mb-24">
          HOW <span className="text-[#5A80E9]">RENTORA</span> WORKS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {STEPS.map((s, i) => (
            <div
              key={s.step}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`group p-10 rounded-[2.5rem] bg-[#0D1117] border border-white/5
              transition-all duration-700
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            >
              {/* ICON */}
              <div className="relative mb-6 flex justify-center">
                {/* Glow */}
                <div className="absolute inset-0 bg-[#5A80E9] blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

                {/* Icon */}
                <div
                  className="
                    relative z-10 text-6xl
                    transition-all duration-300 ease-out
                    group-hover:-translate-y-2
                    group-hover:scale-110
                    group-hover:rotate-6
                    drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]
                  "
                >
                  {s.icon}
                </div>
              </div>

              <h3 className="text-xl font-black text-white mb-4 group-hover:text-[#5A80E9] transition-colors">
                {s.title}
              </h3>

              <p className="text-sm text-[#C5C8D7]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
