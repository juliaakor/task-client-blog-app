import { filterPosts } from '@/lib/api/filterPosts';

const mockPosts = [
  {
    category: 'business',
    content: 'content 1',
    createdAt: '2024-09-26T14:56:27.274Z',
    id: '10fefb86-a5f8-4716-b389-845d23bdcf62',
    image: {
      height: 16,
      src: '',
      width: 16,
    },
    isFeatured: false,
    name: 'Aliquam rem aspernatur.',
    preview: 'preview 1',
    tags: ['marketing'],
    userId: 'f3bd8697-2631-4714-a6e7-584597b60b08',
  },
  {
    category: 'economy',
    content: 'content 2',
    createdAt: '2024-09-27T06:58:14.317Z',
    id: 'c280e113-b92c-4d71-b580-4992c44223d0',
    image: {
      height: 16,
      src: '',
      width: 16,
    },
    isFeatured: false,
    name: 'Modi corrupti fugit.',
    preview: 'preview 2',
    tags: ['experience', 'business', 'marketing'],
    userId: '24045dc4-da5e-49f4-9d7f-c20fbf96c8f9',
  },
  {
    category: 'technology',
    content: 'content 3',
    createdAt: '2024-09-27T01:16:34.289Z',
    id: '29f5beff-7847-4c76-8411-0cbb6e5a8114',
    image: {
      height: 16,
      src: '',
      width: 16,
    },
    isFeatured: false,
    name: 'Et pariatur omnis quia repellendus deserunt provident.',
    preview: 'preview 3',
    tags: ['experience', 'marketing'],
    userId: '11305024-16df-4799-a15e-0002f3dca787',
  },
  {
    category: 'technology',
    content: 'content 4',
    createdAt: '2024-09-27T02:00:00.000Z',
    id: '4fe7ab67-84e4-4e0c-a8e3-91fdce003c66',
    image: {
      height: 16,
      src: '',
      width: 16,
    },
    isFeatured: false,
    name: 'Et pariatur omnis quia repellendus deserunt provident.',
    preview: 'preview 4',
    tags: ['screen', 'marketing'],
    userId: '24045dc4-da5e-49f4-9d7f-c20fbf96c8f9',
  },
];

describe('filterPosts', () => {
  it('should return all mockPosts when no category or tags are provided', () => {
    const result = filterPosts(mockPosts, { category: null, tags: null });
    expect(result).toEqual(mockPosts);
  });

  it('should filter mockPosts by category', () => {
    const category = 'technology';
    const filteredPosts = mockPosts.filter((post) => post.category === category);

    const result = filterPosts(mockPosts, { category, tags: null });
    expect(result).toEqual(filteredPosts);
  });

  it('should filter mockPosts by tags', () => {
    const tags = 'experience';
    const filteredPosts = mockPosts.filter((post) => post.tags.includes(tags));

    const result = filterPosts(mockPosts, { category: null, tags });
    expect(result).toEqual(filteredPosts);
  });

  it('should filter mockPosts by both category and tags', () => {
    const category = 'technology';
    const tags = 'experience';
    const filteredPosts = mockPosts.filter((post) => post.category === category && post.tags.includes(tags));

    const result = filterPosts(mockPosts, { category, tags });
    expect(result).toEqual(filteredPosts);
  });

  it('should return all mockPosts when category does not match any mockPosts', () => {
    const category = 'nonexistent-category';
    const result = filterPosts(mockPosts, { category, tags: null });
    expect(result).toEqual([]);
  });

  it('should return all mockPosts when tags do not match any mockPosts', () => {
    const tags = 'nonexistent-tag';
    const result = filterPosts(mockPosts, { category: null, tags });
    expect(result).toEqual([]);
  });

  it('should trim tags and match mockPosts', () => {
    const tags = 'experience, marketing';
    const filteredPosts = mockPosts.filter((post) =>
      post.tags.some((tag) => ['experience', 'marketing'].includes(tag))
    );

    const result = filterPosts(mockPosts, { category: null, tags });
    expect(result).toEqual(filteredPosts);
  });
});
