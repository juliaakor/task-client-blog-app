import { useTranslations } from 'next-intl';

import { Link } from '@/i18n';
import { NAVBAR_OPTIONS_FULL, NAVBAR_OPTIONS_SHORT } from '@constants/navigation';

import { NavbarProps } from './types';

export const Navbar = ({ isFullView = false }: NavbarProps) => {
  const t = useTranslations('common');

  return (
    <nav>
      <ul className="flex list-none w-max gap-6">
        {(isFullView ? NAVBAR_OPTIONS_FULL : NAVBAR_OPTIONS_SHORT).map(({ label, link, name }) => (
          <Link href={link} key={label}>
            <li className="text-white-01 text-base leading-7">{t.raw('navigation')[`${name}`]}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
