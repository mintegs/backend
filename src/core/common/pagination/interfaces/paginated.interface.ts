export interface Paginated<T> {
  data: T[];
  meta: {
    itemsPerPages: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
  };
}
