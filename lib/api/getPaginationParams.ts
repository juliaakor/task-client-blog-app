import { MIN_DEFAULT_PARAM_VALUE, PAGE_NUMBER_DEFAULT } from '@constants/api';

export const getPaginationParams = (searchParams: URLSearchParams, defaultLimit: number) => {
  const page = Math.max(Number(searchParams.get('page')), MIN_DEFAULT_PARAM_VALUE) || PAGE_NUMBER_DEFAULT;
  const limit = Math.max(Number(searchParams.get('limit')), MIN_DEFAULT_PARAM_VALUE) || defaultLimit;

  return { limit, page };
};
