import { NextResponse } from 'next/server';

import posts from '@/lib/mocks/posts';
import { MIN_DEFAULT_PARAM_VALUE, PAGE_NUMBER_DEFAULT, POSTS_LIMIT_DEFAULT } from '@constants/api';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = Math.max(Number(searchParams.get('page')), MIN_DEFAULT_PARAM_VALUE) || PAGE_NUMBER_DEFAULT;
  const limit = Math.max(Number(searchParams.get('limit')), MIN_DEFAULT_PARAM_VALUE) || POSTS_LIMIT_DEFAULT;

  const category = searchParams.get('category');
  const tagsParam = searchParams.get('tags');

  const filteredPosts = posts.filter((post) => {
    const categoryMatch = category ? post.category === category : true;
    const tagsMatch = tagsParam
      ? post.tags.some((tag) =>
          tagsParam
            .split(',')
            .map((t) => t.trim())
            .includes(tag)
        )
      : true;

    return categoryMatch && tagsMatch;
  });

  const start = (page - 1) * limit;
  const paginatedPosts = filteredPosts.slice(start, start + limit);

  return NextResponse.json({
    page,
    posts: paginatedPosts,
    total: filteredPosts.length,
  });
}
