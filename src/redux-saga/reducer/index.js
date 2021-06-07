import { combineReducers } from "redux";
import { coronaReducer } from './coronaReducer';

const rootReducer = combineReducers({
  corona: coronaReducer
});

export default rootReducer;