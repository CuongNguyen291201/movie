// dinh nghia class component
import React, { Component } from 'react';

class ButtonCounter extends Component {
  render() {
    return (
      <>
        {/* viet cac ma jsx vao day */}
        <button 
          type={this.props.type}
          onClick={() => this.props.handleNumber(this.props.children === '+' ? 1 : 0)}
        >
          {this.props.children}
        </button>
      </>
    )
  }
}

export default ButtonCounter;