import posts from '@lib/mocks/posts';
// import { Post } from '@lib/zod/post';

interface FilterOptions {
  category?: string | null;
  tags?: string | null;
  userId?: string | null;
}

// todo: change data type of posts to Post
export function filterPosts(data: typeof posts, options: FilterOptions) {
  const { category, tags, userId } = options;

  if (!category && !tags && !userId) return data;

  return data.filter((post) => {
    const categoryMatch = category ? post.category === category : true;

    const tagsMatch = !tags
      ? true
      : post.tags?.some((tag) =>
          tags
            .split(',')
            .map((t) => t.trim())
            .includes(tag)
        ) || false;

    const userIdMatch = userId ? post.userId === userId : true;

    return categoryMatch && tagsMatch && userIdMatch;
  });
}
