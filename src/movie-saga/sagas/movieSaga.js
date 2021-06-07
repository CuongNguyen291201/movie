import { call, put, takeLatest } from 'redux-saga/effects';

import { SEARCH_MOVIE } from '../actions/types';
import { helpers } from '../helpers/common';
import { api } from '../services/api';
import { startSearchMovie, searchMovieSuccess, searchMovieFail, searchMovieNotFound } from '../slice/movieSlice';

function* movieSaga({ keyword }) {
  try {
    yield put(startSearchMovie({loading: true}));
    
    const result = yield call(api.getDataMovieByKeyword, keyword);
    if (helpers.isEmptyObject(result)) {
      yield put(searchMovieNotFound({
        message: {
          cod: 404,
          message: "Not found data!"
        }
      }));
    } else {
      yield put(searchMovieSuccess({data: result}));
    }
  } catch (err) {
    yield put(searchMovieFail({error: err}));
  } finally {
    yield put(startSearchMovie({loading: false}));
  }
}

export function* watchMovieSaga() {
  yield takeLatest(SEARCH_MOVIE, movieSaga);
}