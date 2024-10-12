document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    star.addEventListener('click', handleStarClick);
  });
});

function handleStarClick(event) {
  const value = event.target.getAttribute('data-value');
  highlightStars(value);

  if (value >= 4) {
    window.location.href = 'https://www.google.com/search?q=your+business+name'; // Replace with your Google reviews URL
  } else {
    document.querySelector('.container').style.display = 'none'; // Hide the rating section
    document.getElementById('feedback-form').style.display = 'block'; // Show the feedback form
  }

  document.getElementById('feedback-message').textContent = `Thank you for your rating of ${value} stars!`;
  document.getElementById('feedback-message').style.opacity = 1; // Make message visible
}

function highlightStars(value) {
  stars.forEach(star => {
    star.classList.remove('selected');
    if (star.getAttribute('data-value') <= value) {
      star.classList.add('selected');
    }
  });
}
