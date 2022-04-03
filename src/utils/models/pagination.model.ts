export class Pagination {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: any[];
  constructor(page: number, per_page: number, count: number, data: any[]) {
    this.page = per_page > 0 ? page : 1;
    this.per_page = per_page > 0 ? per_page : count;
    this.total = count;
    this.total_pages = per_page > 0 ? Math.ceil(count / per_page) : 1;
    this.data = data;
  }
}
