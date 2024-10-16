import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

import { getUserById } from '@api/getUserById';
import { useGetUserById } from '@hooks/useUsers';
import { User } from '@lib/zod/user';

jest.mock('@api/getUserById');

const queryClient = new QueryClient();

const TestComponent = ({ userId }: { userId: string }) => {
  const { data, error } = useGetUserById(userId);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data ? (
        <div>
          <h2>{data.name}</h2>
          <p>{data.about}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

describe('useGetUserById', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch user by ID successfully', async () => {
    const mockUser: User = {
      about: 'About John Doe',
      company: 'Company A',
      createdAt: '2024-10-01',
      id: '1',
      name: 'John Doe',
      role: 'Developer',
      socials: {
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined,
        twitter: undefined,
      },
    };

    (getUserById as jest.Mock).mockResolvedValueOnce(mockUser);

    const { findByText } = render(
      <QueryClientProvider client={queryClient}>
        <TestComponent userId="1" />
      </QueryClientProvider>
    );

    expect(await findByText('John Doe')).toBeInTheDocument();
    expect(await findByText('About John Doe')).toBeInTheDocument();
  });
});
