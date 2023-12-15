/// FAKE EXERCISE
export const favoriteItem = {
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

// Назва ключа в LocalStorage
const LSLIST = 'FavoriteExercises';

// Запис Favorite exercise в LS
// Очікуємо id exercise якщо не знаходимо в списку з LS об'єкта з
// таким-же id то отримуємо об'єкт та додаємо його в LS
// const addToFavoritesBtn = document.querySelector('.add-to-favourite');

// addToFavoritesBtn.addEventListener('click', () => {
//   const id = addToFavoritesBtn.getAttribute('data-id');
//   let favouriteExercises = getFavouriteExercises();
//   if (!favouriteExercises.some(item => item._id === id)) {
//     const newItem = favoriteItem; /// ДОДАТИ ЗАПИТ НА ОБЪЕКТ ПО _id !!!!
//     favouriteExercises.push(newItem);
//     localStorage.setItem(LSLIST, JSON.stringify(favouriteExercises));
//   }
// });

// Получити список карток та додати обробку клік
document.querySelectorAll('.remove-from-favourite').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.getAttribute('data-id');
    removeFromFavourite(id);
  });
});

// Видалення Favorite exercise з LS за _id
function removeFromFavourite(id) {
  let favouriteExercises = getFavouriteExercises();
  favouriteExercises = favouriteExercises.filter(item => item._id !== id);
  localStorage.setItem(LSLIST, JSON.stringify(favouriteExercises));
  displayFavourites(); // Оновлення сторінки
}

// Получити список favorites з LS або []
function getFavouriteExercises() {
  return JSON.parse(localStorage.getItem(LSLIST)) || [];
}

// Перевірка списка favorites чи е обʼєкт за id
function checkFavouriteExercises(id) {
  let favouriteExercises = getFavouriteExercises();
  result = favouriteExercises.some(item => item._id === id);
  // Повертаемо TRUE якщо знайшли обʼєкт за ID у LocalStorage
  console.log('Obj already exist - ', result);
  return result;
}

function displayFavourites() {
  const favouriteExercises = getFavouriteExercises();
  console.log(favouriteExercises);
  // Відмалювати Favorites Page
}
