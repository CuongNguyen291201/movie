import React, { Component } from 'react';
import Children from './children';

class AppLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      show: true
    };
    // phuong thuc nay chay dau tien va duy nhat 1 lan trong mounting
    console.log('constructor cua applifecycle da chay');
  }

  static getDerivedStateFromProps(props, state) {
    console.log(state, props);
    console.log('getDerivedStateFrommProps cua mouting da chay');
    return null;
  }

  componentDidMount() {
    // chay duy nhat 1 lan trong phan mounting
    console.log('componentDidMount da chay');
  }

  showHideComponent = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    console.log('render mounting da chay');
    return(
      <>
        <h1>this is app lifecycle</h1>
        {this.state.show && <Children count={this.state.count}/>}
        <button 
          type="button"
          onClick={() => this.showHideComponent()}
        >Hide Component</button>
      </>
    )
  }
}

export default AppLifeCycle;
