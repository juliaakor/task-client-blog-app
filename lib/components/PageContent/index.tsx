import { PageContentProps } from './types';

export const PageContent = ({ children }: PageContentProps) => (
  <div className="flex flex-col items-center justify-center gap-32 my-32 mx-20">{children}</div>
);
