import { StaticImageData } from 'next/image';

export interface CategoryCardProps {
  label: string;
  name: string;
  className?: string;
  info?: string;
  icon: StaticImageData;
  onClick?: () => void;
}

export interface PostCardProps {
  title: string;
  subTitle?: string;
  buttonLinkTitle?: string;
  category?: string;
  preview?: string;
  image?: StaticImageData;
  imageClassName?: string;
  className?: string;
  label?: string;
  onClickButtonClick?: () => void;
}
