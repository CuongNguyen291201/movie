import * as types from '../action/types';

const initalState = {
  loading: true,
  virus: {},
  error: null
}

// Tiep nhan va lam viec voi cac action cua saga
export const coronaReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.START_GET_DATA:
      return {
        ...state,
        ...{
          loading: action.loading,
        }
      }
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        ...{
          virus: action.data,
          error: null
        }
      }
    case types.GET_DATA_FAIL:
      return {
        ...state, 
        ...{
          virus: {},
          error: action.error
        }
      }
    case types.FINISH_GET_DATA:
      return {
        ...state,
        ...{
          loading: action.loading
        }
      }
    default:
      return state;
  }
}