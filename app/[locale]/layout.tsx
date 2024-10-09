import { Metadata } from 'next';
import { Sen } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import '@styles/globals.css';

import { locales } from '@/i18n';
import { Provider } from '@components/Provider';

import { LayoutProps } from './types';

const sen = Sen({
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  description: 'Modsen client blog app',
  title: 'Client Blog',
};

export default async function RootLayout({ children, params: { locale } }: Readonly<LayoutProps>) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={sen.className}>
      <body className="antialiased bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <Provider> {children}</Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
