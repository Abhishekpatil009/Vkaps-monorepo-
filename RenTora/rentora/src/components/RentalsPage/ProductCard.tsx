'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import type { RentalItem } from '@/lib/rental.types';

export default function ProductCard({ item }: { item: RentalItem }) {
  const imageSrc =
    typeof item.image === 'string' && item.image.startsWith('http')
      ? item.image
      : '/placeholder.jpg';

  return (
    <Link href={`/rentals/${item.id}`} className="block">
      <div className="group bg-[#12131C] rounded-[2rem] border border-white/5 overflow-hidden hover:-translate-y-2 transition-all">

        <div className="relative h-60 overflow-hidden">
          <Image
            src={imageSrc}
            alt={item.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute top-4 left-4 bg-[#5A80E9] text-white text-xs font-black px-3 py-1 rounded-lg">
            {item.category}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-white mb-3">
            {item.title}
          </h3>

          <div className="flex items-center gap-2 text-xs text-[#C5C8D7] mb-4">
            <ShieldCheck size={14} className="text-green-500" />
            ₹{item.securityDeposit} refundable deposit
          </div>

          <div className="flex justify-between items-center border-t border-white/5 pt-4">
            <span className="text-2xl font-black text-white">
              ₹{item.pricePerDay}
              <span className="text-sm text-[#C5C8D7] font-bold"> / day</span>
            </span>

            <span className="p-3 bg-white/5 rounded-xl group-hover:bg-[#5A80E9] transition">
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
