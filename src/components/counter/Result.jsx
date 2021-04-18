import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <>  
        <h1>{this.props.count}</h1>
      </>
    )
  }
}

export default Result;