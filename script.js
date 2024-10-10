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
    window.location.href = 'https://www.google.com/search?rlz=1C1CHBD_en-GBAU947AU948&sca_esv=4aa4cadb6d3a9fe9&cs=0&output=search&kgmid=/g/1tm12rqz&q=McDonald%27s+Stanmore&kgs=b2f548c8c843b134&shndl=30&shem=lsp&source=sh/x/kp/local/m1/1#lrd=0x6b12b024f9fe560d:0xaea8678108abbe28,3,,,,'; // Replace with your Google reviews URL
  } else {
    window.location.href = 'feedback.html';
  }
}

function highlightStars(rating) {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    if (star.getAttribute('data-value') <= rating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}