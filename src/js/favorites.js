import { getExerciseCardHtml } from './utils/html-render';
import { favoriteItem } from './localstorage';
import { exercisesPagination } from './pagination/exercises-pagination';

///in APIs
function getFavoriesExercises(page, limit) {
  const arr = [
    favoriteItem,
    favoriteItem,
    favoriteItem,
    favoriteItem,
    favoriteItem,
    favoriteItem,
    favoriteItem,
    favoriteItem,
    favoriteItem,
  ];

  const totalItems = arr.lengh;
  const startWith = (page - 1) * limit;
  const endWith = page * limit;

  const perPage = limit;
  const totalPages = totalItems / limit;
  const results = arr.slice[(startWith, endWith)];

  return { page, perPage, totalPages, results };
}

function renderFavoriesExercises(page, limit) {
  const favorites = document.querySelector('.exercises_content');

  const data = getFavoriesExercises(page, limit);
  favorites.innerHTML = getExerciseCardHtml(arr);

  return data;

  // const h = getExerciseCardHtml([]);
  // console.log(h);
  // favorites.innerHTML = h;
}

export { renderFavoriesExercises };

///somewhere else in code
//onClick in header
const data = renderFavoriesExercises(1, 12);

exercisesPagination.create({
  totalPages: data.totalPages,
  renderFunction: renderFavoriesExercises,
  limit: 12,
});
