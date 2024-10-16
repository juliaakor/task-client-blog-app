import { useTranslations } from 'next-intl';

import { Logo } from '@components/common/Logo';
import { Navbar } from '@components/common/Navbar';
import { SubscribtionForm } from '@components/SubscribtionForm';
import { Socials } from '@lib/components/Socials';
import { AvailableSocialsUnion } from '@lib/components/Socials/types';

const companyLinks = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  linkedin: 'https://www.linkedin.com/',
  twitter: 'https://x.com/',
};

export const Footer = () => {
  const t = useTranslations('common');

  const lettersSectionInfo = t.raw('lettersSection');
  const contactInfo = t.raw('contactInfo');

  return (
    <footer className="bg-dark-blue px-20 py-14 flex flex-col gap-12">
      <div className="flex justify-between gap-6 flex-wrap">
        <Logo />
        <Navbar className="max-425:flex-col" isFullView />
      </div>
      <div className="flex gap-6 justify-between bg-white/5 py-20 px-16 max-768:flex-col">
        <h5 className="text-white-01 text-4xl font-bold leading-10 w-2/4 max-768:w-3/4 max-425:w-full">
          {lettersSectionInfo.title}
        </h5>
        <div className="w-[45%] max-1024:w-3/5 max-768:w-4/5 max-425:w-full">
          <SubscribtionForm />
        </div>
      </div>
      <div className="flex justify-between opacity-70">
        <div>
          <p className="leading-7 text-white-01 whitespace-pre">{contactInfo.address}</p>
        </div>
        <Socials
          className="gap-6 filter brightness-[3] saturate-50"
          isIncluded={Object.keys(companyLinks) as AvailableSocialsUnion[]}
          links={companyLinks}
        />
      </div>
    </footer>
  );
};
