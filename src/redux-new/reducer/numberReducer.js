import * as types from '../action/types';

// Dinh nghia state mac dinh
const initialState = {
  count: 0
}

// Dinh nghia state
const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNT:
      return {
        ...state,
        count: action.val + 1
      } 
    case types.DECREMENT_COUNT:
      return {
        ...state,
        count: action.val - 1
      }
    default: 
      return state;
  }
}

export default numberReducer;