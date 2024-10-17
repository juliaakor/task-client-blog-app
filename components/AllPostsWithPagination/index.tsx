'use client';

import { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';
import { PostCard, Typography } from 'task-blog-ui-lib';

import { Link } from '@/i18n';
import { ROUTES } from '@constants/navigation';
import { usePaginationButtons } from '@hooks/usePaginationButtons';
import { useGetPosts } from '@hooks/usePosts';

export const AllPostsWithPagination = () => {
  const categoriesTranslations = useTranslations('blog.categories.values');
  const homeTranslations = useTranslations('home');
  const buttonsTranslations = useTranslations('common.buttons');
  const commonTranslations = useTranslations('common');

  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetPosts({ limit: 5, page: currentPage });

  const handleNextClick = useCallback(() => {
    setCurrentPage((prev) => prev + 1);
  }, []);

  const handlePrevClick = useCallback(() => {
    setCurrentPage((prev) => prev - 1);
  }, []);

  const paginationButtons = usePaginationButtons({
    buttonsTranslations,
    currentPage,
    currentPostsAmount: data?.posts.length || 0,
    handleNextClick,
    handlePrevClick,
  })();

  if (isLoading) return <Typography tag="h5">{commonTranslations('pageLoading')}</Typography>;

  return (
    <div>
      <Typography tag="h2" className="mb-12 text-left">
        {homeTranslations('sectionTitles.allPosts')}
      </Typography>

      <div className="flex flex-col gap-16">
        {data && data?.posts.length > 0 ? (
          data.posts.map(({ category, id, image, name, preview, userId }) => (
            <Link key={id} href={ROUTES.post.replace('[id]', userId).replace('[postId]', id)}>
              <PostCard
                type="medium"
                className="max-425:flex-col"
                imageClassName="w-[29rem] min-w-[29rem] items-stretch w-auto max-768:min-w-[15rem] max-768:w-[15rem] max-425:min-w-full max-425:w-full"
                preview={preview}
                title={name}
                category={categoriesTranslations(`${category}.title`)}
                image={image as StaticImageData}
              />
            </Link>
          ))
        ) : (
          <Typography tag="h5">{commonTranslations('noPosts')}</Typography>
        )}
      </div>
      <div className="flex gap-6 m-auto mt-16 w-max text-center">
        {paginationButtons.map(({ disabled, name, onClick, text }) => (
          <button
            type="button"
            key={name}
            name={name}
            onClick={onClick}
            disabled={disabled}
            className={`${disabled ? 'text-light-gray' : ''}`}
          >
            <Typography tag="h3" className="text-inherit">
              {text}
            </Typography>
          </button>
        ))}
      </div>
    </div>
  );
};
