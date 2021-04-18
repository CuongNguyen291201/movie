import React from 'react';
import { Row, Col, Pagination } from 'antd';

const PaginationMovie = (props) => {
  const arrTime = [props.fromDate, props.toDate];

  return (
    <Row style={{ margin: '30px 0'}}>
      <Col span={24} style={{ textAlign: 'center'}}>
        <Pagination 
          current={props.current}  
          total={props.total}
          pageSize={20}
          showSizeChanger={false}
          onChange={(p) => props.change(null, arrTime, p)}
        />
      </Col>
    </Row>
  )
}

export default React.memo(PaginationMovie);
