import { useTranslations } from 'next-intl';

import { IntroSection } from '@components/common/IntroSection';
import { PreviewInfo } from '@components/common/PreviewInfo';
import { PreviewInfoProps } from '@components/common/PreviewInfo/types';
import { ReasonsSection } from '@components/common/ReasonsSection';
import { TeamSection } from '@components/common/TeamSection';
import { TwoColumnGridSection } from '@components/common/TwoColumnGridSection';

import { blockStyle425 } from './styles';
import { AboutUsComponents } from './types';

const pageInfoBlocksSections = ['mission', 'vision', 'team', 'reasons'];

export const AboutUsSection = () => {
  const t = useTranslations('about');
  const infoBlocks = t.raw('infoBlocks') as Record<string, PreviewInfoProps>;

  const components: AboutUsComponents = pageInfoBlocksSections.reduce<AboutUsComponents>(
    (acc, blockName) => ({
      ...acc,
      [blockName]: <PreviewInfo {...infoBlocks[blockName]} />,
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
