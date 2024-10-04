import { NextResponse } from 'next/server';

import { NOT_FOUND_ERROR_STATUS_CODE } from '@constants/api';
import posts from '@lib/mocks/posts';

interface GETPostByIdApiParams {
  id: string;
}

interface GETPostByIdApiProps {
  params: GETPostByIdApiParams;
}

export async function GET(request: Request, { params }: GETPostByIdApiProps) {
  const { id: postId } = params;
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: NOT_FOUND_ERROR_STATUS_CODE });
  }

  return NextResponse.json(post);
}
