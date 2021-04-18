import React, { Component } from 'react';
import ButtonCounter from '../components/counter/ButtonCounter';
import Result from '../components/counter/Result';

import './Counter.css';

class AppCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handleNumber = (handle) => {
    this.setState((state) => ({
      count: handle === 1 ? state.count + 1 : state.count -1   
    }));
  }

  render() {
    return (
      <>  
        {/* su dung component */}
        <section className="container">
          <Result count={this.state.count}/>
          <ButtonCounter type="button" handleNumber={this.handleNumber}> + </ButtonCounter>
          <ButtonCounter type="button" handleNumber={this.handleNumber}> - </ButtonCounter>
        </section>
      </>
    )
  }
}

export default AppCounter;
 