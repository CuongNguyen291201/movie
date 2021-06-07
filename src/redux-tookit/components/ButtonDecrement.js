import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementCounter } from '../slice/counterSlice';

const ButtonDecrement = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <button type="button" onClick={() => dispatch(decrementCounter())}> - </button>
    </>
  )
}

export default React.memo(ButtonDecrement)
