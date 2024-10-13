document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');
  const nextButton = document.getElementById('next-btn');
  const ratingContainer = document.getElementById('rating-container');
  const feedbackForm = document.getElementById('feedback-form');
  let selectedRating = 0;

  stars.forEach(star => {
    star.addEventListener('click', function() {
      selectedRating = this.getAttribute('data-value');
      highlightStars(selectedRating);
      nextButton.style.display = 'block'; // Show the Next button after selecting a rating
    });
  });

  nextButton.addEventListener('click', function() {
    if (selectedRating >= 4) {
      // Redirect to Google reviews for 4 stars or more
      window.location.href = 'https://www.google.com/search?q=your+business+name'; // Replace with actual URL
    } else {
      // Hide rating container and show feedback form
      ratingContainer.style.display = 'none';
      feedbackForm.style.display = 'block';
    }
  });

  function highlightStars(value) {
    stars.forEach(star => {
      star.classList.remove('selected');
      if (star.getAttribute('data-value') <= value) {
        star.classList.add('selected');
      }
    });
  }
});
