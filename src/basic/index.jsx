import React, { Component } from 'react';
import HeaderComponent from '../components/basic/header';

class AppBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      count: 0,
    };
  }

  changeColor = (e) => {  
    let nameBtn = e.target.name;
    if (nameBtn !== '') {
      this.setState({
        color: nameBtn
      })
    }
  }

  changeCount = () => {
    // this.setState({
    //   count: this.state.count + 1
    // })
    this.setState((state) => ({
      count: state.count + 1
    }))
  }

  viewCount = () => {
    this.changeCount();
    this.changeCount();
  }

  render() {
    return (
      <>
        <HeaderComponent />
        <h3 style={{ color: this.state.color }}>This is color ...!</h3>
        <h3>{this.state.count}</h3>
        <button name="red" type="button" onClick={(e) => this.changeColor(e)}>Red</button> 
        <button name="green" type="button" onClick={(e) => this.changeColor(e)}>Green</button> 
        <button name="blue" type="button" onClick={(e) => this.changeColor(e)}>Blue</button> 
        <button onClick={() => this.viewCount()}>+</button>
      </>
    )
  }
}

export default AppBasic;