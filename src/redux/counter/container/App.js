import React from 'react'
// import { connect } from 'react-redux';
import ButtonDecrement from '../components/ButtonDecrement';
import ButtonIncrement from '../components/ButtonIncrement';
import Result from '../components/Result';
// import { incrementNumber, decrementNumber } from '../action/index';

const App = () => {
  return (
    <>
      <Result />
      <ButtonDecrement />
      <ButtonIncrement /> 
    </>
  )
}

export default React.memo(App)
