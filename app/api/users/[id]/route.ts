import { NextResponse } from 'next/server';

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

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: NOT_FOUND_ERROR_STATUS_CODE });
  }

  const userPosts = posts.filter((post) => post.userId === userId);

  return NextResponse.json({
    ...user,
    posts: userPosts,
  });
}
