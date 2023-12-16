document.addEventListener('DOMContentLoaded', function () {
  const openRatingBtn = document.querySelector('.open-rating-modal-btn');
  const ratingModal = document.querySelector('.rating-modal');
  const closeRatingBtn = document.querySelector('.close-rating-modal-btn');
  const exerciseModal = document.querySelector('.modal-exercise');

  openRatingBtn.addEventListener('click', function () {
    ratingModal.style.display = 'block';
    exerciseModal.style.display = 'none';
  });

  closeRatingBtn.addEventListener('click', function () {
    ratingModal.style.display = 'none';
    exerciseModal.style.display = 'block';
  });

  const ratingForm = document.getElementById('rating-form');
  ratingForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(ratingForm);
    const ratingValue = formData.get('rating');
    const emailValue = formData.get('email');

    try {
      const response = await axios.patch(
        `${path.BASE_URL}${path.EXERCISES}/exerciseID${path.RATING}`,
        {
          rating: ratingValue,
          email: emailValue,
        }
      );

      if (response.data.success) {
        alert('Rating added successfully!');
        ratingModal.style.display = 'none';
        exerciseModal.style.display = 'block';
        // Оновлення рейтингу в вікні вправи (реалізуйте це згідно вашої структури)
        updateExerciseRating(response.data.averageRating);
      } else {
        alert('Error adding rating: ' + response.data.error);
      }
    } catch (error) {
      console.error('Error making API request:', error);
      alert('An error occurred while processing your request.');
    }
  });

  function updateExerciseRating(averageRating) {
    const exerciseRatingWrapper = document.querySelector('.rating-wrapper');
    const stars = exerciseRatingWrapper.querySelectorAll('.star-icon');
    const lastStar = stars[stars.length - 1];

    for (let i = 0; i < stars.length; i++) {
      if (i < Math.floor(averageRating)) {
        stars[i].classList.add('filled');
      } else {
        stars[i].classList.remove('filled');
      }
    }

    // Враховуємо часткове закрашення останньої зірки через градієнт
    const decimalPart = averageRating % 1;
    lastStar.style.background = `linear-gradient(90deg, #ffd700 ${
      decimalPart * 100
    }%, transparent ${decimalPart * 100}%)`;
  }
});
