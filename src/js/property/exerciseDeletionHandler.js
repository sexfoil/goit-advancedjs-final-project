import { displayError } from '../utils/helpers.js';
import { updateFavorities } from '../favorites.js';
import {
  checkFavoriteExercises,
  addToFavorites,
  removeFromFavorite,
} from '../localstorage';
import {
  favoriteBtnContent,
  fillExerciseModal,
  clearExerciseModal,
} from '../modals';

let currentList;

const modalOverlay = document.querySelector('.modal-overlay');
let exerciseModalElements;

export async function showExerciseModal(event) {
  const exerciseItem = event.target.closest('.exercises_item');
  currentList = event.currentTarget.closest('.exercises_content');

  if (!exerciseItem) return;

  const { id: exerciseId } = exerciseItem;

  if (event.target.dataset && event.target.dataset.card) {
    removeFromFavorite(exerciseItem.id);
    updateFavorities();
    return;
  }

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
      handleFovoriteExercise
    );
    document.addEventListener('keydown', handleEscClick);
  } catch (error) {
    modalOverlay.classList.add('display-none-js');
    displayError(error.message);
  }
}

export function closeExerciseModal() {
  modalOverlay.classList.add('display-none-js');
  exerciseModalElements.closeBtn.removeEventListener(
    'click',
    closeExerciseModal
  );
  modalOverlay.removeEventListener('click', closeExerciseModal);
  exerciseModalElements.favoriteBtn.removeEventListener(
    'click',
    handleFovoriteExercise
  );

  clearExerciseModal();
}

function handleFovoriteExercise(event) {
  event.stopPropagation();

  const exercise = event.target.closest('.modal-exercise');
  const updatePage = currentList.hasAttribute('data-info');
  const exerciseId = exercise.dataset.exerciseId;

  if (checkFavoriteExercises(exerciseId)) {
    removeFromFavorite(exerciseId);
    if (updatePage) {
      updateFavorities();
    }
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
