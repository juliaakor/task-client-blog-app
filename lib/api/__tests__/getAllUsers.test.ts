import { UsersResponseSchema } from '@lib/zod/user';

import { getAllUsers } from '../getAllUsers';

global.fetch = jest.fn();

jest.mock('@lib/zod/user', () => ({
  UserSchema: {
    parse: jest.fn(),
  },
  UsersResponseSchema: {
    parse: jest.fn(),
  },
}));

describe('getAllUsers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch and validate users data', async () => {
    const mockUsersResponse = {
      page: 1,
      total: 100,
      users: [
        {
          about: 'Software developer.',
          avatar: 'https://example.com/avatar.jpg',
          company: 'Example Corp',
          createdAt: new Date().toISOString(),
          id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
          name: 'John Doe',
          role: 'Developer',
          socials: {
            facebook: 'https://facebook.com/johndoe',
            instagram: 'https://instagram.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
          },
        },
      ],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockUsersResponse),
      ok: true,
    });

    (UsersResponseSchema.parse as jest.Mock).mockReturnValueOnce(mockUsersResponse);

    const usersResponse = await getAllUsers({ limit: 10, page: 1 });

    expect(fetch).toHaveBeenCalledWith('/api/users?page=1&limit=10');
    expect(UsersResponseSchema.parse).toHaveBeenCalledWith(mockUsersResponse);
    expect(usersResponse).toEqual(mockUsersResponse);
  });

  it('should throw an error if the response is not ok', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      statusText: 'Internal Server Error',
    });

    await expect(getAllUsers({ limit: 10, page: 1 })).rejects.toThrow('Error fetching users: Internal Server Error');
  });

  it('should throw a ZodError if the data does not match UsersResponseSchema', async () => {
    const invalidUsersResponse = {
      page: 1,
      total: 100,
      users: [
        {
          id: 'invalid-uuid',
          name: '',
        },
      ],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(invalidUsersResponse),
      ok: true,
    });

    (UsersResponseSchema.parse as jest.Mock).mockImplementationOnce(() => {
      throw new Error('ZodError');
    });

    await expect(getAllUsers({ limit: 10, page: 1 })).rejects.toThrow('ZodError');
  });
});
