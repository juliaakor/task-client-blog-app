export function paginateData<T>(data: T[], page: number, limit: number) {
  const start = (page - 1) * limit;
  const paginatedData = data.slice(start, start + limit);

  return paginatedData;
}
