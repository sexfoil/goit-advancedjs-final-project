import { getExerciseCardHtml, getCategoryCardHtml } from './utils/html-render';
import * as api from './api.js';
import { attribute } from './property/constants';
import { displayError } from './utils/helpers.js';
import { capitalize } from './utils/text-modifier';
import { exercisesPagination } from './pagination/exercises-pagination.js';
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

const itemList = document.querySelector('.category_content');
const categoryList = document.querySelector('.exercises_nav');
const exerciseList = document.querySelector('.exercises_content');
const exerciseName = document.querySelector('.exercises_name');
const search = document.querySelector('.exercises_search');
const searchInput = document.querySelector('.exercises_search-input');
const searchButton = document.querySelector('.exercises_search-img');

let category = null;
let categorieValue = null;
//Базовая инициализация
async function init() {
  const categories = await api.getExercisesByCategory(
    exercisesPagination.currentPage,
    12
  );
  itemList.innerHTML = getCategoryCardHtml(categories.results);

  return categories.totalPages;
}

init()
  .then(totalPages => {
    exercisesPagination.build({
      totalPages,
      sectionBuilderFunction: init,
      limit: 12,
    });
  })
  .catch(error => console.log(error));
//Слушатели
itemList.addEventListener('click', onCategoryListClick);
categoryList.addEventListener('click', onCategoryClick);
searchButton.addEventListener('click', onSearchButton);
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    onSearchButton(e);
  }
});
//Функции к слушателям
async function onSearchButton(event) {
  event.preventDefault();

  const renderingOnSearchButton = async (
    category,
    categorieValue,
    searchInput
  ) => {
    const { results, totalPages } = await api.getExercisesByKeyword(
      exercisesPagination.currentPage,
      10,
      category,
      categorieValue,
      searchInput.value
    );

    itemList.innerHTML = '';
    exerciseList.innerHTML = '';
    exerciseList.innerHTML = getExerciseCardHtml(
      results,
      category,
      categorieValue
    );
    searchInput.value = '';

    return totalPages;
  };

  const totalPages = await renderingOnSearchButton(
    category,
    categorieValue,
    searchInput
  );

  exercisesPagination.build({
    totalPages,
    sectionBuilderFunction: async () =>
      await renderingOnSearchButton(category, categorieValue, searchInput),
    limit: 12,
  });
}

async function onCategoryClick(event) {
  if (exercisesPagination.currentPage !== 1) {
    exercisesPagination.currentPage = 1;
  }
  try {
    let target = event.target;
    let contentTarget = target.textContent.trim();
    let curentCategory = document.querySelector('.exercises__nav-item-current');

    const toogleClass = (curentCategory, target) => {
      curentCategory.classList.remove('exercises__nav-item-current');
      target.classList.add('exercises__nav-item-current');
    };
    const rendering = async (contentTarget, curentCategory) => {
      const { results, totalPages } = await api.getExercisesByCategory(
        exercisesPagination.currentPage,
        12,
        contentTarget
      );
      itemList.innerHTML = '';
      exerciseList.innerHTML = '';
      itemList.innerHTML = getCategoryCardHtml(results);

      return totalPages;
    };

    toogleClass(curentCategory, target);
    const totalPages = await rendering(contentTarget, curentCategory);

    exercisesPagination.build({
      totalPages: totalPages,
      sectionBuilderFunction: async () =>
        await rendering(contentTarget, curentCategory),
      limit: 12,
    });
    exerciseName.style = 'display: none;';
    search.style = 'display: none;';
  } catch (error) {
    displayError(error.message);
  }
}

async function onCategoryListClick(event) {
  try {
    event.preventDefault();
    if (exercisesPagination.currentPage !== 1) {
      exercisesPagination.currentPage = 1;
    }

    const data = event.target.dataset[attribute.DATA_INFO].split(
      attribute.DATA_INFO_DELIMETER
    );
    // let label = data[0].toLocaleLowerCase();
    // let value = data[1].toLocaleLowerCase();

    category = data[0].toLowerCase();
    categorieValue = data[1];

    const renderingOnCategoryListClick = async (category, categorieValue) => {
      const { results, totalPages } = await fetchPromise(
        category,
        categorieValue
      );

      await handleResult({ results });
      addExercisesName();

      return totalPages;
    };

    const fetchPromise = async (label, value) => {
      return await api.getExercisesByKeyword(
        exercisesPagination.currentPage,
        12,
        label,
        value
      );
    };

    const handleResult = async ({ results }) => {
      itemList.innerHTML = '';
      exerciseList.innerHTML = getExerciseCardHtml(
        results,
        category,
        categorieValue
      );
    };
    const addExercisesName = () => {
      exerciseName.style = 'display: block;';
      exerciseName.textContent = capitalize(data[1]);
      search.style = 'display: block';
      searchInput.value = '';
    };

    const totalPages = await renderingOnCategoryListClick(
      category,
      categorieValue
    );

    exercisesPagination.build({
      totalPages: totalPages,
      sectionBuilderFunction: async () =>
        await renderingOnCategoryListClick(category, categorieValue),
      limit: 12,
    });
  } catch (error) {
    displayError(error.message);
  }
}

// const resp = await api.getExercisesByKeyword(1, 10, 'bodypart', 'back', 'back');
// console.log(resp);

// const quote = document.querySelector('.exercises_quote');
// const q = await api.getQuote();
// console.log(q);
// quote.innerHTML = `"${q.quote}"<br><br> ${q.author}`;

// const data = await api.subscribe('api34@mail.com');
// console.log(data);

// const rate = await api.rateExercise(
//   '64f389465ae26083f39b17a2',
//   5,
//   'api33333@mail.com',
//   'Cool'
// );
// console.log(rate);

document.querySelector('.nav-item_home').classList.add('active');
document.querySelector('.nav-item_favorites').classList.remove('active');

// Scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('scrollToTopButton').style.display = 'block';
  } else {
    document.getElementById('scrollToTopButton').style.display = 'none';
  }
}

// Когда пользователь нажимает на кнопку
document.getElementById('scrollToTopButton').onclick = function () {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
};

// Exercise modal
const modalOverlay = document.querySelector('.modal-overlay');

let exerciseModalElements;

document
  .querySelector('.exercises_content')
  .addEventListener('click', showExerciseModal);

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
