export type RentalCategory =
  | 'Cameras'
  | 'Bikes'
  | 'Laptops'
  | 'Electronics'
  | 'Tools'
  | 'Drones'
  | 'Outdoors'
  | 'Audio';

export interface RentalItem {
  id: string;
  title: string;
  category: RentalCategory;
  pricePerDay: number;
  securityDeposit: number;
  rating: number;
  image: string;
  ownerId: string;
  description: string;
}
