import React, { Component } from 'react';

class Children extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c: 0
    };
    console.log('constructor mounting da chay o children')
  }

  static getDerivedStateFromProps(props, state) {
    console.log(state, props);
    console.log('getDerivedStateFrommProps cua mouting da chay trong children');
    return null;
  }

  componentDidMount() {
    console.log('comp children chay')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    // return false ko render lai UI va nguoc lai
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState);
    return 10;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('gia tri cua getSnapshotBeforeUpdate', snapshot);
    document.getElementById('text').style.color = 'yellow';
  }

  componentWillUnmount() {
    console.log('component vua bi xoa');
  }

  increment = () => {
    this.setState({
      c: this.state.c + 1
    })
  }

  render() {
    console.log('render cua children da chay');
    return (
      <>
        <h3>gia tri nhan tu props: {this.props.count}</h3>
        <h2 id="text">gia tri state trong Component: {this.state.c}</h2>
        <button 
          type="button" 
          onClick={() => this.increment()}
        > +1 </button>
      </>
    )
  }
}

export default Children;