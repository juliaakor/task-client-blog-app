import { fetchAllPostsByParams, GetPostsProps } from './postUtils';

export const getAllPosts = async (params: GetPostsProps) => {
  return fetchAllPostsByParams('/api/posts', params);
};
