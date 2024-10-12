import { useTranslations } from 'next-intl';

import { AboutUsBlock } from '@components/common/AboutUsBlock';
import { AboutUsBlockProps } from '@components/common/AboutUsBlock/types';
import { IntroSection } from '@components/common/IntroSection';
import { ReasonsSection } from '@components/common/ReasonsSection';
import { TeamSection } from '@components/common/TeamSection';
import { TwoColumnGridSection } from '@components/common/TwoColumnGridSection';

import { blockStyle425 } from './styles';
import { AboutUsComponents } from './types';

const pageInfoBlocksSections = ['mission', 'vision', 'team', 'reasons'];

export const AboutUsSection = () => {
  const t = useTranslations('about');
  const infoBlocks = t.raw('infoBlocks') as Record<string, AboutUsBlockProps>;

  const components: AboutUsComponents = pageInfoBlocksSections.reduce<AboutUsComponents>(
    (acc, blockName) => ({
      ...acc,
      [blockName]: <AboutUsBlock {...infoBlocks[blockName]} />,
    }),
    {}
  );

  return (
    <>
      <div>
        <IntroSection />
        <TwoColumnGridSection mission={components.mission} vision={components.vision} className={blockStyle425} />
      </div>
      <TeamSection team={components.team} />
      <ReasonsSection reasons={components.reasons} />
    </>
  );
};
