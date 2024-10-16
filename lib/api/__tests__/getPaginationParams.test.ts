import { getPaginationParams } from '@/lib/api/getPaginationParams';
import { PAGE_NUMBER_DEFAULT } from '@constants/api';

describe('getPaginationParams', () => {
  const defaultLimit = 1;

  it('should return default values when page and limit are not present', () => {
    const searchParams = new URLSearchParams();
    const result = getPaginationParams(searchParams, defaultLimit);

    expect(result).toEqual({ limit: defaultLimit, page: PAGE_NUMBER_DEFAULT });
  });

  it('should return the correct page and limit when valid page and limit are present', () => {
    const searchParams = new URLSearchParams({ limit: '5', page: '2' });
    const result = getPaginationParams(searchParams, defaultLimit);

    expect(result).toEqual({ limit: 5, page: 2 });
  });

  it('should return default page when page is invalid or less than MIN_DEFAULT_PARAM_VALUE', () => {
    const searchParams1 = new URLSearchParams({ page: '0' });
    const result1 = getPaginationParams(searchParams1, defaultLimit);

    expect(result1.page).toEqual(PAGE_NUMBER_DEFAULT);

    const searchParams2 = new URLSearchParams({ page: '-1' });
    const result2 = getPaginationParams(searchParams2, defaultLimit);

    expect(result2.page).toEqual(PAGE_NUMBER_DEFAULT);
  });

  it('should return default limit when limit is invalid or less than MIN_DEFAULT_PARAM_VALUE', () => {
    const searchParams1 = new URLSearchParams({ limit: '0' });
    const result1 = getPaginationParams(searchParams1, defaultLimit);

    expect(result1.limit).toEqual(defaultLimit);

    const searchParams2 = new URLSearchParams({ limit: '-1' });
    const result2 = getPaginationParams(searchParams2, defaultLimit);

    expect(result2.limit).toEqual(defaultLimit);
  });

  it('should handle non-numeric page and limit values', () => {
    const searchParams = new URLSearchParams({ limit: 'xyz', page: 'abc' });
    const result = getPaginationParams(searchParams, defaultLimit);

    expect(result).toEqual({ limit: defaultLimit, page: PAGE_NUMBER_DEFAULT });
  });
});
