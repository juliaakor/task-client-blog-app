export interface Office {
  name: string;
  address: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface MapProps {
  offices: Office[];
}
