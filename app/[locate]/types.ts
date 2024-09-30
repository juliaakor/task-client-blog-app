export interface Locale {
  locale: string;
}

export interface LayoutProps {
  children: React.ReactNode;
  params: Locale;
}

export interface HomeProps {
  params: Locale;
}
