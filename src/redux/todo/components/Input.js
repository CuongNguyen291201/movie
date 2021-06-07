import React from 'react'
import { Row, Col, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addWork } from '../action/index';

const { Search } = Input;

const InputAdd = () => {
  const dispatch = useDispatch()
  const id = useSelector(state => state.todo.idTodo)

  const add = (name) => {
    if (name.trim().length > 0) {
      dispatch(addWork(name, id));
    }
  }

  return (
    <Row style={{ margin: '30px 0'}}>
      <Col span={12} offset={6}>
        <Search
          placeholder="name of work..."
          allowClear={true}
          enterButton="Add"
          size="large"
          onSearch={name => add(name)}
        />
      </Col>
    </Row>
  )
}

export default InputAdd
