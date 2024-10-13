import { DateFormat } from '@lib/format/dateToString';
import { PostWithUserInfo } from '@type/posts';

export interface FeaturedPostProps {
  post: PostWithUserInfo;
  locale?: string;
  dateType?: DateFormat;
  className?: string;
  imageClassName?: string;
  buttonLinkTitle?: string;
}
