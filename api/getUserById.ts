import { UserSchema } from 'lib/zod/user';

export const getUserById = async (id: string, baseUrl?: string) => {
  const response = await fetch(`${baseUrl || ''}/api/user/${id}`);

  if (!response.ok) {
    throw new Error(`Error fetching user with ID ${id}: ${response.statusText}`);
  }

  const data = await response.json();

  return UserSchema.parse(data);
};
