import { fetchAllPostsByParams } from '@api/postUtils';

import { getPostsByUserId } from '../getPostByUserId';

jest.mock('@api/postUtils', () => ({
  fetchAllPostsByParams: jest.fn(),
}));

describe('getPostsByUserId', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call fetchAllPostsByParams with correct parameters when userId is provided', async () => {
    const params = {
      category: 'technology',
      limit: 10,
      page: 1,
      userId: 'user-id-123',
    };

    (fetchAllPostsByParams as jest.Mock).mockResolvedValueOnce([]);

    const result = await getPostsByUserId(params);

    expect(fetchAllPostsByParams).toHaveBeenCalledWith('/api/posts/user/user-id-123', {
      category: 'technology',
      limit: 10,
      page: 1,
    });
    expect(result).toEqual([]);
  });

  it('should throw an error if userId is not provided', async () => {
    const params = {
      category: 'technology',
      limit: 10,
      page: 1,
    };

    await expect(getPostsByUserId(params)).rejects.toThrow('User ID is required for fetching user posts.');
    expect(fetchAllPostsByParams).not.toHaveBeenCalled();
  });
});
