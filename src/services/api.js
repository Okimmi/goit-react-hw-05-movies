import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '687e4525be1a45f56930e098a4988fd3';

export async function getTrendingMovies(controller) {
  return axios.get(
    `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
}

export async function getMoviesDetails(id, controller) {
  return axios.get(
    `${BASE_URL}/movie/${id}?language=en-US&api_key=${API_KEY}`,
    { signal: controller.signal }
  );
}

export async function getCast(id, controller) {
  return axios.get(
    `${BASE_URL}/movie/${id}/credits?language=en-US&api_key=${API_KEY}`,
    { signal: controller.signal }
  );
}

export async function getReviews(id, controller) {
  return axios.get(
    `${BASE_URL}/movie/${id}/reviews?language=en-US&api_key=${API_KEY}`,
    { signal: controller.signal }
  );
}

export async function getMoviesByQuery(query, controller) {
  return axios.get(
    `${BASE_URL}/search/movie?query=${query}&include_adult=true&language=en-US&api_key=${API_KEY}`,
    { signal: controller.signal }
  );
}
