import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { apiUseQueryOptions } from '@lib/api';

import { ProviderProps } from './types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: apiUseQueryOptions,
  },
});

export const Provider = ({ children, ...props }: ProviderProps) => {
  return (
    <QueryClientProvider client={queryClient} {...props}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
