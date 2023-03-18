export interface IQueryOptions {
  filters: any;
  sort: any;
  populate: any;
  pagination: {
    page: number;
    pageSize: number;
  };
}
