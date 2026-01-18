import { CATEGORIES } from '@/data/categories';
import CategoryCarouselClient from './CategoryCarousel.client';

export default function CategoryCarousel() {
  return (
    <section className="py-24 bg-[#0D1117] overflow-hidden">
      <div className="px-12 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
          POPULAR <span className="text-[#5A80E9]">CATEGORIES</span>
        </h2>
      </div>

      {/* Server passes static data */}
      <CategoryCarouselClient categories={CATEGORIES} />
    </section>
  );
}
