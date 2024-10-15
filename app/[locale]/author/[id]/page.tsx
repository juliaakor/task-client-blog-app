import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { getPostsByUserId } from '@api/getPostByUserId';
import { getUserById } from '@api/getUserById';
import { PostsList } from '@components/PostsList';
import { ENV } from '@constants/env';
import { Socials } from '@lib/components/Socials';
import { Typography } from '@lib/components/Typography';

import { AuthorProps } from './types';

export default async function Author({ params }: AuthorProps) {
  const t = await getTranslations('blog');

  const user = await getUserById(params.id, ENV.NEXT_PUBLIC_BASE_URL);
  const { about, avatar, id: userId, name, socials } = user;

  const { posts } = await getPostsByUserId({ limit: 2, page: 1, userId }, ENV.NEXT_PUBLIC_BASE_URL);

  return (
    <main>
      <div className="bg-white-03">
        <div className="m-auto w-3/4 max-768:w-11/12">
          <div className=" py-32 w-5/6 flex gap-8 max-768:w-full max-768:justify-between">
            <Image className="w-64 h-72 object-contain" src={avatar || ''} alt={name} width={48} height={48} />
            <div>
              <Typography tag="h1" className="mb-6">
                {t('authors.intro', { name })}
              </Typography>
              <Typography tag="body1" className="mb-6 text-light-gray">
                {about}
              </Typography>
              <Socials
                className="gap-4"
                isIncluded={['facebook', 'twitter', 'instagram', 'linkedin']}
                links={socials}
              />
            </div>
          </div>
          <div className="h-6 grid grid-cols-10">
            <div className="col-span-6 bg-yellow" />
            <div className="col-span-4 bg-light-blue" />
          </div>
        </div>
      </div>
      <div className="m-auto w-3/4 my-32 max-768:w-11/12">
        <Typography tag="h1" className="mb-16">
          {t('authors.postsHeader')}
        </Typography>
        <div className="mt-6 flex flex-col gap-8">
          <PostsList
            posts={posts.map((post) => ({ ...post, user }))}
            imageClassName="w-[26rem] min-w-[26rem] items-stretch h-auto max-768:min-w-[15rem] max-768:w-[15rem]"
          />
        </div>
      </div>
    </main>
  );
}
