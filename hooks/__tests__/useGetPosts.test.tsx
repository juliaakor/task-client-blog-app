import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

import { getAllPosts } from '@/lib/api/getAllPosts';
import { GetPostsProps } from '@/lib/api/postUtils';
import { useGetPosts } from '@hooks/usePosts';

jest.mock('@api/getAllPosts');

const queryClient = new QueryClient();

const TestComponent = ({ params }: { params: GetPostsProps }) => {
  const { data, error, isLoading } = useGetPosts(params);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data?.posts.map((post) => <div key={post.id}>{post.name}</div>)}</div>;
};

describe('useGetPosts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch posts successfully', async () => {
    const mockPosts = {
      page: 1,
      posts: [
        { category: 'tech', content: 'Content 1', createdAt: '2024-10-01', id: '1', name: 'Post 1', tags: [] },
        { category: 'health', content: 'Content 2', createdAt: '2024-10-02', id: '2', name: 'Post 2', tags: [] },
      ],
      total: 2,
    };

    (getAllPosts as jest.Mock).mockResolvedValueOnce(mockPosts);

    const { findByText } = render(
      <QueryClientProvider client={queryClient}>
        <TestComponent params={{ category: 'tech', limit: 10, page: 1 }} />
      </QueryClientProvider>
    );

    expect(await findByText('Post 1')).toBeInTheDocument();
    expect(await findByText('Post 2')).toBeInTheDocument();
  });
});
