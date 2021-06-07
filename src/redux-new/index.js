import React from 'react';
import { Provider } from 'react-redux';

import AppCounter from './pages/AppCounter';
import store from './configStore';

const App = () => {
  return (
    <Provider store={store}>
      <AppCounter />
    </Provider>
  )
}

export default App
