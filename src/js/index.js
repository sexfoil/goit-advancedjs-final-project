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

const categories = await api.getExercisesByCategory(1, 12);
itemList.innerHTML = getCategoryCardHtml(categories.results);

itemList.addEventListener('click', onCategoryListClick);
categoryList.addEventListener('click', onCategoryClick);
searchButton.addEventListener('click', onSearchButton);
async function onSearchButton(event) {
  const data = await api.getExercisesByKeyword(
    1,
    10,
    'filter',
    '',
    searchInput.value
  );

  event.preventDefault();
  console.log('====================================');
  console.log(data);
  console.log('====================================');
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

    let label = encodeURIComponent(data[0]).toLocaleLowerCase();
    let value = encodeURIComponent(data[1]).toLocaleLowerCase();
    console.log(value);
    console.log(label);
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
    };
    fetchPromise(label, value).then(handleResult).catch(displayError);
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
