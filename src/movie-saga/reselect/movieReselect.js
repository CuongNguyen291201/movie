import { createSelector } from 'reselect';

import { helpers } from '../helpers/common';

const dataMovie = state => state.movie;

export const getDataLoading = createSelector(
  dataMovie,
  item => item.loading
)

export const getDataMovie = createSelector(
  dataMovie, 
  item => {
    if (!helpers.isEmptyObject(item.data)) {
      if (item.data.hasOwnProperty('results')) {
        return item.data.results;
      }
      return null;
    }
    return null;
  }
)

export const getTotalPage = createSelector(
  dataMovie, 
  item => {
    if (!helpers.isEmptyObject(item.data)) {
      if (item.data.hasOwnProperty('total_pages')) {
        return item.data.total_pages;
      }
      return null;
    }
    return null;
  }
)