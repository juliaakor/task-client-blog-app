import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { getPostById } from '@api/getPostById';
import { getUserById } from '@api/getUserById';
import { FeaturedPost } from '@components/FeaturedPost';
import { HomePageContent } from '@components/HomePageContent';
import { PostsPreview } from '@components/PostsPreview';
import { ENV } from '@constants/env';
import { PageContent } from '@lib/components/PageContent';

export default async function Home() {
  const t = await getTranslations('common');

  const headerPost = await getPostById(process.env.HEADER_POST_ID_HOME_PAGE as string, ENV.NEXT_PUBLIC_BASE_URL);
  const headerPostUser = await getUserById(headerPost.userId, ENV.NEXT_PUBLIC_BASE_URL);

  return (
    <main>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={headerPost.image || ''}
            alt="Background image"
            className="h-full object-cover transform -scale-x-100"
          />
        </div>
        <div className="relative z-10 bg-dark-shadow pb-32 pt-20">
          <FeaturedPost
            className="flex-col w-full h-full text-white-01 p-20 m-0 self-start items-start text-left [&_p]:text-white-01 [&_div]:self-start [&_div_div]:gap-6 [&_h2]:text-6xl [&_button]:mt-12"
            imageClassName="hidden"
            post={{ ...headerPost, user: headerPostUser }}
            buttonLinkTitle={t('buttons.readMoreButtonTitle')}
            isSubTitleSection
          />
        </div>
      </div>
      <PageContent>
        <div>
          <PostsPreview />
        </div>
        <HomePageContent />
      </PageContent>
    </main>
  );
}
