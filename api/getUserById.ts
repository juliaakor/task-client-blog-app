import { UserSchema } from 'lib/zod/user';

export const getUserById = async (id: string) => {
  const response = await fetch(`/api/users/${id}`);

  if (!response.ok) {
    throw new Error(`Error fetching user with ID ${id}: ${response.statusText}`);
  }

  const data = await response.json();

  return UserSchema.parse(data);
};
