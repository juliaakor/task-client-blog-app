import { DateFormat } from '@lib/format/dateToString';
import { PostWithUserInfo } from '@type/posts';

export interface PostsListProps {
  posts?: PostWithUserInfo[];
  locale?: string;
  dateType?: DateFormat;
  className?: string;
  imageClassName?: string;
}
