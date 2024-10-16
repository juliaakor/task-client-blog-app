import { Typography } from '@lib/components/Typography';
import { TypographyTags } from '@lib/components/Typography/types';
import { PolicyInfo } from '@type/policy';

export const PolicySection = ({ id, paragraphs, subTitle, title }: PolicyInfo) => {
  const policyTitles = [
    { className: 'text-dark-blue mb-8', tag: 'h1', value: title },
    { className: 'text-dark-blue mb-6', tag: 'h2', value: subTitle },
  ];

  return (
    <article key={id}>
      {policyTitles.map(({ className, tag, value }) => (
        <Typography key={tag} tag={tag as TypographyTags} className={className}>
          {value}
        </Typography>
      ))}
      {paragraphs.map(({ id, value }) => (
        <Typography key={id} className="text-dark-gray my-8" tag="body1">
          {value}
        </Typography>
      ))}
    </article>
  );
};
