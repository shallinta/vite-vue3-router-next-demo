export interface Page<T> {
  list: T[];
  pageInfo: PageInfo;
}
export interface PageInfo {
  totalItem: number;
  totalPage: number;
  pageSize: number;
  currentPage: number;
}