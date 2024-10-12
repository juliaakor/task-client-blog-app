import { Body1 } from '@lib/components/paragraphs/Body1';
import { Body2 } from '@lib/components/paragraphs/Body2';
import { Caps1 } from '@lib/components/titles/Caps1';
import { Caps2 } from '@lib/components/titles/Caps2';
import { Caps3 } from '@lib/components/titles/Caps3';
import { Heading1 } from '@lib/components/titles/Heading1';
import { Heading2 } from '@lib/components/titles/Heading2';
import { Heading3 } from '@lib/components/titles/Heading3';
import { Heading4 } from '@lib/components/titles/Heading4';
import { Heading5 } from '@lib/components/titles/Heading5';
import { Heading6 } from '@lib/components/titles/Heading6';
import { Label } from '@lib/components/titles/Label';
import { Title } from '@lib/components/titles/Title';

export const typographyComponents = {
  body1: Body1,
  body2: Body2,
  cap1: Caps1,
  cap2: Caps2,
  cap3: Caps3,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  label: Label,
  title: Title,
};

export type TypographyTags = keyof typeof typographyComponents;

export interface TypographyProps {
  tag: TypographyTags;
  children: React.ReactNode;
  className?: string;
}
