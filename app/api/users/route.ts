import { getPaginationParams } from '@/lib/api/getPaginationParams';
import { paginateData } from '@/lib/api/paginateData';
import { USERS_LIMIT_DEFAULT } from '@constants/api';
import users from '@lib/mocks/users';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const { limit, page } = getPaginationParams(searchParams, USERS_LIMIT_DEFAULT);

  const paginatedUsers = paginateData(users, page, limit);

  return Response.json({
    page,
    total: users.length,
    users: paginatedUsers,
  });
}
