import axios from 'axios';
import url from './property/url.js';

function getExercisesByCategory(page = 1, limit = 12, filter = 'Muscles') {
  const params = { filter, page, limit };
  const fullUrl = getUrl(url.FILTERS, getParameters(params));

  return requestGET(fullUrl);
}

function getExercisesByKeyword(
  page = 1,
  limit = 10,
  category,
  categoryName,
  keyword = ''
) {
  const params = {
    page,
    limit,
    keyword,
  };
  params[category] = categoryName;
  const fullUrl = getUrl(url.EXERCISES, getParameters(params));

  return requestGET(fullUrl);
}

function getQuote() {
  return requestGET(getUrl(url.QUOTE));
}

function getExerciseById(id) {
  const fullUrl = getUrl(url.EXERCISES) + `/${id}`;

  return requestGET(fullUrl);
}

async function subscribe(email) {
  const fullUrl = getUrl(url.SUBSCRIPTION);
  const requestBody = { email };

  return requestPOST(fullUrl, requestBody);
}

function rateExercise(id, rate = 0, email = '', review = '') {
  const fullUrl = getUrl(url.EXERCISES) + `/${id}${url.RATING}`;
  const requestBody = { rate, email, review };
  return requestPATCH(fullUrl, requestBody);
}

async function requestGET(url) {
  return axios
    .get(url)
    .then(result => result.data)
    .catch(err => err.response);
}

async function requestPOST(url, body) {
  return axios
    .post(url, body)
    .then(result => result)
    .catch(err => err.response);
}

async function requestPATCH(url, body) {
  return axios
    .patch(url, body)
    .then(result => result)
    .catch(err => err.response);
}

function getParameters(parameters) {
  return new URLSearchParams(parameters);
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
