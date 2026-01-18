'use client';

import { useState, useMemo } from 'react';
import CategoryFilters from './CategoryFilters';
import ProductCard from './ProductCard';
import type { RentalItem, RentalCategory } from '@/lib/rental.types';

type CategoryFilter = RentalCategory | 'All';

export default function RentalsClient({
  items,
}: {
  items: RentalItem[];
}) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('All');

  const filteredItems = useMemo(() => {
    return items.filter(
      item =>
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === 'All' || item.category === category)
    );
  }, [items, search, category]);

  return (
    <>
      <CategoryFilters active={category} onSelect={setCategory} />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredItems.length ? (
          filteredItems.map(item => (
            <ProductCard key={item.id} item={item} />
          ))
        ) : (
          <p className="col-span-full text-center text-[#C5C8D7]">
            No products found
          </p>
        )}
      </div>
    </>
  );
}
