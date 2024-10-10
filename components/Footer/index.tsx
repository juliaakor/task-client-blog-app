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
      <div className="flex justify-between">
        <Logo />
        <Navbar isFullView />
      </div>
      <div className="flex justify-between bg-white/5 py-20 px-16">
        <h5 className="text-white-01 text-4xl font-bold leading-10 w-2/4">{lettersSectionInfo.title}</h5>
        <div className="w-[45%]">
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
