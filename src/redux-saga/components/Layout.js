import React from 'react';
import { Row, Col, Spin, Space } from 'antd';
import { useSelector } from 'react-redux';
import { createStructuredSelector  } from 'reselect';

import { getDataLoading } from '../reselect/coronaReselect';


const Layout = (props) => {
  const { loading } = useSelector(createStructuredSelector({
    loading: getDataLoading
  }));

  if (loading) {
    return (
      <Row>
        <Col span={20} offset={2}>
          <Space size="middle">
            <Spin size="small">
              <Spin size="large"/>
            </Spin>
          </Space>
        </Col>
      </Row>
    )
  }

  return (
    <Row>
      <Col span={20} offset={2}>
        {props.children}
      </Col>
    </Row>
  )
}

export default React.memo(Layout)
