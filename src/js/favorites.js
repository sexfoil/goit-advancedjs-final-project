import { getExerciseCardHtml } from './utils/html-render';
import {
  favoriteItem,
  checkFavoriteExercises,
  addToFavorites,
  removeFromFavorite,
} from './localstorage';
import { fillExerciseModal, clearExerciseModal } from './modals';

const favorites = document.querySelector('.exercises_content');
let elements;

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
const exerciseItems = document.querySelectorAll('.exercises_item');

function showExerciseModal(event) {
  const exerciseId = event.target.closest('.exercises_item').id;
  elements = {
    closeBtn: document.querySelector('#modal-close-button'),
    overlay: document.querySelector('.modal-overlay'),
    favouriteBtn: document.querySelector('.favourite-btn'),
  };

  document.querySelector('.modal-overlay').classList.remove('display-none-js');

  fillExerciseModal(exerciseId);

  elements.closeBtn.addEventListener('click', closeExerciseModal);
  elements.overlay.addEventListener('click', closeExerciseModal);
  elements.favouriteBtn.addEventListener('click', handleFovouriteExercise);
}

function closeExerciseModal() {
  document.querySelector('.modal-overlay').classList.add('display-none-js');

  clearExerciseModal();

  elements.closeBtn.removeEventListener('click', closeExerciseModal);
  elements.overlay.removeEventListener('click', closeExerciseModal);
  elements.favouriteBtn.removeEventListener('click', handleFovouriteExercise);
}

function handleFovouriteExercise(event) {
  event.stopPropagation();

  const exerciseId = event.target.closest('.modal-exercise').dataset.exerciseId;

  if (checkFavoriteExercises(exerciseId)) {
    removeFromFavorite(exerciseId);
    elements.favouriteBtn.innerHTML = 'Add to favorites';
  } else {
    addToFavorites(exerciseId);
    elements.favouriteBtn.innerHTML = 'Remove from favorites';
  }
}

exerciseItems.forEach(item => {
  item.addEventListener('click', showExerciseModal);
});
console.log(exerciseItems);
// const h = getExerciseCardHtml([]);
// console.log(h);
// favorites.innerHTML = h;
