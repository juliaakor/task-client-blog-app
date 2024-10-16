import Image from 'next/image';

import circleFromHands from '@assets/images/circleFromHands.png';
import yellowFigure from '@assets/images/yellowFigure.svg';
import { blockStyle425, gridImageStyle, gridInfoBlockStyle } from '@components/AboutUsSection/styles';

import { TeamSectionProps } from './types';

export const TeamSection = ({ team }: TeamSectionProps) => (
  <div className={`grid gap-16 grid-cols-2 grid-rows-1 ${blockStyle425}`}>
    <div className={`${gridInfoBlockStyle} max-425:order-2`}>{team}</div>
    <div className="relative max-425:order-1">
      <Image className="absolute top-1/3 -left-12" src={yellowFigure} alt="Yellow figure" />
      <Image className={gridImageStyle} src={circleFromHands} alt="Circle From Hands" />
    </div>
  </div>
);
