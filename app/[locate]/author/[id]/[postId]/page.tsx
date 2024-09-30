import { PostProps } from './types';

export default function Post({ params }: PostProps) {
  return <main>Post: {params.postId}</main>;
}
