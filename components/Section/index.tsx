import { Body1 } from '@/lib/components/paragraphs/Body1';
import { Heading1 } from '@/lib/components/titles/Heading1';

import { SectionProps } from './types';

export const Section = ({ path, subtitle, title }: SectionProps) => {
  return (
    <div className="bg-white-02 text-center py-20">
      <Heading1 className="text-dark-blue">{title}</Heading1>
      <Body1 className="w-1/3 m-auto text-dark-blue opacity-60">{subtitle}</Body1>
      <p className="font-medium text-base leading-5 tracking-widest mt-8 ">{path?.toUpperCase()}</p>
    </div>
  );
};
