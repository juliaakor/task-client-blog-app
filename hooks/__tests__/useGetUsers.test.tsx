import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

import { getAllUsers } from '@/lib/api/getAllUsers';
import { useGetUsers } from '@hooks/useUsers';
import { User, UsersResponse } from '@lib/zod/user';

jest.mock('@api/getAllUsers');

const queryClient = new QueryClient();

const TestComponent = ({ limit, page }: { page: number; limit: number }) => {
  const { data, error } = useGetUsers({ limit, page });

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data ? (
        <>
          <h2>Users</h2>
          {data.users.map((user: User) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.about}</p>
            </div>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

describe('useGetUsers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch users successfully', async () => {
    const mockUsersResponse: UsersResponse = {
      page: 1,
      total: 2,
      users: [
        {
          about: 'About User 1',
          company: 'Company A',
          createdAt: '2024-10-01',
          id: '1',
          name: 'User 1',
          role: 'Developer',
          socials: {
            facebook: undefined,
            instagram: undefined,
            linkedin: undefined,
            twitter: undefined,
          },
        },
        {
          about: 'About User 2',
          company: 'Company B',
          createdAt: '2024-10-01',
          id: '2',
          name: 'User 2',
          role: 'Designer',
          socials: {
            facebook: undefined,
            instagram: undefined,
            linkedin: undefined,
            twitter: undefined,
          },
        },
      ],
    };

    (getAllUsers as jest.Mock).mockResolvedValueOnce(mockUsersResponse);

    const { findByText } = render(
      <QueryClientProvider client={queryClient}>
        <TestComponent page={1} limit={10} />
      </QueryClientProvider>
    );

    expect(await findByText('Users')).toBeInTheDocument();
    expect(await findByText('User 1')).toBeInTheDocument();
    expect(await findByText('About User 1')).toBeInTheDocument();
    expect(await findByText('User 2')).toBeInTheDocument();
    expect(await findByText('About User 2')).toBeInTheDocument();
  });
});
