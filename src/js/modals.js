import path from './property/url';
import { getData } from './api';
import { checkFavouriteExercises, removeFromFavourite } from './localstorage';

const favouriteBtn = document.querySelector('.favourite-btn');
const modal = document.querySelector('.modal-exercise');
const exerciseId = modal.dataset.exerciseId;

favouriteBtn.addEventListener('click', handleFovouriteExercise);

if (checkFavouriteExercises(exerciseId)) {
  favouriteBtn.innerHTML = 'Remove from favourites';
}

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
  };

  const url = path.BASE_URL + path.EXERCISES + `/${exerciseId}`;

  const data = await getData(url);

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

function handleFovouriteExercise(event) {
  event.stopPropagation();

  if (checkFavouriteExercises(exerciseId)) {
    removeFromFavourite(exerciseId);
  } else {
    console.log(1);
  }
}
