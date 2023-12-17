import { getExerciseCardHtml, getCategoryCardHtml } from './utils/html-render';
import * as api from './api.js';
import { attribute } from './property/constants';
import { displayError } from './utils/helpers.js';

const itemList = document.querySelector('.category_content');
const categoryList = document.querySelector('.exercises_nav');
const exerciseList = document.querySelector('.exercises_content');
const exerciseName = document.querySelector('.exercises_name');
const search = document.querySelector('.exercises_search');
const searchInput = document.querySelector('.exercises_search-input');
const searchButton = document.querySelector('.exercises_search-img');

let categorie = null;
let categorieValue = null;
//Базовая инициализация
const categories = await api.getExercisesByCategory(1, 12);
itemList.innerHTML = getCategoryCardHtml(categories.results);
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

  const { results } = await api.getExercisesByKeyword(
    1,
    10,
    categorie,
    categorieValue,
    searchInput.value
  );
  itemList.innerHTML = '';
  exerciseList.innerHTML = '';
  itemList.innerHTML = getExerciseCardHtml(results);
}
async function onCategoryClick(event) {
  try {
    let target = event.target;
    let contentTarget = target.textContent.trim();
    let curentCategory = document.querySelector('.exercises__nav-item-current');

    const toogleClass = async (curentCategory, target) => {
      curentCategory.classList.remove('exercises__nav-item-current');
      target.classList.add('exercises__nav-item-current');
    };
    const rendering = async (contentTarget, curentCategory) => {
      const { results } = await api.getExercisesByCategory(
        1,
        12,
        contentTarget
      );
      itemList.innerHTML = '';
      exerciseList.innerHTML = '';
      searchInput.value = '';

      itemList.innerHTML = getCategoryCardHtml(results);
      return;
    };

    toogleClass(curentCategory, target);
    rendering(contentTarget, curentCategory);
    exerciseName.style = 'display: none;';
    search.style = 'display: none;';
  } catch (error) {
    displayError(error.message);
  }
}

async function onCategoryListClick(event) {
  try {
    event.preventDefault();

    const data = event.target.dataset[attribute.DATA_INFO].split(
      attribute.DATA_INFO_DELIMETER
    );
    // let label = data[0].toLocaleLowerCase();
    // let value = data[1].toLocaleLowerCase();

    categorie = encodeURIComponent(data[0]).toLocaleLowerCase();
    categorieValue = encodeURIComponent(data[1]).toLocaleLowerCase();

    const fetchPromise = async (label, value) => {
      return await api.getExercisesByKeyword(1, 12, label, value);
    };

    const handleResult = async ({ results }) => {
      itemList.innerHTML = '';
      exerciseList.innerHTML = getExerciseCardHtml(results);
    };
    const addExercisesName = () => {
      exerciseName.style = 'display: block;';
      exerciseName.textContent =
        data[1].charAt(0).toUpperCase() + data[1].slice(1);
      search.style = 'display: block';
      searchInput.value = '';
    };
    fetchPromise(categorie, categorieValue)
      .then(handleResult)
      .catch(displayError);
    addExercisesName();
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
