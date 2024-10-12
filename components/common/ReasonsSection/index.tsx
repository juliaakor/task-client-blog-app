import Image from 'next/image';

import peopleOnTheStairs from '@assets/images/peopleOnTheStairs.png';
import purpleCircle from '@assets/images/purpleCircle.svg';
import { blockStyle425, gridImageStyle, gridInfoBlockStyle } from '@components/AboutUsSection/styles';

import { ReasonsSectionProps } from './types';

export const ReasonsSection = ({ reasons }: ReasonsSectionProps) => (
  <div className={`grid gap-16 grid-cols-2 grid-rows-1 ${blockStyle425}`}>
    <div className="relative">
      <Image className={gridImageStyle} src={peopleOnTheStairs} alt="People On The Stairs" />
      <Image className="absolute -bottom-9 left-1/4" src={purpleCircle} alt="Purple circle" />
    </div>
    <div className={`col-2 ${gridInfoBlockStyle}`}>{reasons}</div>
  </div>
);
