import { useQuery } from '@tanstack/react-query';

import { getAllPosts } from '@lib/api/getAllPosts';
import { getPostById } from '@lib/api/getPostById';
import { getPostsByUserId } from '@lib/api/getPostByUserId';
import { GetPostsProps } from '@lib/api/postUtils';

export const useGetPosts = ({ category, limit, page, tags }: GetPostsProps) => {
  return useQuery({
    queryFn: () => getAllPosts({ category, limit, page, tags }),
    queryKey: ['posts', page, limit, category, tags],
  });
};

export const useGetPostsByUserId = ({ category, limit, page, tags, userId }: GetPostsProps) => {
  return useQuery({
    queryFn: () => getPostsByUserId({ category, limit, page, tags, userId }),
    queryKey: ['posts', page, userId, limit, category, tags],
  });
};

export const useGetPostById = (id: string) => {
  return useQuery({ queryFn: () => getPostById(id), queryKey: ['post', id] });
};
