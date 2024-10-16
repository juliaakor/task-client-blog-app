export interface Locale {
  locale: string;
}

export interface LayoutProps {
  children: React.ReactNode;
  params: Locale;
}

export interface HomePageProps {
  params: Locale;
}

export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}
