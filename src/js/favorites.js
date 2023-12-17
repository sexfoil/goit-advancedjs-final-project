import { getFavoritesCardHtml } from './utils/html-render';
import {
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
let currentExercise;

export function fillFavorities() {
  const arr = getFavoriteExercises();
  favorites.innerHTML = getFavoritesCardHtml(arr, 'Equipment', 'barbell');
}

fillFavorities();

favorites.addEventListener('click', showExerciseModal);

async function showExerciseModal(event) {
  const exerciseItem = event.target.closest('.exercises_item');

  if (!exerciseItem) return;

  const { id: exerciseId } = exerciseItem;

  modalOverlay.classList.remove('display-none-js');

  try {
    currentExercise = await fillExerciseModal(exerciseId);

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

  const { _id: exerciseId } = currentExercise;

  if (checkFavoriteExercises(exerciseId)) {
    removeFromFavorite(exerciseId);
    exerciseModalElements.favoriteBtn.innerHTML = favoriteBtnContent.add;
  } else {
    addToFavorites(currentExercise);
    exerciseModalElements.favoriteBtn.innerHTML = favoriteBtnContent.remove;
  }

  exerciseModalElements.favoriteBtn.blur();
}

function handleEscClick(event) {
  if (event.key !== 'Escape') return;

  closeExerciseModal();
}

document.querySelector('.nav-item_home').classList.remove('active');
document.querySelector('.nav-item_favorites').classList.add('active');
