import { combineReducers } from 'redux';
import numberReducer from './numberReducer';

const rootReducer = combineReducers({
  number: numberReducer
})

export default rootReducer;