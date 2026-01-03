'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';

import Navbar from '@/components/landingPage/header/Header';
import HeaderSection from '@/components/RentalsDetails/HeaderSection/HeaderSection';
import ImageGallery from '@/components/RentalsDetails/ImageGallery/ImageGallery';
import OwnerSection from '@/components/RentalsDetails/OwnerSection/OwnerSection';
import DescriptionSection from '@/components/RentalsDetails/DescriptionSection/DescriptionSection';
import SpecsSection from '@/components/RentalsDetails/SpecsSection/SpecsSection';
import TrustSection from '@/components/RentalsDetails/TrustSection/TrustSection';
import BookingCard from '@/components/RentalsDetails/BookingCard/BookingCard';

export default function RentalDetailsPage() {
  const params = useParams();
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', params.id)
        .single(); // fetch only one row

      if (error) {
        console.error(error);
      } else if (data) {
        // Map Supabase row to RentalItem shape
        const adapted = {
          id: data.id,
          title: data.title,
          category: data.category,
          pricePerDay: data.price_per_day,
          securityDeposit: data.security_deposit,
          rating: data.rating,
          reviews: data.reviews,
          location: data.location,
          images: data.images,
          description: data.description,
          features: data.features,
          owner: {
            name: data.owner_name
          }
        };
        setItem(adapted);
      }
      setLoading(false);
    };

    fetchItem();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0D1117] text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-[#0D1117] text-white flex items-center justify-center">
        Item not found
      </div>
    );
  }

  return (
    <div className="bg-[#0D1117] text-white min-h-screen">
      <Navbar />

      <main className="pt-28 px-6 max-w-[1900px] mx-auto space-y-20">
        <HeaderSection data={item} />
        <ImageGallery images={item.images} />

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-14">
            <OwnerSection owner={item.owner} />
            <DescriptionSection text={item.description} />
            <SpecsSection specs={item.features} />
            <TrustSection />
          </div>

          <BookingCard
            price={item.pricePerDay}
            deposit={item.securityDeposit}
          />
        </div>
      </main>
    </div>
  );
}
