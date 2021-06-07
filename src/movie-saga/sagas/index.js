import { call, all } from 'redux-saga/effects';

import { watchMovieSaga } from './movieSaga';

export default function* rootSaga() {
  yield all([
    call(watchMovieSaga) 
  ])
}