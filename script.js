document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');
  const nextButton = document.querySelector('#next-button');
  const form = document.querySelector('#feedback-form');
  const container = document.querySelector('.container');
  let selectedRating = 0;

  // Star selection logic
  stars.forEach(star => {
    star.addEventListener('click', (event) => {
      selectedRating = event.target.getAttribute('data-value');
      highlightStars(selectedRating);
    });
  });

  // Show form if rating is less than 4
  nextButton.addEventListener('click', () => {
    if (selectedRating < 4) {
      container.classList.add('swipe-away');
      setTimeout(() => {
        container.style.display = 'none';
        form.style.display = 'block';
      }, 500);
    } else {
      alert('Thank you for your high rating! You will be redirected to the Google Reviews page.');
      window.location.href = 'https://www.google.com/search'; // Replace with actual URL
    }
  });

  // Highlight stars function
  function highlightStars(rating) {
    stars.forEach(star => {
      if (star.getAttribute('data-value') <= rating) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  }
});
