import React, { PureComponent } from 'react';
import { Card, Col, Row, Skeleton } from 'antd';
import CoronaContext from '../Context/myContext';

class Global extends PureComponent {
  render() {
    return (
      <>
        <CoronaContext.Consumer>
          {context => {
            if (context.loading || context.virus.length === 0) {
              return <Skeleton active/>
            }
            return(
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  <Col span={8}>
                    <Card title="Confirmed" bordered={true}>
                      <p>NewConfirmed: {context.virus.Global.NewConfirmed}</p>
                      <p>TotalConfirmed: {context.virus.Global.TotalConfirmed}</p>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Death" bordered={true}>
                      <p>NewDeaths: {context.virus.Global.NewDeaths}</p>
                      <p>TotalDeaths: {context.virus.Global.TotalDeaths}</p>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Recovered" bordered={true}>
                      <p>NewRecovered: {context.virus.Global.NewRecovered}</p>
                      <p>TotalRecovered: {context.virus.Global.TotalRecovered}</p>
                    </Card>
                  </Col>
                </Row>
              </div>
            )
          }}
        </CoronaContext.Consumer>
      </>
    )
  }
}

export default Global;