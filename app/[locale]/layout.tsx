import { Metadata } from 'next';
import { Sen } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Toaster } from 'react-hot-toast';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Provider } from '@components/Provider';

import { LayoutProps } from './types';

import '@styles/globals.css';

const sen = Sen({
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  description: 'Modsen client blog app',
  title: 'Client Blog',
};

export default async function RootLayout({ children, params: { locale } }: Readonly<LayoutProps>) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={sen.className}>
      <body className="antialiased bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <Provider>
            <Header />
            {children}
            <Footer />
          </Provider>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
