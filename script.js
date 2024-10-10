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
    window.location.href = 'https://www.google.com/search?rlz=1C1CHBD_en-GBAU947AU948&sca_esv=4aa4cadb6d3a9fe9&cs=0&sxsrf=ADLYWIKWvJOLvmllUnQdtBI0v3xZUAm4Og:1728579329364&q=mcdonald%27s+stanmore+reviews&uds=ADvngMgclomfQdb2myG5ZBbNQb_h8mvaxUG5zAlRCaomkIDQQj-E0gZKh5eZwN2yIgfKGTpQW-WYU6OcKHiEl74fufc2N_NGwAg4RS0cwajxj151EZdE2gAFc3UylL2mNffEjRIhtBeq_ii0w2XsoPLhiY6HUbcflmTJP911VTrc6Jl6TaQqtACBxIxyBzk2CGcHrt8eWobEXXCF3KwFDDi3RmNHQQYluzwQDxHs0EUpv94jvDW-VkeTNQfZZ55B9v-wtDJ6mgomkYlirwoLDoV16n-U2AAbMVIbdtulouW2qjmO2NnNJO1mCgbBn_GgnjDIVXSiUPvXCyxoRYPi-BWiIUNr7aVhU8bwLSFHWh1I_4HHt9a5AwUynlbIN1Xtc736jv6BV419XnGOPEAg5G9e_TVG1t6WR0cTIzakaxbWEsbNiiUdZ4fSmO-eNTOEL7Uy828csSgfPqM5DzQ4RvjGiRt-tg9YkuV6en5VysXhox1GsX_wYKI&si=ACC90nzcy7sviKw0NTZoUBUzhQehr3jouizIrVSf6avWI23m1Rkd5oWgUunKDFaIETJssotnX2iibk0dssaIqjoXFxcwmjltsfgMNzqP4NO0CkS8Pfa25khTeLwX2NHJx1qFUSVBdeLCdMJJ6zDoyUELWkp4xstCtA%3D%3D&sa=X&ictx=1&stq=1&lei=AQcIZ9fLFfjj2roP3a7g2QY'; // Replace with your Google reviews URL
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
