import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
import { createStructuredSelector } from 'reselect';

import { requestDataUser } from '../actions/usersActions';
import ListUser from '../components/ListUser';
import { loadingData } from '../reselect/userReselect';

const AppListUser = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(createStructuredSelector({
    loading: loadingData
  }))

  useEffect(() => {
    dispatch(requestDataUser())
  }, [dispatch])

  if (loading) {
    return (
      <Row>
        <Col span={20} offset={2}>
          <Skeleton active />      
        </Col>
      </Row>
    )
  }

  return (
    <ListUser />
  )
}

export default AppListUser
