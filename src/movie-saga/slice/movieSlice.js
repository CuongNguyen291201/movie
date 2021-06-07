import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movieReducer',
  initialState: {
    loading: false,
    data: {},
    errors: null,
    messages: null
  },
  reducers: {
    startSearchMovie: (state, action) => {
      state.loading = action.payload.loading;
    },
    searchMovieSuccess: (state, action) => {
      state.data = action.payload.data;
      state.errors = null;
      state.messages = null;
    },
    searchMovieFail: (state, action) => {
      state.errors = action.payload.error
      state.messages = null;
      state.data = {};
    },
    searchMovieNotFound: (state, action) => {
      state.messages = action.payload.message;
      state.errors = null;
      state.data = {};
    }
  }
})

export const { startSearchMovie, searchMovieSuccess, searchMovieFail, searchMovieNotFound } = movieSlice.actions;
export default movieSlice.reducer;