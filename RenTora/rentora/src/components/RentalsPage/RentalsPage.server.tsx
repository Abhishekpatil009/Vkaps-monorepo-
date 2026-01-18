import Navbar from './Navbar';
import RentalsClient from './RentalsClient';
import type { RentalItem } from '@/lib/rental.types';
import {MOCK_RENTAL_ITEMS} from "@/lib/dummyRentals"

async function getRentals(): Promise<RentalItem[]> {
  // simulate API delay (optional)
  await new Promise(res => setTimeout(res, 300));
  return MOCK_RENTAL_ITEMS;
}

export default async function RentalsPage() {
  const items = await getRentals();

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              Explore <span className="text-[#5A80E9]">Rentals</span>
            </h1>
            <p className="text-[#C5C8D7] text-lg">
              Access premium gear from trusted owners.
            </p>
          </div>

          <RentalsClient items={items} />
        </div>
      </main>
    </div>
  );
}
