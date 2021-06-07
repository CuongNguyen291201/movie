import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from '../slice/index';
import rootSaga from '../sagas/index';

const persitRootReducer = {
  key: 'app_persist_movie',
  storage: storage,
  whitelist: ['movie']   // Luu ten cua reducer can luu du lieu
}

const rootReducerPersist = persistReducer(persitRootReducer, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const configStore = ( defaultState = {} ) => {
  const store = createStore(
    rootReducerPersist,
    defaultState,
    applyMiddleware(logger, sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store)
  return { store, persistor }
}

export default configStore                         




