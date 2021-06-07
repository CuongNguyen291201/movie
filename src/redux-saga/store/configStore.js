import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from '../reducer/index';
import rootSaga from '../saga/index';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

const configStore = ( initialState = {} ) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      logger, 
      sagaMiddleware
    )
  );

  // run saga
  sagaMiddleware.run(rootSaga);
  return { store }
}

export default configStore;