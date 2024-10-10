import aboutEn from '@messages/en/about.json';
import blogEn from '@messages/en/blog.json';
import commonEn from '@messages/en/common.json';
import contactEn from '@messages/en/contact.json';
import homeEn from '@messages/en/home.json';
import policyEn from '@messages/en/policy.json';
import testimonialsEn from '@messages/en/testimonials.json';
import aboutRu from '@messages/ru/about.json';
import blogRu from '@messages/ru/blog.json';
import commonRu from '@messages/ru/common.json';
import contactRu from '@messages/ru/contact.json';
import homeRu from '@messages/ru/home.json';
import policyRu from '@messages/ru/policy.json';
import testimonialsRu from '@messages/ru/testimonials.json';

const translationFiles = ['about', 'testimonials', 'blog', 'contact', 'home', 'policy'];

const mapTranslationsToObject = (translations: unknown[]) => {
  return translationFiles.reduce(
    (acc, key, index) => {
      acc[key] = translations[index];

      return acc;
    },
    {} as Record<string, unknown>
  );
};

const translationsEn = [aboutEn, testimonialsEn, blogEn, contactEn, homeEn, policyEn];
const translationsRu = [aboutRu, testimonialsRu, blogRu, contactRu, homeRu, policyRu];

export const getTranslationsByLocale = async (locale: string) => {
  if (locale === 'en') {
    return {
      common: commonEn,
      ...mapTranslationsToObject(translationsEn),
    };
  }

  if (locale === 'ru') {
    return {
      common: commonRu,
      ...mapTranslationsToObject(translationsRu),
    };
  }

  throw new Error(`Unsupported locale: ${locale}`);
};
