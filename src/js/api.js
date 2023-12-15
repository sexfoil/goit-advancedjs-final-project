import axios from 'axios';
import url from './property/url.js';

function getExercisesByCategory(page = 1, limit = 12, filter = 'Muscles') {
  const params = { filter, page, limit };
  const fullUrl = getUrl(url.FILTERS, getParameters(params));

  return requestGetMethod(fullUrl);
}

function getExercisesByKeyword(
  page = 1,
  limit = 10,
  category,
  categoryName,
  keyword
) {
  const params = {
    page,
    limit,
    keyword,
  };
  params[category] = categoryName;
  const fullUrl = getUrl(url.EXERCISES, getParameters(params));

  return requestGetMethod(fullUrl);
}

function getQuote() {
  return requestGetMethod(getUrl(url.QUOTE));
}

function getExerciseById(id) {
  const fullUrl = getUrl(url.EXERCISES) + `/${id}`;

  return requestGetMethod(fullUrl);
}

async function subscribe(email) {
  const response = await axios.post(url.BASE_URL + url.SUBSCRIPTION, {
    email: email,
  });

  return response.data;
}

function rateExercise() {
  return;
}

async function requestGetMethod(url) {
  return axios
    .get(url)
    .then(result => result.data)
    .catch(err => err);
}

function getParameters(template) {
  return new URLSearchParams(template);
}

function getUrl(endpoint, params) {
  return url.BASE_URL + endpoint + (params ? `?${params}` : '');
}

export {
  getExercisesByCategory,
  getExercisesByKeyword,
  getQuote,
  getExerciseById,
  subscribe,
  rateExercise,
};
