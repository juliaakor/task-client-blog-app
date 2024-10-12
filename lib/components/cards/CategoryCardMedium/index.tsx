import clsx from 'clsx';
import Image from 'next/image';

import { CategoryCardProps } from '@lib/components/cards/types';
import { Typography } from '@lib/components/Typography';

export const CategoryCardMedium = ({ className, icon, info, label }: CategoryCardProps) => {
  return (
    <div
      className={clsx(
        'h-56 bg-transparent hover:bg-yellow text-foreground p-8 flex flex-col items-start border border-white-03',
        className
      )}
    >
      <Image className="bg-beige-01 rounded-md w-12 h-12 p-3" src={icon} alt={label} />
      <Typography className="mt-4 mb-1" tag="h3">
        {label}
      </Typography>
      <Typography className="text-ellipsis overflow-hidden ..." tag="body1">
        {info}
      </Typography>
    </div>
  );
};
