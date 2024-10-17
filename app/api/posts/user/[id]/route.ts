import { NOT_FOUND_ERROR_STATUS_CODE, USERS_LIMIT_DEFAULT } from '@constants/api';
import { createErrorResponse } from '@lib/api/createErrorResponse';
import { filterPosts } from '@lib/api/filterPosts';
import { getPaginationParams } from '@lib/api/getPaginationParams';
import { paginateData } from '@lib/api/paginateData';
import posts from '@lib/mocks/posts';

interface GETUserPostsByIdApiParams {
  id: string;
  category?: string;
  tags?: string;
}

interface GETUserPostsByIdApiProps {
  params: GETUserPostsByIdApiParams;
}

export async function GET(request: Request, { params }: GETUserPostsByIdApiProps) {
  const { searchParams } = new URL(request.url);
  const { limit, page } = getPaginationParams(searchParams, USERS_LIMIT_DEFAULT);

  const { id: userId } = params;
  const category = searchParams.get('category');
  const tagsParam = searchParams.get('tags');

  const userPosts = filterPosts(posts, { category, tags: tagsParam, userId });

  if (!userPosts.length) return createErrorResponse('No posts found for this user', NOT_FOUND_ERROR_STATUS_CODE);

  const paginatedPosts = paginateData(userPosts, page, limit);

  return Response.json({
    page,
    posts: paginatedPosts,
    total: userPosts.length,
    userId,
  });
}
