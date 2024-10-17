import { useTranslations } from 'next-intl';
import { Typography } from 'task-blog-ui-lib';

import { ContactInfoTranslationProps } from './types';

export const ContactInfo = () => {
  const t = useTranslations('contact');
  const contactInfo = t.raw('contactInfo') as ContactInfoTranslationProps[];

  return (
    <div className="w-full bg-light-blue text-white-01 grid grid-cols-2 py-12 px-16 gap-11">
      {contactInfo.map(({ additionalInfo, mainInfo, title }) => {
        return (
          <div key={title}>
            <Typography tag="body2" className="border-b pb-4 text-white-01 opacity-60">
              {title}
            </Typography>
            <Typography tag="h5" className="text-white-01 pt-4 whitespace-pre text-wrap">
              {mainInfo}
            </Typography>
            <Typography tag="body1" className="text-white-01 opacity-60 text-wrap">
              {additionalInfo}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};
