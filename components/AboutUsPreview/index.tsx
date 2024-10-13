import { useTranslations } from 'next-intl';

import { Link } from '@/i18n';
import { PreviewInfo } from '@components/common/PreviewInfo';
import { ROUTES } from '@constants/navigation';

import { AboutUsTranslation } from './types';

const colorfulLine = ['bg-transparent grid-cols-1', 'bg-yellow col-start-2 col-end-5', 'bg-light-blue grid-cols-6'];

export const AboutUsPreview = () => {
  const t = useTranslations('home');
  const aboutUsInfo = t.raw('aboutUsPreview') as AboutUsTranslation;

  return (
    <>
      <div className="w-[80vw] grid grid-cols-5">
        {colorfulLine.map((style) => (
          <div key={style} className={`h-6 ${style}`} />
        ))}
      </div>
      <div className="w-[80vw] py-24 px-20 grid grid-cols-2 gap-20 bg-white-03 max-768:grid-cols-1 max-375:w-[90vw]">
        {aboutUsInfo.map(({ linkText, secondaryInfo, sectionName, subTitle, title }) => (
          <PreviewInfo
            key={sectionName}
            secondaryInfo={secondaryInfo}
            subTitle={subTitle}
            title={title}
            sectionName={sectionName}
          >
            <Link href={ROUTES.about} className="text-light-blue text-lg font-bold leading-8 hover:text-dark-blue">
              {linkText}
            </Link>
          </PreviewInfo>
        ))}
      </div>
    </>
  );
};
