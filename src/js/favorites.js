import { getExerciseCardHtml } from './utils/html-render';
import { favoriteItem } from './localstorage';

const favorites = document.querySelector('.exercises_content');

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
favorites.innerHTML = getExerciseCardHtml(arr);
// const h = getExerciseCardHtml([]);
// console.log(h);
// favorites.innerHTML = h;
