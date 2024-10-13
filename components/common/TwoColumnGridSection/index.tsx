import { TwoColumnGridSectionProps } from './types';

export const TwoColumnGridSection = ({ className, mission, vision }: TwoColumnGridSectionProps) => (
  <div className={`bg-white-03 grid grid-cols-2 gap-8 pt-32 px-28 pb-16 max-768:px-5 ${className}`}>
    {mission}
    {vision}
  </div>
);
