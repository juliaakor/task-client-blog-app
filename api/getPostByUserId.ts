import { fetchAllPostsByParams, GetPostsProps } from './postUtils';

export const getPostsByUserId = async (params: GetPostsProps, baseUrl?: string) => {
  const { userId, ...rest } = params;

  if (!userId) {
    throw new Error('User ID is required for fetching user posts.');
  }

  return fetchAllPostsByParams(`${baseUrl || ''}/api/posts/user/${userId}`, rest);
};
