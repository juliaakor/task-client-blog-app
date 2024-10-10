import { useTranslations } from 'next-intl';

import { Body1 } from '@lib/components/paragraphs/Body1';
import { Body2 } from '@lib/components/paragraphs/Body2';
import { Heading5 } from '@lib/components/titles/Heading5';

import { ContactInfoTranslationProps } from './types';

export const ContactInfo = () => {
  const t = useTranslations('contact');
  const contactInfo = t.raw('contactInfo') as ContactInfoTranslationProps[];

  return (
    <div className="w-full bg-light-blue text-white-01 grid grid-cols-2 py-12 px-16 gap-11">
      {contactInfo.map(({ additionalInfo, mainInfo, title }) => {
        return (
          <div key={title}>
            <Body2 className="border-b pb-4 text-white-01 opacity-60">{title}</Body2>
            <Heading5 className="text-white-01 pt-4 whitespace-pre">{mainInfo}</Heading5>
            <Body1 className="text-white-01 opacity-60">{additionalInfo}</Body1>
          </div>
        );
      })}
    </div>
  );
};
