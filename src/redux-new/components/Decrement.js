import React from 'react';
import { connect } from 'react-redux';

import { decrementCount } from '../action/index';

const Decrement = (props) => {
  const clickDcr = () => {
    props.clickDecrement(props.count);
  }

  return (
    <>
      <button type="button" onClick={() => clickDcr()}> - </button>
    </>
  )
}

// Lay state tu reducer - chuyen thanh props cua component
const mapStateToProps = state => ({
  count: state.number.count
});

// Dispatch action vao store - chuyen thanh props cua component
const mapDispatchToProps = dispatch => ({
  clickDecrement: val => dispatch(decrementCount(val))
});

const ConnectReduxDecrement = connect(mapStateToProps, mapDispatchToProps)(Decrement);

export default React.memo(ConnectReduxDecrement)
