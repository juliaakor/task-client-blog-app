import { Metadata } from 'next';
import { Sen } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import '@app/globals.css';

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
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
