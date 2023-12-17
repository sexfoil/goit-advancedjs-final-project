// Назва ключа в LocalStorage
const LS_KEY = 'FavoriteExercises';

// Запис Favorite exercise в LS
// Очікуємо об'єкт exercise якщо не знаходимо в LS об'єкта з
// таким-же id  додаємо об'єкт в LS
function addToFavorites(newItem) {
  let favoriteExercises = getFavoriteExercises();
  const id = newItem._id;
  if (!favoriteExercises.some(item => item._id === id)) {
    const newItem = favoriteItem;
    favoriteExercises.push(newItem);
    localStorage.setItem(LS_KEY, JSON.stringify(favoriteExercises));
  }
}

// Видалення Favorite exercise з LS за _id
function removeFromFavorite(id) {
  let favoriteExercises = getFavoriteExercises();
  favoriteExercises = favoriteExercises.filter(item => item._id !== id);
  localStorage.setItem(LS_KEY, JSON.stringify(favoriteExercises));
  displayFavorites(); // Оновлення сторінки
}

// Получити список favorites з LS або []
function getFavoriteExercises() {
  return JSON.parse(localStorage.getItem(LS_KEY)) || [];
}

// Перевірка списка favorites чи е обʼєкт за id
function checkFavoriteExercises(id) {
  return getFavoriteExercises().some(item => item._id === id);
}

function displayFavorites() {
  const favoriteExercises = getFavoriteExercises();
  console.log(favoriteExercises);
  // Відмалювати Favorites Page
}

/// FAKE EXERCISE
const favoriteItem = {
  _id: '64f389465ae26083f39b17c2',
  bodyPart: 'back',
  equipment: 'barbell',
  gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0037.gif',
  name: 'barbell decline wide-grip pullover',
  target: 'lats',
  description:
    'These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.',
  rating: 3,
  burnedCalories: 307,
  time: 3,
  popularity: 7415,
};

// const addToFavoritesBtn = document.querySelector('.add-to-favourite');
// addToFavoritesBtn.addEventListener('click', () => {
//   const id = addToFavoritesBtn.getAttribute('data-id');
//   let favoriteExercises = favoriteExercises();
//   if (!favoriteExercises.some(item => item._id === id)) {
//     const newItem = favoriteItem; /// ДОДАТИ ЗАПИТ НА ОБЪЕКТ ПО _id !!!!
//     favoriteExercises.push(newItem);
//     localStorage.setItem(LS_KEY, JSON.stringify(favoriteExercises));
//   }
// });

// document.querySelectorAll('.remove-from-favourite').forEach(button => {
//   button.addEventListener('click', () => {
//     const id = button.getAttribute('data-id');
//     removeFromFavorite(id);
//   });
// });

export {
  favoriteItem,
  addToFavorites,
  removeFromFavorite,
  checkFavoriteExercises,
  getFavoriteExercises,
};
