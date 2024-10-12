import clsx from 'clsx';
import Image from 'next/image';

import { Socials } from '@lib/components/Socials';
import { AvailableSocials } from '@lib/components/Socials/types';
import { Typography } from '@lib/components/Typography';

import { AuthorCardProps } from './types';

export const AuthorCard = ({
  avatar,
  className,
  companyName,
  id,
  name,
  onCardClick,
  roleName,
  socialLinks,
}: AuthorCardProps) => {
  const handleCardClick = () => {
    onCardClick?.(id);
  };

  return (
    <div
      className={clsx(
        'bg-white-02 hover:bg-beige-01 px-7 py-10 w-72 h-80 text-center flex flex-col items-center gap-5 hover:cursor-pointer',
        className
      )}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      aria-label={`Open ${name} page`}
      onKeyDown={handleCardClick}
    >
      {avatar && <Image src={avatar} alt={name} className="w-32 h-32 object-cover rounded-full" />}
      <div>
        <Typography tag="h3">{name}</Typography>
        <Typography tag="body2" className="text-light-gray">{`${roleName} @${companyName}`}</Typography>
      </div>
      <Socials
        className="gap-4"
        iconStyle="fill-dark-blue dark:fill-white-01"
        isIncluded={[
          AvailableSocials.Facebook,
          AvailableSocials.Instagram,
          AvailableSocials.Linkedin,
          AvailableSocials.Twitter,
        ]}
        links={socialLinks}
      />
    </div>
  );
};
