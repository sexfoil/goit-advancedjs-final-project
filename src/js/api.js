import axios from 'axios';
import url from './property/url.js';

export async function getExercisesByCategory(
  page = 1,
  limit = 12,
  filter = 'Muscles'
) {
  const params = { filter, page, limit };
  const fullUrl = url.BASE_URL + url.FILTERS + `?${getParameters(params)}`;
  console.log(fullUrl);
  return axios
    .get(fullUrl)
    .then(result => result.data)
    .catch(err => err);
}
// https://your-energy.b.goit.study/api/filters?filter=Muscles&page=1&limit=12
// https://your-energy.b.goit.study/api/filters?filter=Muscles&page=1&limit=12
function getParameters(template) {
  return new URLSearchParams(template);
}

function getUrl(id) {
  return url.BASE_URL + url.EXERCISES + `/${id}`;
}

export async function postSubscription(email) {
  const response = await axios.post(url.BASE_URL + url.SUBSCRIPTION, {
    email: email,
  });

  return response.data;
}
