import { StaticImageData } from 'next/image';

import BusinessIcon from '@assets/icons/Business.svg';
import EconomyIcon from '@assets/icons/Economy.svg';
import StartupIcon from '@assets/icons/Startup.svg';
import TechnologyIcon from '@assets/icons/Technology.svg';
import logo1 from '@assets/logo/Logo1.svg';
import logo2 from '@assets/logo/Logo2.svg';
import logo3 from '@assets/logo/Logo3.svg';
import logo4 from '@assets/logo/Logo4.svg';
import logo5 from '@assets/logo/Logo5.svg';

export const FEATURED_LOGOS = [
  { alt: 'Company 1 Logo', src: logo1 },
  { alt: 'Company 2 Logo', src: logo2 },
  { alt: 'Company 3 Logo', src: logo3 },
  { alt: 'Company 4 Logo', src: logo4 },
  { alt: 'Company 5 Logo', src: logo5 },
];

export const CATEGORY_ICONS: Record<string, StaticImageData> = {
  business: BusinessIcon,
  economy: EconomyIcon,
  startup: StartupIcon,
  technology: TechnologyIcon,
};
