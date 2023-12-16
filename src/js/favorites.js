import { getExerciseCardHtml } from './utils/html-render';
import {
  favoriteItem,
  checkFavoriteExercises,
  addToFavorites,
  removeFromFavorite,
} from './localstorage';
import {
  favoriteBtnContent,
  fillExerciseModal,
  clearExerciseModal,
} from './modals';

const favorites = document.querySelector('.exercises_content');
let exerciseModalElements;

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
document.querySelectorAll('.exercises_item').forEach(item => {
  item.addEventListener('click', showExerciseModal);
});

function showExerciseModal(event) {
  const exerciseId = event.target.closest('.exercises_item').id;

  fillExerciseModal(exerciseId);

  exerciseModalElements = {
    closeBtn: document.querySelector('#modal-close-button'),
    overlay: document.querySelector('.modal-overlay'),
    favoriteBtn: document.querySelector('.modal-exercise .favorite-btn'),
  };

  exerciseModalElements.overlay.classList.remove('display-none-js');
  exerciseModalElements.overlay.addEventListener('click', closeExerciseModal);
  exerciseModalElements.closeBtn.addEventListener('click', closeExerciseModal);
  exerciseModalElements.favoriteBtn.addEventListener(
    'click',
    handleFovouriteExercise
  );
}

function closeExerciseModal() {
  exerciseModalElements.overlay.classList.add('display-none-js');
  exerciseModalElements.closeBtn.removeEventListener(
    'click',
    closeExerciseModal
  );
  exerciseModalElements.overlay.removeEventListener(
    'click',
    closeExerciseModal
  );
  exerciseModalElements.favoriteBtn.removeEventListener(
    'click',
    handleFovouriteExercise
  );

  clearExerciseModal();
}

function handleFovouriteExercise(event) {
  event.stopPropagation();

  const exerciseId = event.target.closest('.modal-exercise').dataset.exerciseId;

  if (checkFavoriteExercises(exerciseId)) {
    removeFromFavorite(exerciseId);
    elements.favoriteBtn.innerHTML = favoriteBtnContent.add;
  } else {
    addToFavorites(exerciseId);
    elements.favoriteBtn.innerHTML = favoriteBtnContent.remove;
  }

  elements.favoriteBtn.blur();
}

// const h = getExerciseCardHtml([]);
// console.log(h);
// favorites.innerHTML = h;
