import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from 'task-blog-ui-lib';

import { useRouter } from '@/i18n';
import peopleLookingAtTheSea from '@assets/images/peopleLookingAtTheSea.png';
import { PreviewInfo } from '@components/common/PreviewInfo';
import { ROUTES } from '@constants/navigation';

import { ReasonsTranslation } from './types';

export const ReasonsPreview = () => {
  const t = useTranslations('home');
  const router = useRouter();

  const { linkText = '', secondaryInfo, sectionName, title } = t.raw('reasonsSectionPreview') as ReasonsTranslation;

  const handleLinkButtonClick = () => {
    router.push(ROUTES.about);
  };

  return (
    <div className="w-[80vw] grid grid-rows-4 grid-cols-4">
      <Image
        className="w-full h-full object-cover row-start-1 row-end-5 col-start-1 col-end-4 z-10"
        src={peopleLookingAtTheSea}
        alt="People looking at the sea"
      />
      <div className="col-start-3 col-end-4 row-start-2 row-end-5 z-20 top-28 w-[40vw] p-20 bg-white-01 max-768:col-start-2 max-768:w-[60vw]">
        <PreviewInfo secondaryInfo={secondaryInfo} title={title} sectionName={sectionName}>
          <Button
            styleType="brand"
            className="text-lg font-bold leading-8 w-max"
            label={linkText}
            name={linkText}
            onClick={handleLinkButtonClick}
          />
        </PreviewInfo>
      </div>
    </div>
  );
};
