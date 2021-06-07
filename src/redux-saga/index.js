import React from 'react';
import { Provider } from 'react-redux';

import configStore from './store/configStore';
import AppCorona from './pages/index';

const { store } = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppCorona /> 
    </Provider> 
  )
}

export default App
