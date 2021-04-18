import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  // props la tat ca cac props duoc truyen vao component khi su dung
  return (
    <>
      <button 
        type={props.type}
        onClick={props.click}
      >
        {props.children}
      </button>
    </>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node   
}

export default Button
