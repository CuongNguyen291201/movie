import React from 'react';
import { useSelector } from 'react-redux';
import { selectorCounter } from '../slice/counterSlice';

const Result = () => {
  const count = useSelector(selectorCounter);

  return (
    <>
      <h1> { count } </h1> 
    </>
  )
}

export default  React.memo(Result)
