import { UserSchema } from '@lib/zod/user';

import { getUserById } from '../getUserById';

global.fetch = jest.fn();

jest.mock('@lib/zod/user', () => ({
  UserSchema: {
    parse: jest.fn(),
  },
}));

describe('getUserById', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch and validate user data', async () => {
    const mockUser = {
      about: 'Software developer with 5 years of experience.',
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
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockUser),
      ok: true,
    });

    (UserSchema.parse as jest.Mock).mockReturnValueOnce(mockUser);

    const user = await getUserById('f47ac10b-58cc-4372-a567-0e02b2c3d479');

    expect(fetch).toHaveBeenCalledWith('/api/user/f47ac10b-58cc-4372-a567-0e02b2c3d479');
    expect(UserSchema.parse).toHaveBeenCalledWith(mockUser);
    expect(user).toEqual(mockUser);
  });

  it('should throw an error if the response is not ok', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
    });

    await expect(getUserById('invalid-id')).rejects.toThrow('Error fetching user with ID invalid-id: Not Found');
  });

  it('should throw a ZodError if the data does not match UserSchema', async () => {
    const invalidUser = {
      createdAt: 'not-a-date',
      id: 'invalid-uuid',
      name: '',
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(invalidUser),
      ok: true,
    });

    (UserSchema.parse as jest.Mock).mockImplementationOnce(() => {
      throw new Error('ZodError');
    });

    await expect(getUserById('f47ac10b-58cc-4372-a567-0e02b2c3d479')).rejects.toThrow('ZodError');
  });
});
