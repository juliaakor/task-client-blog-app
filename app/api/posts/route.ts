import { POSTS_LIMIT_DEFAULT } from '@constants/api';
import { filterPosts } from '@lib/api/filterPosts';
import { getPaginationParams } from '@lib/api/getPaginationParams';
import { paginateData } from '@lib/api/paginateData';
import posts from '@lib/mocks/posts';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const { limit, page } = getPaginationParams(searchParams, POSTS_LIMIT_DEFAULT);

  const category = searchParams.get('category');
  const tagsParam = searchParams.get('tags');

  const filteredPosts = filterPosts(posts, { category, tags: tagsParam });
  const paginatedPosts = paginateData(filteredPosts, page, limit);

  return Response.json({
    page,
    posts: paginatedPosts,
    total: filteredPosts.length,
  });
}
