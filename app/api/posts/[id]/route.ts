import { NOT_FOUND_ERROR_STATUS_CODE } from '@constants/api';
import { createErrorResponse } from '@lib/api/createErrorResponse';
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

  if (!post) return createErrorResponse('Post not found', NOT_FOUND_ERROR_STATUS_CODE);

  return Response.json(post);
}
