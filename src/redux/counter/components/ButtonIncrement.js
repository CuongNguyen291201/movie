import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { incrementNumber } from '../action/index';

const ButtonIncrement = (props) => {
  // const count = useSelector(state => state.counter.count);
  // const dispatch = useDispatch();

  return (
    <>
      {/* <button onClick={() => (incrementNumber(count))}> + </button>  */}
      <button onClick={() => props.increment(props.count)}> + </button>
    </>
  )
}

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
  increment: val => dispatch(incrementNumber(val))
})

const ConnectButtonIncrement = connect(mapStateToProps, mapDispatchToProps)(ButtonIncrement)

export default React.memo(ConnectButtonIncrement)
