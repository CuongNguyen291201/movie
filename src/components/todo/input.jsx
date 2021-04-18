import React, { Component } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const Input = styled.input`
  width: 200px;
  height: 30px;
  border: 1px solid #ccc;
  padding: 0 3px;
`;

class InputTodo extends Component {
  render() {
    return (
      <>
        <Input 
          type="text" 
          onChange={this.props.change}
          value={this.props.work}
        />
      </>
    )
  }
} 

InputTodo.propsTypes = {
  change: PropTypes.func.isRequired,
  work: PropTypes.node
}

export default InputTodo;