import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { incrementCount } from '../action/index';

const Increment = () => {
  const count = useSelector(state => state.number.count)
  const dispatch = useDispatch()

  const clickIncrement = () => {
    // Dispatch action va store
    dispatch(incrementCount(count))
  }

  return (
    <>
      <button type="button" onClick={clickIncrement}> + </button>
    </>
  )
}

export default React.memo(Increment)
