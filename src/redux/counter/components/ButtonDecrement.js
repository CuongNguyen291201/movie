import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { decrementNumber } from '../action/index';

const ButtonDecrement = (props) => {
  // const count = useSelector(state => state.counter.count)
  // const dispatch = useDispatch()

  return (
    <>
      {/* <button onClick={() => (decrementNumber(count))}> - </button>  */}
      <button onClick={() => props.decrement(props.count)}> - </button>
    </>
  )
}

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
  decrement: val => dispatch(decrementNumber(val))
})

const ConnectButtonDecrement = connect(mapStateToProps, mapDispatchToProps)(ButtonDecrement)

export default React.memo(ConnectButtonDecrement)
