import { constructQueryParams, fetchAllPostsByParams, GetPostsProps, PostsResponseSchema } from '../postUtils';

global.fetch = jest.fn();

describe('fetchAllPostsByParams', () => {
  const endpoint = 'https://api.example.com/posts';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should construct correct query params for given parameters', () => {
    const params: GetPostsProps = {
      category: 'news',
      limit: 10,
      page: 1,
      tags: 'tech',
    };

    const queryString = constructQueryParams(params);
    expect(queryString).toBe('limit=10&page=1&category=news&tags=tech');
  });

  it('should construct query params without optional fields', () => {
    const params: GetPostsProps = {
      limit: 5,
      page: 2,
    };

    const queryString = constructQueryParams(params);
    expect(queryString).toBe('limit=5&page=2');
  });

  it('should fetch and parse posts data', async () => {
    const mockResponse = {
      page: 1,
      posts: [
        {
          category: 'technology',
          content: 'Content of the post.',
          createdAt: new Date().toISOString(),
          id: 'a3bb189e-8bf9-4883-bb2f-2c1b292f9a56',
          name: 'Post Title Example',
          preview: 'This is a preview of Post Title Example',
          tags: [],
          userId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        },
      ],
      total: 100,
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
      ok: true,
    });

    const params: GetPostsProps = {
      limit: 10,
      page: 1,
    };

    const result = await fetchAllPostsByParams(endpoint, params);

    expect(fetch).toHaveBeenCalledWith(`${endpoint}?limit=10&page=1`);
    expect(result).toEqual(PostsResponseSchema.parse(mockResponse));
  });

  it('should throw an error if the fetch response is not ok', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
    });

    const params: GetPostsProps = {
      limit: 10,
      page: 1,
    };

    await expect(fetchAllPostsByParams(endpoint, params)).rejects.toThrow(
      'Error fetching posts with endpoint https://api.example.com/posts: Not Found'
    );
  });

  it('should throw an error if the response is invalid according to schema', async () => {
    const invalidResponse = {
      page: 'invalid',
      posts: [],
      total: 'invalid',
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(invalidResponse),
      ok: true,
    });

    const params: GetPostsProps = {
      limit: 10,
      page: 1,
    };

    await expect(fetchAllPostsByParams(endpoint, params)).rejects.toThrow();
  });
});
