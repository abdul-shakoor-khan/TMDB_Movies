### TMDB (The Movie Database)
**TMDB (The Movie Database)** is a web application designed to provide users with a comprehensive guide to movies, TV series, and sports. Built using modern web technologies, Flixx integrates the **TMDB (The Movie Database)** API to fetch and display detailed information about popular movies and TV shows.

### Features

- **Search Functionality**: You can search for movies or TV shows from the homepage.
- **Popular Movies and TV Shows**: We are Explore trending content through a visually appealing card-based layout.
- **Detailed Movie/TV Show Information**: View detailed descriptions, ratings, release dates, genres, and production details.
- **Interactive Navigation**: Easily switch between movies and TV shows with a responsive navigation menu.
- **Dynamic Content**: All data is fetched dynamically from the TMDB API for up-to-date content.
- **Responsive Design**: Optimized for various screen sizes to ensure an excellent user experience.

### Tech Stack

- **HTML5**: Structure of the web pages.
- **CSS3**: Styling, including custom animations and responsive design.
- **JavaScript (ES6)**: Logic and interaction with the TMDB API.
- **Remix Icons**: For scalable and visually appealing icons.
- **TMDB API**: Fetching real-time data for movies and TV shows.

### File Structure

## HTML
- The main structure of the application is in `index.html`.
- Additional pages for TV shows and details:
  - `shows.html`
  - `movie-details.html`
  - `tv-details.html`

## CSS
- Styling is contained in `styles/style.css`, ensuring a clean and responsive design.

## data.js
- fetchTMDBData: Fetches data from the TMDB API.
- renderPopularMovies: Displays popular movies on the homepage.
- renderTvShow: Displays popular TV shows on the TV Shows page.
- renderMovieDetails: Displays detailed information for a selected movie.
- renderShowDetails: Displays detailed information for a selected TV show.
- numberWithCommas: Formats large numbers (e.g., budget, revenue).

## script.js
- init: Initializes the app and determines the current page to load appropriate content.
- highLightActiveLink: Highlights the active navigation link.

