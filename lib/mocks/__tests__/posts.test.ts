import posts from '@lib/mocks/posts';
import { PostSchema } from '@lib/zod/post';

describe('Posts Data', () => {
  it('should have an array of posts', () => {
    expect(Array.isArray(posts)).toBe(true);
  });

  it('should have at least one post', () => {
    expect(posts.length).toBeGreaterThan(0);
  });

  it('each post should have the required fields and match the PostSchema', () => {
    posts.forEach((post) => {
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('category');
      expect(post).toHaveProperty('isFeatured');
      expect(post).toHaveProperty('userId');

      expect(() => PostSchema.parse(post)).not.toThrow();
    });
  });

  it('should not have duplicate post IDs', () => {
    const postIds = posts.map((post) => post.id);
    const uniqueIds = new Set(postIds);
    expect(uniqueIds.size).toBe(postIds.length);
  });
});
