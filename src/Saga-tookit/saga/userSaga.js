import { call, put, takeEvery } from 'redux-saga/effects'

import { api } from '../services/api';
import { REQUEST_DATA_USERS } from '../actions/usersActions';
import { startGetData, getDataSuccess, getDataFail } from '../slice/userSlice';
import { helpers } from '../helpers/common';

function* userSaga() {
  try {
    yield put(startGetData({ loading: true}));
    const dataUser = yield call(api.getUsers);

    if (!helpers.isEmptyObject(dataUser)) {
      yield put(getDataSuccess({
        data: dataUser
      }));
    } else {
      yield put(getDataFail({
        error: {
          cod: 500,
          message: "Not found!"
        }
      }));
    }

  } catch (err) {
    yield put(getDataFail({ 
      error: {
        cod: 500,
        message: "Not found!"
      }
    }));
  } finally {
    yield put(startGetData({ loading: false}));
  }
}

export function* watchUserSaga() {
  yield takeEvery(REQUEST_DATA_USERS, userSaga);
}