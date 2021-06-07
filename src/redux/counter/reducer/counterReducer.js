// Noi tao ra state - cap nhat xu ly chung
import * as types from '../action/type';

// Khoi tao state
const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: action.payload.val + 1
      }
    case types.DECREMENT: 
      return {
        ...state,
        count: action.payload.val - 1
      }
  
    default:
      return state;
  }
}

export default counterReducer