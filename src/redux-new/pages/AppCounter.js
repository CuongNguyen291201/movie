import React from 'react';

import Decrement from '../components/Decrement';
import Increment from '../components/Increment';
import Result from '../components/Result';

const AppCounter = () => {
  return (
    <>
      <Decrement />
      <Result />
      <Increment />
    </>
  )
}

export default React.memo(AppCounter)
