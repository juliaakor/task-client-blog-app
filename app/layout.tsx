import type { Metadata } from 'next';
import { Sen } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en" className={sen.className}>
      <body className="antialiased bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
