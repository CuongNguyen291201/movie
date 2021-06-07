import * as types from './types';

export const requestServerData = () => ({
  type: types.REQUEST_SERVER_DATA
});

// Action duoc saga xu ly
export const startGetData = (loading) => ({
  type: types.START_GET_DATA,
  loading
});

export const getDataSuccess = (data) => ({
  type: types.GET_DATA_SUCCESS,
  data
});

export const getDataFail = (error) => ({
  type: types.GET_DATA_FAIL,
  error
});

export const finishGetData = (loading) => ({
  type: types.FINISH_GET_DATA,
  loading
});
