import { NextResponse } from 'next/server';

import { MIN_DEFAULT_PARAM_VALUE, PAGE_NUMBER_DEFAULT, USERS_LIMIT_DEFAULT } from '@constants/api';
import users from '@lib/mocks/users';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Math.max(Number(searchParams.get('page')), MIN_DEFAULT_PARAM_VALUE) || PAGE_NUMBER_DEFAULT;
  const limit = Math.max(Number(searchParams.get('limit')), MIN_DEFAULT_PARAM_VALUE) || USERS_LIMIT_DEFAULT;

  const start = (page - 1) * limit;
  const paginatedUsers = users.slice(start, start + limit);

  return NextResponse.json({
    page,
    total: users.length,
    users: paginatedUsers,
  });
}
