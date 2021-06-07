import React from 'react'
import { Row, Col } from 'antd';
import InputAdd from '../components/Input';
import ListWork from '../components/ListWork';

const App = () => {
  return (
    <Row>
      <Col span={24}>
        <InputAdd />
        <ListWork />
      </Col>
    </Row>
  )
}

export default React.memo(App)