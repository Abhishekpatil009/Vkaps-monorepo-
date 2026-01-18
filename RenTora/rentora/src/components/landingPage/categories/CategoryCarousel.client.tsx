'use client';

import React from 'react';
import './CategoryCarousel.module.css';

type Category = {
  id: string;
  label: string;
  icon: string;
};

interface Props {
  categories: Category[];
}

const CategoryCarouselClient = React.memo(({ categories }: Props) => {
  const loopedCategories = [...categories, ...categories];

  return (
    <div className="relative w-full mask-linear-fade">
      <div className="flex gap-12 w-max animate-infinite-scroll px-12 py-8 hover:pause-animation">
        {loopedCategories.map((cat, index) => (
          <div
            key={`${cat.id}-${index}`}
            className="group relative shrink-0 w-64 h-64 rounded-full
              bg-[#12131C] border border-white/5
              flex flex-col items-center justify-center
              transition-transform duration-500
              hover:scale-110 hover:border-[#5A80E9]
              hover:bg-[#1A1B2E]
              hover:shadow-[0_0_50px_rgba(90,128,233,0.3)]"
          >
            <span className="text-6xl mb-4 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
              {cat.icon}
            </span>

            <span className="text-lg font-bold tracking-widest text-white group-hover:text-[#5A80E9] transition-colors">
              {cat.label}
            </span>

            <div className="absolute inset-0 rounded-full bg-radial-gradient from-[#5A80E9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
});

CategoryCarouselClient.displayName = 'CategoryCarouselClient';

export default CategoryCarouselClient;
