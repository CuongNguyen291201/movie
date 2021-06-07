import * as types from './types';

export const searchMovie = (keyword) => ({
  type: types.SEARCH_MOVIE,
  keyword
});


export const startSearchMovie = (loading) => ({
  type: types.START_SEARCH_MOVIE,
  loading
})

export const searchMovieSuccess = (data) => ({
  type: types.SEARCH_MOVIE_SUCCESS,
  data
});

export const searchMovieNotFound = (message) => ({
  type: types.SEARCH_NOT_FOUND,
  message
});

export const searchMovieFail = (error) => ({
  type: types.SEARCH_MOVIE_FAIL,
  error
});