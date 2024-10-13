import { Post as PostType } from '@/lib/zod/post';

interface Post {
  postId: string;
  locale: string;
}

export interface PostProps {
  params: Post;
}
