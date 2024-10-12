import { StaticImageData } from 'next/image';

import { CategoryCardMedium } from '@lib/components/cards/CategoryCardMedium';
import { CategoryCardSmall } from '@lib/components/cards/CategoryCardSmall';

export const categoryCardComponents = {
  medium: CategoryCardMedium,
  small: CategoryCardSmall,
};

export type CategoryTags = keyof typeof categoryCardComponents;

export interface CategoryCardProps {
  label: string;
  name: string;
  type: CategoryTags;
  className?: string;
  icon: StaticImageData;
  onClick?: () => void;
}
