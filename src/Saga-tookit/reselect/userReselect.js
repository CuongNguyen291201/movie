import { createSelector } from 'reselect';

const userState = state => state.user;

export const loadingData = createSelector(
  userState,
  item => item.loading
);

export const getDataUser = createSelector(
  userState,
  item => item.data
);