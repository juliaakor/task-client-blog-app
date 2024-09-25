import type { Metadata } from 'next';
import { Sen } from 'next/font/google';

import './globals.css';

const sen = Sen({
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  description: 'Modsen client blog app',
  title: 'Client Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sen.className}>
      <body className="antialiased bg-background text-foreground">{children}</body>
    </html>
  );
}
