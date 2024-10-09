import { useQuery } from '@tanstack/react-query';

import { getAllUsers, GetUsersProps } from '@api/getAllUsers';
import { getUserById } from '@api/getUserById';

export const useGetUsers = (fields: GetUsersProps) =>
  useQuery({ queryFn: () => getAllUsers(fields), queryKey: ['users', { ...fields }] });

export const useGetUserById = (id: string) => {
  return useQuery({ queryFn: () => getUserById(id), queryKey: ['user', id] });
};
