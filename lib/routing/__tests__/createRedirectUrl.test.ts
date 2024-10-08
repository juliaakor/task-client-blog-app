import { createMockRequest } from '@lib/routing/__mocks__/mocks.setup';
import { createRedirectUrl } from '@lib/routing/getRedirectUrlForLocales';

describe('createRedirectUrl', () => {
  it('should append the locale and the correct path', () => {
    const req = createMockRequest();
    const result = createRedirectUrl('en', '/fr/old-path', req);

    expect(result.pathname).toBe('/en/old-path');
  });

  it('should return just the locale for empty pathnames', () => {
    const req = createMockRequest();
    const result = createRedirectUrl('en', '/', req);

    expect(result.pathname).toBe('/en');
  });

  it('should return just the locale if the pathname has no additional segments', () => {
    const req = createMockRequest();
    const result = createRedirectUrl('en', '/fr', req);

    expect(result.pathname).toBe('/en');
  });

  it('should update the pathname while keeping other parts of the URL intact', () => {
    const req = createMockRequest('', '?key=value');
    const result = createRedirectUrl('en', '/fr/other', req);

    expect(result.pathname).toBe('/en/other');
    expect(result.search).toBe('?key=value');
  });

  it('should handle trailing slashes in pathnames', () => {
    const req = createMockRequest();
    const result = createRedirectUrl('en', '/fr/', req);

    expect(result.pathname).toBe('/en/');
  });

  it('should not change the pathname if it does not match the expected pattern', () => {
    const req = createMockRequest();
    const result = createRedirectUrl('en', '/invalid/path/name', req);

    expect(result.pathname).toBe('/en/path/name');
  });
});
