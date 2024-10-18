import { Typography } from 'task-blog-ui-lib';

import { SectionProps } from './types';

export const Section = ({ path, subtitle, title }: SectionProps) => {
  return (
    <div className="bg-white-02 text-center py-20">
      <Typography tag="h1" className="text-dark-blue">
        {title}
      </Typography>
      <Typography tag="body1" className="w-1/3 m-auto text-dark-blue opacity-60">
        {subtitle}
      </Typography>
      <p className="font-medium text-base leading-5 tracking-widest mt-8 ">{path?.toUpperCase()}</p>
    </div>
  );
};
