import axios from 'axios';

export const path = {
  BASE_URL: 'https://your-energy.b.goit.study/api',
  EXERCISES: '/exercises',
  FILTERS: '/filters',
  QUOTE: '/quote',
  SUBSCRIPTION: '/subscription',
  RATING: '/rating',
};

export async function getData(url) {
  return axios.get(url).then(result => result.data);
}
