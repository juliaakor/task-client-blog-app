import type { Metadata } from 'next';
import { Sen } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
// eslint-disable-next-line camelcase
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import '@app/globals.css';

const sen = Sen({
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  description: 'Modsen client blog app',
  title: 'Client Blog',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(params.locale);
  const messages = await getMessages();

  return (
    <html lang="en" className={sen.className}>
      <body className="antialiased bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
