import React, { PureComponent } from 'react';
import {Row, Col} from 'antd';
import Global from './component/global';
import Country from './component/country';
import CoronaProvider from './Context/coronaProvider';

class Corona extends PureComponent {
  render() {
    return(
      <>
        <Row>
          <Col span={18} offset={3}>
            <CoronaProvider>
              <Global/>
              <Country/>
            </CoronaProvider>
          </Col>
        </Row>
      </> 
    )
  }
}

export default Corona;