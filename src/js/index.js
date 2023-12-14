import { path, getData } from './api.js';

function handleCloseModal() {
  document.querySelector('.overlay').classList.add('display-none-js');
}

document
  .querySelector('#modal-close-button')
  .addEventListener('click', handleCloseModal);

async function fillExerciseModal(exerciseId) {
  const dataCellNames = {
    bodyPart: 'Body Part',
    burnedCalories: 'Burned Calories',
    equipment: 'Equipment',
    popularity: 'Popularity',
    target: 'Target',
    time: 'Time',
  };

  const elements = {
    imageWrapper: document.querySelector('.modal-exercise .image-wrapper'),
    title: document.querySelector('.modal-exercise .title'),
    rating: document.querySelector('.modal-exercise .rating'),
    dataWrapper: document.querySelector('.modal-exercise .data-wrapper'),
    description: document.querySelector('.modal-exercise .description'),
  };

  const url = path.BASE_URL + path.EXERCISES + `/${exerciseId}`;

  const data = await getData(url);

  const { description, name, rating, gifUrl } = data;

  elements.imageWrapper.innerHTML = `<image class="image" src="${gifUrl}" alt="${name}" />`;
  elements.title.innerHTML = name;
  elements.rating.innerHTML = rating;
  elements.description.innerHTML = description;

  for (let dataCellName of Object.keys(dataCellNames)) {
    if (data[dataCellName]) {
      elements.dataWrapper.insertAdjacentHTML(
        'beforeend',
        `
          <div class="data-cell">
            <div class="data-name">${dataCellNames[dataCellName]}</div>
            <div class="data-value">${data[dataCellName]}</div>
          </div>
        `
      );
    }
  }
}

fillExerciseModal('64f389465ae26083f39b17a2');
