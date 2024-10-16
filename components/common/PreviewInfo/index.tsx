import { Typography } from '@lib/components/Typography';
import { TypographyTags } from '@lib/components/Typography/types';

import { PreviewInfoProps } from './types';

export const PreviewInfo = ({
  children,
  className,
  label,
  mainInfo,
  secondaryInfo,
  sectionName,
  subTitle,
  title,
}: PreviewInfoProps) => {
  const previewInfo = [
    { className: 'mb-6', tag: 'cap1', value: sectionName },
    { className: 'mb-4', tag: 'h2', value: title },
    { className: 'mb-4', tag: 'h3', value: subTitle },
    { className: 'mb-4', tag: 'h4', value: label },
    { className: 'mb-4 text-light-gray', tag: 'body1', value: secondaryInfo },
    { className: '', tag: 'body1', value: mainInfo },
  ];

  return (
    <div key={sectionName} className={className}>
      {previewInfo.map(({ className, tag, value }) => (
        <Typography key={tag} tag={tag as TypographyTags} className={className}>
          {value}
        </Typography>
      ))}
      {children}
    </div>
  );
};
