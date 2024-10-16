import { UsersResponse, UsersResponseSchema } from '@lib/zod/user';

export interface GetUsersProps {
  page: number;
  limit: number;
}

export const getAllUsers = async ({ limit, page }: GetUsersProps, baseUrl?: string): Promise<UsersResponse> => {
  const response = await fetch(`${baseUrl || ''}/api/users?page=${page}&limit=${limit}`);

  if (!response.ok) {
    throw new Error(`Error fetching users: ${response.statusText}`);
  }

  const data = await response.json();

  return UsersResponseSchema.parse(data);
};
