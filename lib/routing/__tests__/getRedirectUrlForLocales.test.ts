import { createMockRequest } from '@lib/routing/__mocks__/mocks.setup';
import { getRedirectUrlForLocales } from '@lib/routing/getRedirectUrlForLocales';

describe('getRedirectUrlForLocales', () => {
  it('should return null if the first segment is a valid locale (en)', () => {
    const req = createMockRequest();
    const result = getRedirectUrlForLocales('/en/old-path', req);

    expect(result).toBeNull();
  });

  it('should return null if the first segment is a valid locale (ru)', () => {
    const req = createMockRequest();
    const result = getRedirectUrlForLocales('/ru/old-path', req);

    expect(result).toBeNull();
  });

  it('should handle trailing slashes properly for valid locales', () => {
    const req = createMockRequest();
    const result = getRedirectUrlForLocales('/ru/', req);

    expect(result).toBeNull();
  });

  it('should handle trailing slashes properly for invalid locales', () => {
    const req = createMockRequest();
    const result = getRedirectUrlForLocales('/invalid/', req);

    expect(result?.pathname).toBe('/en/');
  });

  it('should return the default locale for a path with no segments', () => {
    const req = createMockRequest();
    const result = getRedirectUrlForLocales('/', req);

    expect(result?.pathname).toBe('/en');
  });
});
