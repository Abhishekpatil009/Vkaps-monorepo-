import { MOCK_ITEMS } from '@/data/mockItems';
import FeaturedCard from './FeaturedCard.client';

export default function FeaturedSection() {
  const featuredItems = MOCK_ITEMS.filter(item => item.featured);

  return (
    <section className="py-24 px-12 bg-[#0D1117]">
      <h2 className="text-5xl font-black mb-12 text-white">
        FEATURED <span className="text-[#5A80E9]">RENTALS</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {featuredItems.map((item, index) => (
          <FeaturedCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
