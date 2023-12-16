import { getExerciseById } from './api';
import { checkFavoriteExercises } from './localstorage';

export async function fillExerciseModal(exerciseId) {
  const dataCellNames = {
    bodyPart: 'Body Part',
    burnedCalories: 'Burned Calories',
    equipment: 'Equipment',
    popularity: 'Popularity',
    target: 'Target',
    time: 'Time',
  };

  const elements = {
    modal: document.querySelector('.modal-exercise'),
    title: document.querySelector('.modal-exercise .title'),
    rating: document.querySelector('.modal-exercise .rating'),
    dataWrapper: document.querySelector('.modal-exercise .data-wrapper'),
    description: document.querySelector('.modal-exercise .description'),
    favouriteBtn: document.querySelector('.favourite-btn'),
  };

  elements.modal.setAttribute('data-exercise-id', exerciseId);

  const data = await getExerciseById(exerciseId);

  const { description, name, rating, gifUrl } = data;

  if (gifUrl) {
    elements.modal.insertAdjacentHTML(
      'afterbegin',
      `
        <div class="image-wrapper">
          <image class="image" src="${gifUrl}" alt="${name}" />
        </div>
      `
    );
  }

  elements.title.innerHTML = name;
  elements.rating.innerHTML = `${Number(rating).toFixed(1)}`;
  elements.description.innerHTML = description;
  elements.favouriteBtn.innerHTML = checkFavoriteExercises(exerciseId)
    ? 'Remove from favorites'
    : 'Add to favorites';

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

  const stars = document.querySelectorAll('.modal-exercise .star-icon');
  let starsCounter = 0;

  for (let star of stars) {
    if (rating - starsCounter > 1) {
      star.style.fill = '#eea10c';
      starsCounter++;
    } else {
      const breakPoint = (rating - starsCounter) * 100;
      star.insertAdjacentHTML(
        'afterbegin',
        `
          <linearGradient id="linear-gradient">
            <stop offset="${breakPoint}%" stop-color="#eea10c"/>
            <stop offset="${breakPoint}%" stop-color="rgba(244, 244, 244, 0.2)"/>
          </linearGradient>
        `
      );
      star.style.fill = 'url(#linear-gradient)';
      break;
    }
  }
}

export async function clearExerciseModal() {
  const elements = {
    modal: document.querySelector('.modal-exercise'),
    imageWrapper: document.querySelector('.modal-exercise .image-wrapper'),
    title: document.querySelector('.modal-exercise .title'),
    rating: document.querySelector('.modal-exercise .rating'),
    dataWrapper: document.querySelector('.modal-exercise .data-wrapper'),
    description: document.querySelector('.modal-exercise .description'),
    favouriteBtn: document.querySelector('.favourite-btn'),
  };

  elements.modal.removeAttribute('data-exercise-id');

  if (elements.imageWrapper) {
    elements.imageWrapper.remove();
  }

  elements.title.innerHTML = '';
  elements.rating.innerHTML = '';
  elements.description.innerHTML = '';
  elements.dataWrapper.innerHTML = '';
  elements.favouriteBtn.innerHTML = '';
}
