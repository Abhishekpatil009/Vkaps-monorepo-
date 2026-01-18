import { NextResponse } from 'next/server';
import { MOCK_RENTAL_ITEMS } from '@/lib/dummyRentals';

export async function GET() {
  return NextResponse.json(MOCK_RENTAL_ITEMS);
}
