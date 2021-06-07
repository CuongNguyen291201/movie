import React from 'react';
import { Row, Col, Card } from 'antd';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getDataUser } from '../reselect/userReselect';
import { helpers } from '../helpers/common';

const { Meta } = Card;

const ListUser = () => {
  const { data } = useSelector(createStructuredSelector({
    data: getDataUser
  }))

  if (helpers.isEmptyObject(data)) {
    return (
      <Row>
        <Col span={20} offset={2}>
          <h2>Not found!</h2>
        </Col>
      </Row>
    )
  }

  return (
    <>
      <Row>
        <Col span={20} offset={2}>
          <Row style={{ margin: '30px 0'}}>
            {
              data.map(item => (
                <Col span={6} key={item.id}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={item.name} src={item.avatar} />}
                  >
                    <Meta title={item.name} />
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default React.memo(ListUser)
