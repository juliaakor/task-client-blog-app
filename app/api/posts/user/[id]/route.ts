import { NextResponse } from 'next/server';

import {
  MIN_DEFAULT_PARAM_VALUE,
  NOT_FOUND_ERROR_STATUS_CODE,
  PAGE_NUMBER_DEFAULT,
  USERS_LIMIT_DEFAULT,
} from '@constants/api';
import posts from '@lib/mocks/posts';

interface GETUserPostsByIdApiParams {
  id: string;
}

interface GETUserPostsByIdApiProps {
  params: GETUserPostsByIdApiParams;
}

export async function GET(request: Request, { params }: GETUserPostsByIdApiProps) {
  const { searchParams } = new URL(request.url);

  const page = Math.max(Number(searchParams.get('page')), MIN_DEFAULT_PARAM_VALUE) || PAGE_NUMBER_DEFAULT;
  const limit = Math.max(Number(searchParams.get('limit')), MIN_DEFAULT_PARAM_VALUE) || USERS_LIMIT_DEFAULT;

  const { id: userId } = params;

  const userPosts = posts.filter((post) => post.userId === userId);

  if (!userPosts.length) {
    return NextResponse.json({ error: 'No posts found for this user' }, { status: NOT_FOUND_ERROR_STATUS_CODE });
  }

  const start = (page - 1) * limit;
  const paginatedPosts = userPosts.slice(start, start + limit);

  return NextResponse.json({
    page,
    posts: paginatedPosts,
    total: userPosts.length,
    userId,
  });
}
