import axios from 'axios';

const url = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2M4ODJkZGU4ZTA2ZDAyMzkwOGVkYTRjMmE0OTQwMSIsIm5iZiI6MTc0MzUyNDI4Ny43NTksInN1YiI6IjY3ZWMxMWJmMTEwYWJkYzM5NmY2MzYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hDBsISUpBXkZmacYgnDOszG_-U4rI0e51G2tNK5v54M',
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`${url}trending/movie/day?language=en-US`, options);

  return response.data;
};

export const getMovieById = async movieId => {
  const response = await axios.get(
    `${url}movie/${movieId}?language=en-US`,
    options
  );

  return response.data;
};

export const getMovieCast = async movieId => {
  const response = await axios.get(
    `${url}movie/${movieId}/credits?language=en-US`,
    options
  );

  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `${url}movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );

  return response.data.results;
};

export const getSearchMoview = async query => {
  const response = await axios.get(
    `${url}search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );

  return response.data.results;
};
