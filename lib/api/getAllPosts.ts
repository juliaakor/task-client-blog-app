import { fetchAllPostsByParams, GetPostsProps } from './postUtils';

export const getAllPosts = async (params: GetPostsProps, baseUrl?: string) => {
  return fetchAllPostsByParams(`${baseUrl || ''}/api/posts`, params);
};
