const exercisesList = document.querySelector('.exercises_content');
exercisesList.addEventListener('click', handleDeleteExercise);

function handleDeleteExercise(evt) {
  const target = evt.target;
  if (target.classList.contains('delete-button')) {
    const exerciseItem = target.closest('.exercises_item');
    const exerciseId = exerciseItem.dataset.id;
    removeFromFavourite(exerciseId);
  }
}
