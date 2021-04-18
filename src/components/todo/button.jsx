import React, { Component } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const Button = styled.button`
  width: 100px;
  height: 30px;
  padding: 5px;
  background-color: lightblue;
  color: black;
`

class ButtonTodo extends Component {
  render() {
    return (
      <>
        <Button onClick={() => this.props.add()}>{this.props.children}</Button>
      </>
    )
  }
} 

ButtonTodo.propsTypes = {
  add: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default ButtonTodo;