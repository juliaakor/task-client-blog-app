import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { AvailableSocialsUnion, SocialsProps } from './types';
import FacebookIcon from '../icons/Facebook.svg';
import InstagramIcon from '../icons/Instagram.svg';
import LinkedinIcon from '../icons/Linkedin.svg';
import TwitterIcon from '../icons/Twitter.svg';

const SOCIALS_ICONS = [
  { alt: 'Instagram', icon: InstagramIcon },
  { alt: 'Twitter', icon: TwitterIcon },
  { alt: 'LinkedIn', icon: LinkedinIcon },
  { alt: 'Facebook', icon: FacebookIcon },
];

export const Socials = ({ className = '', iconStyle = '', isIncluded, links }: SocialsProps) => {
  return (
    <div className={clsx('flex', className)}>
      {SOCIALS_ICONS.map(({ alt, icon }) =>
        isIncluded.includes(alt.toLocaleLowerCase() as AvailableSocialsUnion) ? (
          <Link key={alt} href={links?.[alt.toLocaleLowerCase() as AvailableSocialsUnion] || ''} target="_blank">
            <Image className={clsx('filter hover:brightness-200', iconStyle)} src={icon} alt={alt} />
          </Link>
        ) : null
      )}
    </div>
  );
};
