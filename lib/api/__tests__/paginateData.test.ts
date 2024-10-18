import { paginateData } from '@lib/api/paginateData';

describe('paginateData', () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it('should return the correct data for the first page', () => {
    const result = paginateData(data, 1, 3);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return the correct data for the second page', () => {
    const result = paginateData(data, 2, 3);
    expect(result).toEqual([4, 5, 6]);
  });

  it('should return the remaining data if not enough elements are left for a full page', () => {
    const result = paginateData(data, 4, 3);
    expect(result).toEqual([10]);
  });

  it('should return an empty array if the page is out of range', () => {
    const result = paginateData(data, 5, 3);
    expect(result).toEqual([]);
  });

  it('should return an empty array if the limit is 0', () => {
    const result = paginateData(data, 1, 0);
    expect(result).toEqual([]);
  });

  it('should handle an empty data array', () => {
    const result = paginateData([], 1, 3);
    expect(result).toEqual([]);
  });

  it('should return all data if limit is larger than data length', () => {
    const result = paginateData(data, 1, 20);
    expect(result).toEqual(data);
  });
});
