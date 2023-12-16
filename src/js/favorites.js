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
import { displayError } from './utils/helpers';

const favorites = document.querySelector('.exercises_content');
const modalOverlay = document.querySelector('.modal-overlay');

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

async function showExerciseModal(event) {
  const exerciseId = event.target.closest('.exercises_item').id;

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
  } catch (error) {
    displayError(error.message);
  } finally {
    modalOverlay.classList.add('display-none-js');
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

document.querySelector('.nav-item_home').classList.remove('active');
document.querySelector('.nav-item_favorites').classList.add('active');
