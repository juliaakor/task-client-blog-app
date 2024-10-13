export interface Paragraph {
  id: string;
  value: string;
}

export interface PolicyInfo {
  id: string;
  title?: string;
  subTitle?: string;
  paragraphs: Paragraph[];
}

export interface PolicyTranslations {
  pageTitle: string;
  date: string;
  info: PolicyInfo[];
}
