import authors from '@lib/mocks/users';
import { UserSchema } from '@lib/zod/user';

describe('Authors Data', () => {
  it('should be an array of authors', () => {
    expect(Array.isArray(authors)).toBe(true);
  });

  it('should have at least one author', () => {
    expect(authors.length).toBeGreaterThan(0);
  });

  it('each author should match the UserSchema', () => {
    authors.forEach((author) => {
      expect(() => UserSchema.parse(author)).not.toThrow();
    });
  });

  it('each author should have the required fields', () => {
    authors.forEach((author) => {
      expect(author).toHaveProperty('id');
      expect(author).toHaveProperty('name');
      expect(author).toHaveProperty('createdAt');
      expect(author).toHaveProperty('about');
    });
  });

  it('should not have duplicate author IDs', () => {
    const authorIds = authors.map((author) => author.id);
    const uniqueIds = new Set(authorIds);
    expect(uniqueIds.size).toBe(authorIds.length);
  });

  it('should have socials object even if empty', () => {
    authors.forEach((author) => {
      expect(author).toHaveProperty('socials');
      expect(typeof author.socials).toBe('object');
    });
  });
});
