import { getExerciseCardHtml, getCategoryCardHtml } from './utils/html-render';
import * as api from './api.js';
import { attribute } from './property/constants';
import { capitalize } from './utils/text-modifier';
import { exercisesPagination } from './pagination/exercises-pagination.js';
import { showExerciseModal } from './property/exerciseDeletionHandler.js';

const itemList = document.querySelector('.category_content');
const categoryList = document.querySelector('.exercises_nav');
const exerciseList = document.querySelector('.exercises_content');
const exerciseName = document.querySelector('.exercises_name');
const search = document.querySelector('.exercises_search');
const searchInput = document.querySelector('.exercises_search-input');
const searchButton = document.querySelector('.exercises_search-img');

itemList.innerHTML = '';
exerciseList.innerHTML = '';
exerciseList.removeAttribute('data-info');

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
    console.log(results);
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

    category = data[0] === 'Body parts' ? 'bodypart' : data[0].toLowerCase();
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

document
  .querySelector('.exercises_content')
  .addEventListener('click', showExerciseModal);
