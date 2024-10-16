export const OFFICES = ['rome', 'canada', 'portugal'];

export const LATITUDE_COORDINATES: Record<string, number> = {
  canada: 45.4215,
  portugal: 38.7223,
  rome: 41.9028,
};

export const LONGITUDE_COORDINATES: Record<string, number> = {
  canada: -75.6972,
  portugal: -9.1393,
  rome: 12.4964,
};

export const getLatitudeByKey = (key: string) => LATITUDE_COORDINATES[key];

export const getLongitudeByKey = (key: string) => LONGITUDE_COORDINATES[key];
