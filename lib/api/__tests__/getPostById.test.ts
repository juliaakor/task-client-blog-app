import { PostSchema } from 'lib/zod/post';

import { getPostById } from '../getPostById';

global.fetch = jest.fn();

jest.mock('@lib/zod/post', () => ({
  PostSchema: {
    parse: jest.fn(),
  },
}));

describe('getPostById', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch and validate post data', async () => {
    const mockPost = {
      content: 'This is a sample post content.',
      createdAt: new Date().toISOString(),
      id: '1',
      title: 'Sample Post',
      userId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockPost),
      ok: true,
    });

    (PostSchema.parse as jest.Mock).mockReturnValueOnce(mockPost);

    const post = await getPostById('1');

    expect(fetch).toHaveBeenCalledWith('/api/posts/1');
    expect(PostSchema.parse).toHaveBeenCalledWith(mockPost);
    expect(post).toEqual(mockPost);
  });

  it('should throw an error if the response is not ok', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
    });

    await expect(getPostById('invalid-id')).rejects.toThrow();
  });

  it('should throw a ZodError if the data does not match PostSchema', async () => {
    const invalidPost = {
      id: 'invalid-id',
      title: '',
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(invalidPost),
      ok: true,
    });

    (PostSchema.parse as jest.Mock).mockImplementationOnce(() => {
      throw new Error('ZodError');
    });

    await expect(getPostById('1')).rejects.toThrow('ZodError');
  });
});
