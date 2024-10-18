import { useTranslations } from 'next-intl';
import { Typography } from 'task-blog-ui-lib';

import { ContactForm } from '@components/ContactForm';
import { ContactInfo } from '@components/ContactInfo';
import { Map } from '@components/Map';
import { getLatitudeByKey, getLongitudeByKey, OFFICES } from '@constants/contact';

export default function Contact() {
  const t = useTranslations('contact');

  const offices = OFFICES.map((key) => ({
    address: t(`offices.${key}.address`),
    country: t(`offices.${key}.country`),
    latitude: getLatitudeByKey(key),
    longitude: getLongitudeByKey(key),
    name: t(`offices.${key}.name`),
  }));

  return (
    <main>
      <div className="m-auto w-2/4 max-768:w-3/4 pt-32">
        <div className="text-center mb-16">
          <b className="mb-3">{t('pageTitle')}</b>
          <Typography tag="h1" className="mb-6">
            {t('pageSlogan')}
          </Typography>
          <Typography tag="body1">{t('pageInfo')}</Typography>
        </div>
        <div className="mb-8">
          <ContactInfo />
        </div>
        <div className="mb-16">
          <ContactForm />
        </div>
      </div>
      <Map offices={offices} />
    </main>
  );
}
