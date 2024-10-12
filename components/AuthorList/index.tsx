'use client';

import { Link } from '@/i18n';
import { ROUTES } from '@constants/navigation';
import { useGetUsers } from '@hooks/useUsers';
import { AuthorCard } from '@lib/components/cards/AuthorCard';
import { AvailableSocials } from '@lib/components/Socials/types';

import { AuthorListProps } from './types';

export const AuthorList = ({ limit }: AuthorListProps) => {
  const { data: usersData } = useGetUsers({ limit: limit || 4, page: 1 });

  return (
    <div className="flex justify-center gap-8 flex-wrap">
      {usersData &&
        usersData.users.map(({ avatar, company, id, name, role, socials }) => (
          <Link key={id} href={ROUTES.author.replace('[id]', id)}>
            <AuthorCard
              id={id}
              avatar={avatar}
              name={name}
              roleName={role}
              companyName={company}
              socialLinks={socials as Record<string, AvailableSocials>}
            />
          </Link>
        ))}
    </div>
  );
};
