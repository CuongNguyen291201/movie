import React, { PureComponent } from 'react';

class HeaderComponent extends PureComponent {
  render() {
    console.log('header da dc render');
    return(
      <>
        <h1>this is a header</h1>
      </>
    )
  }
}

export default HeaderComponent;