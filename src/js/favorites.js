import { getFavoritesCardHtml } from './utils/html-render';
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
import { displayError } from './utils/helpers';
import { getFavoriteExercises } from './localstorage';

const favorites = document.querySelector('.exercises_content');
const modalOverlay = document.querySelector('.modal-overlay');

let exerciseModalElements;

const arr = getFavoriteExercises();
console.log(arr);
favorites.innerHTML = getFavoritesCardHtml(arr, 'Equipment', 'barbell');

favorites.addEventListener('click', showExerciseModal);

async function showExerciseModal(event) {
  const exerciseItem = event.target.closest('.exercises_item');

  if (!exerciseItem) return;

  const { id: exerciseId } = exerciseItem;

  modalOverlay.classList.remove('display-none-js');

  try {
    await fillExerciseModal(exerciseId);

    exerciseModalElements = {
      closeBtn: document.querySelector('#modal-close-button'),
      favoriteBtn: document.querySelector('.modal-exercise .favorite-btn'),
    };

    modalOverlay.addEventListener('click', closeExerciseModal);
    exerciseModalElements.closeBtn.addEventListener(
      'click',
      closeExerciseModal
    );
    exerciseModalElements.favoriteBtn.addEventListener(
      'click',
      handleFovouriteExercise
    );
    document.addEventListener('keydown', handleEscClick);
  } catch (error) {
    modalOverlay.classList.add('display-none-js');
    displayError(error.message);
  }
}

function closeExerciseModal() {
  modalOverlay.classList.add('display-none-js');
  exerciseModalElements.closeBtn.removeEventListener(
    'click',
    closeExerciseModal
  );
  modalOverlay.removeEventListener('click', closeExerciseModal);
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
    exerciseModalElements.favoriteBtn.innerHTML = favoriteBtnContent.add;
  } else {
    addToFavorites(exerciseId);
    exerciseModalElements.favoriteBtn.innerHTML = favoriteBtnContent.remove;
  }

  exerciseModalElements.favoriteBtn.blur();
}

function handleEscClick(event) {
  if (event.key !== 'Escape') return;

  closeExerciseModal();
}

// const h = getExerciseCardHtml([]);
// console.log(h);
// favorites.innerHTML = h;

document.querySelector('.nav-item_home').classList.remove('active');
document.querySelector('.nav-item_favorites').classList.add('active');
