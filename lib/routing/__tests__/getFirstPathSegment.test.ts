import { getFirstPathSegment } from '@lib/routing/getRedirectUrlForLocales';

describe('getFirstPathSegment', () => {
  it('should return the first segment of a valid pathname', () => {
    expect(getFirstPathSegment('/en/some-page')).toBe('en');
    expect(getFirstPathSegment('/fr/another-page')).toBe('fr');
  });

  it('should return null if there is no first segment', () => {
    expect(getFirstPathSegment('/')).toBe(null);
    expect(getFirstPathSegment('')).toBe(null);
  });

  it('should return the first segment even if no other segments exist', () => {
    expect(getFirstPathSegment('/es')).toBe('es');
  });

  it('should return null for invalid pathnames', () => {
    expect(getFirstPathSegment('no-leading-slash')).toBe(null);
    expect(getFirstPathSegment('//double-slash')).toBe(null);
  });
});
