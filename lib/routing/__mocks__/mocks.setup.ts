import { NextRequest } from 'next/server';

jest.mock('next/server', () => ({
  NextRequest: jest.fn().mockImplementation(() => ({
    nextUrl: {
      clone: jest.fn().mockReturnValue({
        pathname: '',
        search: '',
      }),
    },
  })),
}));

export const createMockRequest = (pathname: string = '', search: string = ''): NextRequest =>
  ({
    nextUrl: {
      clone: jest.fn().mockReturnValue({
        pathname,
        search,
      }),
    },
  }) as NextRequest;
