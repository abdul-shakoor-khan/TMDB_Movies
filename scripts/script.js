import { renderPopularMovies, renderTvShow, renderMovieDetails, renderShowDetails } from "./data.js";

// Step One
const global = {
  currentPage: window.location.pathname,
}

// Init App
function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      renderPopularMovies();
      break;
    case '/shows.html':
      renderTvShow();
      break;
    case '/movie-details.html':
      renderMovieDetails();
      break;
    case '/tv-details.html':
      renderShowDetails();
      break;
  }
  highLightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);

// Step Three
// High Light Active Link
function highLightActiveLink() {
  const links = document.querySelectorAll('.hero-link');
  links.forEach(link => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}