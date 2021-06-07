import React from 'react';
import { useSelector, connect } from 'react-redux';

const Result = (props) => {
  // const count = useSelector(state => state.counter.count)

  return (
    <>
      <h1> {props.count} </h1> 
    </>
  )
}

const mapStateToProps = state => ({
  count: state.counter.count
})

const ConnectResult = connect(mapStateToProps, null)(Result)

export default  React.memo(ConnectResult)
