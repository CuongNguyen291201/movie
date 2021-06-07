import React from 'react';
import configStore from './store';
import { Provider } from 'react-redux';

import AppListUser from './pages/AppListUser';

const { store } = configStore();

const AppSagaTookit = () => {
  return (
    <Provider store={store}>
      <AppListUser />
    </Provider>
  )
}

export default AppSagaTookit
