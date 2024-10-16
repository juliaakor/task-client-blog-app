import { QueryClient } from '@tanstack/react-query';

export interface ProviderProps {
  children: React.ReactNode;
  context?: React.Context<QueryClient | undefined>;
}
