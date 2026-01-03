'use client';

import { useState, useEffect, useMemo } from 'react';
import Navbar from '@/components/RentalsPage/Navbar';
import CategoryFilters from '@/components/RentalsPage/CategoryFilters';
import ProductCard from '@/components/RentalsPage/ProductCard';
import type { RentalItem, RentalCategory } from '@/lib/rental.types';
import { supabase } from '@/lib/supabase/client';

type CategoryFilter = RentalCategory | 'All';

export default function RentalsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('All');
  const [items, setItems] = useState<RentalItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch products from Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from('products')
        .select('*');

      if (error) {
        console.error('Supabase error:', error);
        setLoading(false);
        return;
      }

      if (data) {
        const adapted: RentalItem[] = data.map((p: any) => ({
          id: p.id,
          title: p.title,
          category: p.category as RentalCategory,
          pricePerDay: p.price_per_day,
          securityDeposit: p.security_deposit,
          rating: p.rating ?? 0,
          reviews: p.reviews ?? 0,
          location: p.location ?? 'Unknown',
          images:
            Array.isArray(p.images) && p.images.length > 0
              ? p.images
              : ['/placeholder.jpg'],
          description: p.description ?? '',
          features: p.features ?? [],
          owner: {
            name: p.owner_name ?? 'Owner'
          }
        }));

        setItems(adapted);
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  // 🔹 Search + Category Filter
  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'All' || item.category === category)
    );
  }, [items, search, category]);

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      {/* Navbar with search */}
      <Navbar onSearch={setSearch} />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Page Header */}
          <div className="mb-14 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
              Explore <span className="text-[#5A80E9]">Rentals</span>
            </h1>
            <p className="text-[#C5C8D7] text-lg leading-relaxed">
              Access premium gear from trusted owners.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-10">
            <CategoryFilters active={category} onSelect={setCategory} />
          </div>

          {/* Loading State */}
          {loading && (
            <p className="text-center text-[#C5C8D7]">
              Loading products...
            </p>
          )}

          {/* Products Grid */}
          {!loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                  <ProductCard key={item.id} item={item} />
                ))
              ) : (
                <p className="col-span-full text-center text-[#C5C8D7]">
                  No products found for "{search}"
                </p>
              )}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
