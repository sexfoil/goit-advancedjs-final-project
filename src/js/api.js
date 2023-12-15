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

// Перелік вправ з фільтрацією по категорії та ключовому слову з урахування кількості вправ у запиті та порядкового номеру сторінки
export async function getExercisesName(
  bodypart,
  muscles,
  equipment,
  keyword,
  page
) {
  return axios
    .get(
      url.BASE_URL +
        url.EXERCISES +
        `?bodypart=${bodypart}&muscles=${muscles}&equipment=${equipment}&keyword=${keyword}&page=${page}&limit=10`
    )
    .then(result => result.data)
    .catch(err => err);
}

// запит за детальною інформаціею про вправу по id, буде приймати id обраної вправи
export async function getExercisId(id) {
  return axios
    .get(url.BASE_URL + url.EXERCISES + `/${id}`)
    .then(result => result.data)
    .catch(err => err);
}

// запит за цитатою дня
export async function getQuoteOfTheDay() {
  return axios
    .get(url.BASE_URL + url.QUOTE)
    .then(result => result.data)
    .catch(err => err);
}

// Додавання рейтингу окремій вправі
export async function patchExercisReting(id, rate, email, review) {
  return axios
    .patch(url.BASE_URL + url.EXERCISES + `/${id}` + url.RATING, {
      rate: rate,
      email: email,
      review: review,
    })
    .then(result => result.data)
    .catch(Ererr => errror);
}

// Оформлення підписки на розсилку нових вправ
export async function postSubscriptions(email) {
  return axios
    .post(url.BASE_URL + url.SUBSCRIPTION, {
      email: email,
    })
    .then(result => result.data)
    .catch(err => err);
}
