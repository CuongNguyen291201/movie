import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import movieReducer from './movieSlice';

// Tao config persist luu cho cac reducer
const persistMovie = {
  key: 'persist_movie',
  storage: storage,
  whitelist: ['data'] // Luu du lieu can thiet trong reducer ( state in reducer )
}

const rootReducer = combineReducers({
  movie: persistReducer(persistMovie ,movieReducer)
})

export default rootReducer
