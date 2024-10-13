// @ts-check

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  images: {
    domains: ['s3-alpha-sig.figma.com'],
  },
};

export default withNextIntl(nextConfig);
