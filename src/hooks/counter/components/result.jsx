import React from 'react'
import PropTypes from 'prop-types'

const Result = (props) => {
  return (
    <>
      <h1>{props.count}</h1>
    </>
  )
}

Result.propTypes = {
  count: PropTypes.number
}

export default Result
