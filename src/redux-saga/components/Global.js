import React from 'react';
import { Row, Col, Card, Skeleton  } from 'antd';
import { useSelector } from 'react-redux';
import { createStructuredSelector  } from 'reselect';

import { getDataGlobalVirus } from '../reselect/coronaReselect';

const Global = () => {
  const { globals } = useSelector(createStructuredSelector({
    globals: getDataGlobalVirus
  }));
  
  console.log(globals)

  if (globals === null) {
    return (
      <Skeleton active />
    ) 
  }

  return (
    <>
      <Row style={{ margin: '30px 0'}}>
      <Col span={8}>
          <Card title="Confirmed" bordered={false}>
            <p>New Confirmed: {globals.NewConfirmed}</p>
            <p>Total Confirmed: {globals.TotalConfirmed}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Deaths" bordered={false}>
            <p>New Deaths: {globals.NewDeaths}</p>
            <p>Total Deaths: {globals.TotalDeaths}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Recovered" bordered={false}>
            <p>New Recovered: {globals.NewRecovered}</p>
            <p>Total Recovered: {globals.TotalRecovered}</p>
          </Card>
        </Col>
      </Row> 
    </>
  )
}

export default React.memo(Global)
