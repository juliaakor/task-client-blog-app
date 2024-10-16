import { NextResponse } from 'next/server';

import { createErrorResponse } from '@api/createErrorResponse';

jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));

describe('createErrorResponse', () => {
  it('should return a JSON response with the correct error message and status code', () => {
    const message = 'An error occurred';
    const statusCode = 404;

    createErrorResponse(message, statusCode);

    expect(NextResponse.json).toHaveBeenCalledWith({ error: message }, { status: statusCode });
  });

  it('should work with different error messages and status codes', () => {
    const message = 'Unauthorized access';
    const statusCode = 401;

    createErrorResponse(message, statusCode);

    expect(NextResponse.json).toHaveBeenCalledWith({ error: message }, { status: statusCode });
  });

  it('should handle empty message and default status code', () => {
    const message = '';
    const statusCode = 500;

    createErrorResponse(message, statusCode);

    expect(NextResponse.json).toHaveBeenCalledWith({ error: message }, { status: statusCode });
  });
});
