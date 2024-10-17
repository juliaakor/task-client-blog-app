'use client';

import { StaticImageData } from 'next/image';
import { notFound, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Button, PostCard, Input, Form, Typography } from 'task-blog-ui-lib';
import { z } from 'zod';

import { Link, useRouter } from '@/i18n';
import { CategoryList } from '@components/CategoryList';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { Section } from '@components/Section';
import { Categories, CategoriesValues, TagsValues } from '@constants/entities';
import { ROUTES } from '@constants/navigation';
import { useGetPosts } from '@hooks/usePosts';

import { CategoryProps } from './types';

const isValidCategory = (category: string) => !CategoriesValues.includes(category as Categories);

const defaultValues = {
  search: '',
};

const formSchema = z.object({
  search: z.string(),
});

const CATEGORY_POSTS_LIMIT = 4;
const CATEGORY_POSTS_PAGE = 1;

export default function Category({ params }: CategoryProps) {
  const { category } = params;

  if (isValidCategory(category)) {
    notFound();
  }

  const t = useTranslations('blog');
  const commonTranslations = useTranslations('common');
  const categories = t.raw('categories');
  const tags = t.raw('tags');
  const categoryInfo = t.raw(`categories.values.${category}`);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const tagsFromParams = searchParams.get('tags')?.split(',') || [];
    setSelectedTags(tagsFromParams);
  }, [searchParams]);

  const { data, isLoading } = useGetPosts({
    category,
    limit: CATEGORY_POSTS_LIMIT,
    page: CATEGORY_POSTS_PAGE,
    tags: selectedTags.join(','),
  });

  const handleTagClick = (tag: string) => () => {
    const updatedTags = selectedTags.includes(tag) ? selectedTags.filter((t) => t !== tag) : [...selectedTags, tag];

    setSelectedTags(updatedTags);

    const params = new URLSearchParams(searchParams);
    params.set('tags', updatedTags.join(','));

    router.push(`?${params.toString()}`);
  };

  const handleSubmit = async ({ search }: typeof defaultValues) => {
    const updatedTags = search ? [...selectedTags.filter((tag) => tag !== searchQuery), search] : selectedTags;

    setSelectedTags(updatedTags);
    setSearchQuery(search);

    const params = new URLSearchParams(searchParams);
    params.set('tags', updatedTags.join(','));
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <Section
        title={categoryInfo.title}
        subtitle={categoryInfo.info}
        path={`${t('pageTitle').toLocaleUpperCase()} > ${categoryInfo.title}`}
      />

      <div className="flex mx-16 my-32 gap-36 max-768:gap-8">
        <div className="mt-6 flex flex-col gap-8 max-768:gap-4 w-4/6">
          {isLoading && (
            <Typography className="text-center" tag="h3">
              {commonTranslations('pageLoading')}
            </Typography>
          )}

          <ErrorBoundary>
            {data && data?.posts.length > 0
              ? data?.posts.map(({ id, image, name, preview, userId }) => (
                  <Link key={id} href={ROUTES.post.replace('[id]', userId).replace('[postId]', id)}>
                    <PostCard
                      type="medium"
                      className="max-768:flex-col"
                      imageClassName="object-contain w-[17rem] h-[18rem] max-425:min-w-full max-425:w-full"
                      preview={preview}
                      title={name}
                      category={categoryInfo.title}
                      image={image as StaticImageData}
                    />
                  </Link>
                ))
              : isLoading || <Typography tag="h3">{commonTranslations('noPosts')}</Typography>}
          </ErrorBoundary>
        </div>
        <div className="w-[18rem]">
          <div className="mb-14">
            <Form
              className="flex max-425:flex-col"
              defaultValues={defaultValues}
              zodSchema={formSchema}
              onSubmit={handleSubmit}
              validateOnBlur={false}
              validateOnChange={false}
            >
              <Input type="text" name="search" placeholder={t('search.placeholder')} />
              <Button
                className="py-4 px-2 w-max max-425:w-full"
                styleType="brand"
                type="submit"
                label="Search"
                name="search"
              />
            </Form>
          </div>

          <div className="mb-12">
            <Typography tag="h2" className="mb-10">
              {categories.title}
            </Typography>
            <CategoryList className="m-auto" />
          </div>

          <div>
            <Typography tag="h2" className="mb-10">
              {tags.title}
            </Typography>
            <div className="m-auto flex flex-wrap items-center justify-evently gap-4 px-4 py-4">
              {TagsValues.map((tag) => (
                <Button
                  className="w-max rounded-full border-2 border-light-gray text-light-gray text-sm font-bold py-2 px-4"
                  name={tag}
                  key={tag}
                  onClick={handleTagClick(tag)}
                  label={tags.values[`${tag}`]}
                  styleType={selectedTags.includes(tag) ? 'brand' : 'white'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
