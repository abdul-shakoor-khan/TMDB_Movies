// Fetch Data From TMBD API
async function fetchTMDBData(EndpointName) {
  const API_KEY = 'cc53b2b2745055d3abbbb2290fbc7468';
  const API_URL = 'https://api.themoviedb.org/3';

  const response = await fetch(`${API_URL}/${EndpointName}?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();

  return data;
}

// Render Popular Movies
export async function renderPopularMovies() {
  const { results } = await fetchTMDBData('movie/popular');
  let popularMovieHTML = '';

  results.forEach(movie => {
    popularMovieHTML += `
      <a href="movie-details.html?id=${movie.id}" class="card">
        <div class="card-img">
            ${movie.poster_path ?
        `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="img" alt="${movie.title}" /> ` :
        `<img src="images/no-image.jpg" class="img" alt="${movie.title}" />`}
        </div>
        <div class="card-caption">
          <i class="ri-shield-check-fill caption-icon"></i>
          <h2 class="card-caption-heading">
          ${movie.title}
          </h2>
          <p class="card-caption-description">
            ${movie.overview}
          </p>
        </div>
      </a>
      `
  });

  document.querySelector('.js-popular-movie').innerHTML = popularMovieHTML;
}

// Display Popular Tv-Show
export async function renderTvShow() {
  const { results } = await fetchTMDBData('tv/popular');
  let tvShowHTML = '';

  results.forEach(show => {
    tvShowHTML += `
    <a href="tv-details.html?id=${show.id}" class="card">
          <div class="card-img">
          ${show.poster_path ?
        `<img src="https://image.tmdb.org/t/p/w500${show.poster_path}" class="img" alt="${show.name}" /> ` :
        `<img src="images/no-image.jpg" class="img" alt="${show.name}" />`}
          </div>
          <div class="card-caption">
            <i class="ri-shield-check-fill caption-icon"></i>
            <p class="card-caption-heading">
              ${show.name}
            </p>
            <p class="card-caption-description">
              ${show.overview}
            </p>
          </div>
        </a>
      `
  });

  document.querySelector('.js-tv-show').innerHTML = tvShowHTML;
}


// Render Movies Details
export async function renderMovieDetails() {
  const movieId = window.location.search.split('=')[1];
  const movie = await fetchTMDBData(`movie/${movieId}`);

  let moviesDetailsHTML = `
     <div class="back-btn">
        <a class="back-link" href="index.html">Back To Movies</a>
      </div>
      <div class="details">
        <div class="details-img">
        ${movie.poster_path ?
      `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="img" alt="${movie.title}" /> ` :
      `<img src="images/no-image.jpg" class="img" alt="${movie.title}" />`}
        </div>
        <div class="details-content">
          <h2 class="dc-title title">
          ${movie.title}
          </h2>
          <p class="dc-rating para">
            <i class="ri-star-fill text-primary"></i>
            ${movie.vote_average.toFixed(1)} / 10
          </p>
          <p class="dc-date para">Release Date:
            <span class="span">${movie.release_date}</span>
          </p>
          <p class="dc-description para">
          ${movie.overview}
          </p>
          <h5 class="dc-genres">Genres</h5>
          <ul class="dcg-group">
          ${movie.genres.map((genre) => `<li class="dcg-list">${genre.name}</li>`).join('')}
          </ul>
          <a href="${movie.homepage}" target="_blank" class="dc-movie-link">Visit Movie Homepage</a>
        </div>
      </div>
      <div class="details-info">
        <h2 class="di-heading title">Movie Info</h2>
        <p class="di-date para">Budget:
          <span class="span">$${numberWithCommas(movie.budget)}</span>
        </p>
        <p class="di-date para">Revenue:
          <span class="span">$${numberWithCommas(movie.revenue)}</span>
        </p>
        <p class="di-date para">Runtime:
          <span class="span">${movie.runtime} minutes</span>
        </p>
        <p class="di-date para">Status:
          <span class="span">${movie.status}</span>
        </p>
        <h4>Production Companies</h4>
        <div class="list-group">
        ${movie.production_companies.map((company) => `<span>${company.name}</span>`)}
        </div>
      </div>
  `
  document.querySelector('.js-movies-details').innerHTML = moviesDetailsHTML;
}


// Render Show Details
export async function renderShowDetails() {
  const showId = window.location.search.split('=')[1];
  const show = await fetchTMDBData(`tv/${showId}`);

  let tvDetailsHTML = `
     <div class="back-btn">
        <a class="back-link" href="index.html">Back To Movies</a>
      </div>
      <div class="details">
        <div class="details-img">
        ${show.poster_path
      ? `<img
        src="https://image.tmdb.org/t/p/w500${show.poster_path}"
        class="img" alt="${show.name}"
      />`: `<img src="../images/no-image.jpg" class="img" 
       alt="${show.name}"
    />`}
        </div>
        <div class="details-content">
          <h2 class="dc-title title">
          ${show.name}
          </h2>
          <p class="dc-rating para">
           <i class="ri-star-fill text-primary"></i>
            ${show.vote_average.toFixed(1)} / 10
          </p>
          <p class="dc-date para">Last Air Date:
            <span class="span">${show.last_air_date}</span>
          </p>
          <p class="dc-description para">
          ${show.overview}
          </p>
          <h5 class="dc-genres">Genres</h5>
          <ul class="dcg-group">
          ${show.genres.map((genre) => `<li class="dcg-list">${genre.name}</li>`).join('')}
          </ul>
          <a href="${show.homepage}" target="_blank" class="dc-movie-link">Visit Movie Homepage</a>
        </div>
      </div>
      <div class="details-info">
        <h2 class="di-heading title">Movie Info</h2>
        <p class="di-date para">Number of Episodes:
          <span class="span">${show.number_of_episodes}</span>
        </p>
        <p class="di-date para">Last Episode to Air:
          <span class="span">${show.last_episode_to_air.name}</span>
        </p>
        <p class="di-date para">Status:
          <span class="span">${show.status}</span>
        </p>
        <h4>Production Companies</h4>
        <div class="list-group">
        ${show.production_companies
      .map((company) => `<span>${company.name}</span>`)
      .join(', ')}
        </div>
      </div>
      `;

  document.querySelector('.js-tv-details').innerHTML = tvDetailsHTML;
}

// Number With Commas
function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
