import { NextResponse } from 'next/server';

export function createErrorResponse(message: string, statusCode: number) {
  return NextResponse.json({ error: message }, { status: statusCode });
}
