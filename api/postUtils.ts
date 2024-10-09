import { z } from 'zod';

import { PostSchema } from '@lib/zod/post';

export const PostsResponseSchema = z.object({
  page: z.number(),
  posts: z.array(PostSchema),
  total: z.number(),
});

export interface GetPostsProps {
  page: number;
  limit: number;
  category?: string;
  tags?: string;
  userId?: string;
}

export const constructQueryParams = ({ category, limit, page, tags }: GetPostsProps) => {
  return new URLSearchParams({
    limit: limit.toString(),
    page: page.toString(),
    ...(category ? { category } : {}),
    ...(tags ? { tags } : {}),
  }).toString();
};

export const fetchAllPostsByParams = async (endpoint: string, params: GetPostsProps) => {
  const query = constructQueryParams(params);
  const response = await fetch(`${endpoint}?${query}`);

  if (!response.ok) {
    throw new Error(`Error fetching posts with endpoint ${endpoint}: ${response.statusText}`);
  }

  const data = await response.json();

  return PostsResponseSchema.parse(data);
};
