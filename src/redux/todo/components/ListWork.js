import React from 'react'
import { Row, Col, List } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteOutlined } from '@ant-design/icons';

import { deleteWork, doneWork } from '../action/index';
import Checkbox from 'antd/lib/checkbox/Checkbox';

const ListWork = () => {
  const data = useSelector(state => state.todo.listWork);
  const dispatch = useDispatch();

  const deleted = (id) => {
    dispatch(deleteWork(id))
  }

  const done = (id) => {
    dispatch(doneWork(id))
  }

  const styleFinish = {
    textDecoration: 'line-through',
    color: 'red',
    background: 'lightBlue'
  }

  return (
    <Row style={{ margin: '20px 0'}}>
      <Col span={12} offset={6}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Checkbox onClick={() => done(item.id)} />}
                title={item.name}
                style={item.done ? styleFinish : null}
              />
              <div>
                <DeleteOutlined onClick={() => deleted(item.id)} />
              </div>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  )
}

export default React.memo(ListWork)
