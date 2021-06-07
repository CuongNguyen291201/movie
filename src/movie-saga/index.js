import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Skeleton } from 'antd';

import AppMovie from './route/web';
import configStore from './store/configStore';

const { store, persistor } = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Skeleton active />} persistor={persistor}>
        <AppMovie />
      </PersistGate>
    </Provider>
  )
}

export default App
