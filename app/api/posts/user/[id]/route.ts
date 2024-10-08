import { NextResponse } from 'next/server';

import { createErrorResponse } from '@api/createErrorResponse';
import { filterPosts } from '@api/filterPosts';
import { getPaginationParams } from '@api/getPaginationParams';
import { paginateData } from '@api/paginateData';
import { NOT_FOUND_ERROR_STATUS_CODE, USERS_LIMIT_DEFAULT } from '@constants/api';
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

  let userPosts = posts.filter((post) => post.userId === userId);

  userPosts = filterPosts(userPosts, { category, tags: tagsParam });

  if (!userPosts.length) return createErrorResponse('No posts found for this user', NOT_FOUND_ERROR_STATUS_CODE);

  const paginatedPosts = paginateData(userPosts, page, limit);

  return NextResponse.json({
    page,
    posts: paginatedPosts,
    total: userPosts.length,
    userId,
  });
}
