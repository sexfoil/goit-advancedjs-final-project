import { text, attribute } from '../property/constants';
import { capitalize } from './text-modifier';

export function getFavoritesCardHtml(favorites, category, categoryName) {
  if (!favorites.length) {
    return `<li class="empty-favorites usual-text">${text.EMPTY_FAVORITES}</li>`;
  }
  return getHtml(favorites, category, categoryName, true);
}

export function getExerciseCardHtml(exercises, category, categoryName) {
  if (!exercises.length) {
    return `<li class="empty-exercises usual-text">${text.EMPTY_SEARCH}</li>`;
  }
  return getHtml(exercises, category, categoryName, false);
}

function getHtml(cards, category, categoryName, isFavorites) {
  return cards
    .map(({ _id, name, burnedCalories, time, target, rating }) => {
      return `
            <li class="exercises_item" id="${_id}">
                <div class="exercise-card-header">
                    <div class="card-workout">
                        <div class="card-workout-logo card-text-logo">Workout</div>
                        <div class="workout-logo-addon text-usual">${getLogoSvg(
                          isFavorites,
                          _id,
                          rating
                        )}</div>
                    </div>
                    <div class="card-start">
                        <div class="card-start-name usual-text">Start</div>
                        <div class="card-start-arrow">${svg.arrow}</div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="card-body-logo">${svg.runner}</div>
                    <div class="card-body-name card-text-name">
                        ${capitalize(name)}
                    </div>
                </div>

                <div class="card-footer">
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Burned calories: </span>
                        <span class="long-text">
                            ${burnedCalories} / ${time} min
                        </span>
                    </div>
                    <div class="card-info card-text-info">
                        <span class="info-item-name">
                          ${capitalize(category)}: </span>
                        <span class="long-text">
                            ${capitalize(categoryName)}
                        </span>
                    </div>
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">
                            ${capitalize(target)}
                        </span>
                    </div>
                </div>
            </li>
        `;
    })
    .join('');
}

export function getCategoryCardHtml(category) {
  return category
    .map(({ filter, name, imgURL }) => {
      const dataAttribute = `data-${attribute.DATA_INFO}="${capitalize(
        filter
      )}:${name}"`;
      return `
            <li class="category-item" ${dataAttribute}>
                <div class="category-item-container" ${dataAttribute}>
                    <img class="category-img" src="${imgURL}" alt="${name}" ${dataAttribute}/>
                    <div class="category-text-content" ${dataAttribute}>
                        <h3 ${dataAttribute}>${capitalize(name)}</h3>
                        <p  ${dataAttribute}>${capitalize(filter)}</p>
                    </div>
                </div>
            </li>
        `;
    })
    .join('');
}

function getLogoSvg(isFavorites, id, rating) {
  if (isFavorites) {
    return svg.recycleBin.replace('CARD_ID', id);
  }
  return svg.rating.replace('RATING', convertNumber(rating));
}

const svg = {
  rating: `
    <p class="text-usuala">RATING</p>
    <svg class="card-icon-star" width="18" height="22">
        <use href="./img/icons.svg#yellow-star"></use>
    </svg>`,
  recycleBin: `
    <svg class="card-icon recycle-bin" data-card="CARD_ID" width="16" height="16">
        <use href="./img/icons.svg#icon-remove" data-card="CARD_ID" ></use>
    </svg>`,
  arrow: `
    <svg class="card-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-arrow"></use>
    </svg>`,
  runner: `
    <svg class="card-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-running-stick"></use>
    </svg>`,
};

function convertNumber(num) {
  const result = String(Math.round(num * 10) / 10);
  const extra = result.includes('.') ? '' : '.0';
  return result + extra;
}
