import { NextResponse } from 'next/server';

import { filterPosts } from '@/api/filterPosts';
import { createErrorResponse } from '@api/createErrorResponse';
import { NOT_FOUND_ERROR_STATUS_CODE } from '@constants/api';
import posts from '@lib/mocks/posts';
import users from '@lib/mocks/users';

interface GETUserByIdApiParams {
  id: string;
}

interface GETUserByIdApiProps {
  params: GETUserByIdApiParams;
}

export async function GET(request: Request, { params }: GETUserByIdApiProps) {
  const userId = params.id;
  const user = users.find((u) => u.id === userId);

  if (!user) return createErrorResponse('User not found', NOT_FOUND_ERROR_STATUS_CODE);

  const userPosts = filterPosts(posts, { userId });

  return NextResponse.json({
    ...user,
    posts: userPosts,
  });
}
