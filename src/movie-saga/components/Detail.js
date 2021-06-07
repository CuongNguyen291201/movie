import React from 'react';
import { Row, Col, Image } from 'antd';

const Detail = () => {
  return (
    <Row>
      <Col span={20} offset={2}>
        <Row>
          <Col span={8}>
            <Image 
              src=""
            />
            <h2>abc</h2>
          </Col>
          <Col span={8}>
            <p> name movie</p>
            <p> description</p>
          </Col>
          <Col span={8}>
            
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Detail
