import React from 'react';
import { Row, Col, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { searchMovie } from '../actions/index';
import { getDataLoading } from '../reselect/movieReselect';

const { Search } = Input;

const SearchMovie = () => {
  const { loading } = useSelector(createStructuredSelector({
    loading: getDataLoading
  }))

  const dispatch = useDispatch();

  return (
    <>
      <Row style={{ margin: "30px 0"}}> 
        <Col span={12} offset={6}>
          <Search 
            placeholder="Movie's name" 
            enterButton="Search" 
            size="large" 
            loading={loading}
            onSearch={(val) => dispatch(searchMovie(val))}
          />
        </Col>
      </Row>
    </>
  )
}

export default React.memo(SearchMovie)
