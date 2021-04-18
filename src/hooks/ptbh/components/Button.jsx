import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  console.log('da dc render')
  return (
    <>
      <button
        type={props.type}
        onClick={() => props.click()}
      >
        OK
      </button>
    </>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  click: PropTypes.func
}

export default React.memo(Button)
