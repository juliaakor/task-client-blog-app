import { fetchAllPostsByParams, GetPostsProps } from '@/lib/api/postUtils';

import { getAllPosts } from '../getAllPosts';

jest.mock('@api/postUtils', () => ({
  fetchAllPostsByParams: jest.fn(),
}));

describe('getAllPosts', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call fetchAllPostsByParams with the correct parameters', async () => {
    const params: GetPostsProps = { limit: 10, page: 1 };
    await getAllPosts(params);

    expect(fetchAllPostsByParams).toHaveBeenCalledWith('/api/posts', params);
  });

  it('should return the result of fetchAllPostsByParams', async () => {
    const params: GetPostsProps = { limit: 10, page: 1 };
    const mockPosts = [{ id: '1', title: 'Test Post' }];

    (fetchAllPostsByParams as jest.Mock).mockResolvedValueOnce(mockPosts);

    const result = await getAllPosts(params);

    expect(result).toEqual(mockPosts);
  });

  it('should handle errors thrown by fetchAllPostsByParams', async () => {
    const params: GetPostsProps = { limit: 10, page: 1 };
    const mockError = new Error('Failed to fetch posts');

    (fetchAllPostsByParams as jest.Mock).mockRejectedValueOnce(mockError);

    await expect(getAllPosts(params)).rejects.toThrow('Failed to fetch posts');
  });
});
