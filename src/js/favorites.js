import { getFavoritesCardHtml } from './utils/html-render';
import * as delegation from './property/exerciseDeletionHandler.js';
import { getFavoriteExercises } from './localstorage';

const favorites = document.querySelector('.exercises_content');
favorites.setAttribute('data-info', 'favorites');

export function updateFavorities() {
  const arr = getFavoriteExercises();
  favorites.innerHTML = getFavoritesCardHtml(arr, 'Equipment', 'barbell');
}

updateFavorities();

favorites.addEventListener('click', delegation.showExerciseModal);

document.querySelector('.nav-item_home').classList.remove('active');
document.querySelector('.nav-item_favorites').classList.add('active');
