import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

import { Categories } from '@constants/entities';
import { useGetPostById } from '@hooks/usePosts';
import { getPostById } from '@lib/api/getPostById';
import { Post } from '@lib/zod/post';

jest.mock('@lib/api/getPostById');

const queryClient = new QueryClient();

const TestComponent = ({ id }: { id: string }) => {
  const { data, error } = useGetPostById(id);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.name}</h1>
          <p>{data.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

describe('useGetPostById', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch a post by ID successfully', async () => {
    const mockPost: Post = {
      category: Categories.Business,
      content: 'Content for Post 1',
      createdAt: '2024-10-01',
      id: '1',
      image: undefined,
      isFeatured: false,
      name: 'Post 1',
      preview: 'Preview of Post 1',
      tags: [],
      userId: '123',
    };

    (getPostById as jest.Mock).mockResolvedValueOnce(mockPost);

    const { findByText } = render(
      <QueryClientProvider client={queryClient}>
        <TestComponent id="1" />
      </QueryClientProvider>
    );

    expect(await findByText('Post 1')).toBeInTheDocument();
    expect(await findByText('Content for Post 1')).toBeInTheDocument();
  });
});
