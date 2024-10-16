import { PostSchema } from '@lib/zod/post';

export const getPostById = async (id: string, baseUrl?: string) => {
  const response = await fetch(`${baseUrl || ''}/api/posts/${id}`);

  if (!response.ok) {
    throw new Error(`Error fetching posts by Id with ID ${id}: ${response.statusText}`);
  }

  const data = await response.json();

  return PostSchema.parse(data);
};
