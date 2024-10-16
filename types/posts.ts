import { Post } from '@lib/zod/post';
import { User } from '@lib/zod/user';

export interface PostWithUserInfo extends Post {
  user?: User;
  label?: string;
}
