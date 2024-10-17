'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { apiUseQueryOptions } from '@lib/api';
import { getAllPosts } from '@lib/api/getAllPosts';

import { ProviderProps } from './types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: apiUseQueryOptions,
  },
});

const DEFAULT_PREFETCH_POSTS_LIMIT = 10;
const DEFAULT_PREFETCH_USERS_LIMIT = 4;
const DEFAULT_PREFETCH_PAGE = 1;

queryClient.prefetchQuery({
  queryFn: () => getAllPosts({ limit: DEFAULT_PREFETCH_POSTS_LIMIT, page: DEFAULT_PREFETCH_PAGE }),
  queryKey: ['posts', DEFAULT_PREFETCH_PAGE, DEFAULT_PREFETCH_POSTS_LIMIT],
});

queryClient.prefetchQuery({
  queryFn: () => getAllPosts({ limit: DEFAULT_PREFETCH_USERS_LIMIT, page: DEFAULT_PREFETCH_PAGE }),
  queryKey: ['users', DEFAULT_PREFETCH_PAGE, DEFAULT_PREFETCH_USERS_LIMIT],
});

export const Provider = ({ children, ...props }: ProviderProps) => {
  return (
    <QueryClientProvider client={queryClient} {...props}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
