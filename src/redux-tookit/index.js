import React from 'react';
import { Provider } from 'react-redux';

import ButtonIncrement from './components/ButtonIncrement';
import Result from './components/Result';
import ButtonDecrement from './components/ButtonDecrement';
import store from './store';

const AppCounter = () => {
  return (
    <>
      <Provider store={store}>
        <ButtonIncrement />
        <Result />
        <ButtonDecrement /> 
      </Provider>
    </>
  )
}

export default AppCounter
