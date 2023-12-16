import { Pagination } from './pagination';

const container = document.getElementById('exercises-pagination-container');
const exercisesPagination = new Pagination(
  'exercises-pagination-container',
  container
);

export { exercisesPagination };
