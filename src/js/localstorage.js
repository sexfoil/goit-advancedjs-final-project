import { getExerciseById } from './api';
import { fillFavorities } from './favorites';

// Запис Favorite exercise в LS
// Очікуємо об'єкт exercise якщо не знаходимо в LS об'єкта з
// таким-же id  додаємо об'єкт в LS
async function addToFavorites(id) {
  let favoriteExercises = getFavoriteExercises();
  if (!favoriteExercises.some(item => item._id === id)) {
    const newItem = await getExerciseById(id);
    favoriteExercises.push(newItem);
    localStorage.setItem(
      'FavoriteExercises',
      JSON.stringify(favoriteExercises)
    );
  }
}

// Видалення Favorite exercise з LS за _id
function removeFromFavorite(id) {
  let favoriteExercises = getFavoriteExercises();
  favoriteExercises = favoriteExercises.filter(item => item._id !== id);
  localStorage.setItem('FavoriteExercises', JSON.stringify(favoriteExercises));
  displayFavorites(); // Оновлення сторінки
}

// Получити список favorites з LS або []
function getFavoriteExercises() {
  return JSON.parse(localStorage.getItem('FavoriteExercises')) || [];
}

// Перевірка списка favorites чи е обʼєкт за id
function checkFavoriteExercises(id) {
  return getFavoriteExercises().some(item => item._id === id);
}

function displayFavorites() {
  fillFavorities();
}

export {
  addToFavorites,
  removeFromFavorite,
  checkFavoriteExercises,
  getFavoriteExercises,
};
