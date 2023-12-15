import { text } from '../property/text';
import { capitalize } from './text-modifier';

export function getExerciseCardHtml(exercises) {
  if (!exercises.length) {
    return `<li class="empty-exercises usual-text">${text.EMPTY_FAVORITES}</li>`;
  }
  return exercises
    .map(({ _id, name, bodyPart, burnedCalories, time, target }) => {
      return `
            <li class="exercises_item" id="${_id}">
                <div class="exercise-card-header">
                    <div class="card-workout">
                        <div class="card-workout-logo card-text-logo">Workout</div>
                        <div>🎁</div>
                    </div>
                    <div class="card-start">
                        <div class="card-start-name">Start</div>
                        <div class="card-start-arrow">=></div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-body-logo">♿</div>
                    <div class="card-body-name card-text-name">${capitalize(
                      name
                    )}</div>
                </div>

                <div class="card-footer">
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Burned calories: </span>
                        <span class="long-text">${burnedCalories} / ${time} min</span>
                        <span class="info-item-name">Body part: </span>
                        <span class="long-text">${capitalize(bodyPart)}</span>
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">${capitalize(target)}</span>
                    </div>
                </div>
            </li>
        `;
    })
    .join('');
}

export function getCategoryCardHtml(category) {
  return exercises
    .map(({ _id, name, bodyPart, burnedCalories, time, target }) => {
      return `
            <li class="exercises_item" id="${_id}">
                <div class="exercise-card-header">
                    <div class="card-workout">
                        <div class="card-workout-logo card-text-logo">Workout</div>
                        <div>🎁</div>
                    </div>
                    <div class="card-start">
                        <div class="card-start-name">Start</div>
                        <div class="card-start-arrow">=></div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-body-logo">♿</div>
                    <div class="card-body-name card-text-name">${capitalize(
                      name
                    )}</div>
                </div>

                <div class="card-footer">
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Burned calories: </span>
                        <span class="long-text">${burnedCalories} / ${time} min</span>
                        <span class="info-item-name">Body part: </span>
                        <span class="long-text">${capitalize(bodyPart)}</span>
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">${capitalize(target)}</span>
                    </div>
                </div>
            </li>
        `;
    })
    .join('');
}
