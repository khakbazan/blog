export type PaginationInfo = {
  totalPages?: number;
  currentPage?: number;
  nextPage?: number;
  lastPage?: number;
};

export type PaginationParams = {
  pageNumber?: number;
  pageSize?: number;
};

export type ApiError = {
  message: string;
};
