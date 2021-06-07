import { call, all } from 'redux-saga/effects';
import { watchCoronaSaga } from './coronaSaga';
// khai bao them saga 

export default function* rootSaga() {
  yield all([
    call(watchCoronaSaga),
    // call them saga 
  ])
}