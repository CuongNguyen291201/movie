import { call, takeEvery, put } from 'redux-saga/effects';

import * as actions from '../action/index';
import { REQUEST_SERVER_DATA } from '../action/types';
import { api } from '../services/api';
import { helpers } from '../helpers/common';

// Generator function
// worker
function* coronaSaga() {
  try {
    // dispatch action start get data
    yield put(actions.startGetData(true));

    // call data tu server api
    const result = yield call(api.getDataCovid)
    if (helpers.isEmptyObject(result)) {
      // khong co data
      yield put(actions.getDataFail({
        cod: 404,
        message: "Not found data!"
      }));
    } else {
      // co data
      yield put(actions.getDataSuccess(result))
    }
  } catch (err) {
    // dispatch action error
    yield put(actions.getDataFail(err))
  } finally {
    // dispatch action stop getdata
    // try: khong co loi
    // catch: bat loi
    // cuoi cung dung action get data
    // dispatch vao store va reducer se xu ly
    yield put(actions.finishGetData(false));
  }
}

// watcher
export function* watchCoronaSaga() {
  yield takeEvery(REQUEST_SERVER_DATA, coronaSaga);
}
