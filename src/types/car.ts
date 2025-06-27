export interface Car {
  id: number;
  name: string;
  company: string;
  car_type: string;
  manufacturer: string;
  horsepower: number;
  range: number;
  gas_mileage: number | null;
  transmission: string;
  fuel_type: string;
  engine_capacity: number | null;
}

export type CarResponse = Car[];
