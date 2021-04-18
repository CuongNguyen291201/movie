import React, {useContext} from 'react';
import {Row, Col, Image, Avatar} from 'antd';

import MovieContext from '../context/MovieContext';

const HeaderMovie = () => {
  const context = useContext(MovieContext)
  console.log(context)

  return (
    <>
      <Row>
        <Col span={20}></Col>
        <Col span={4}>
          <span>Hi: {context.name} </span>
          <Avatar 
            src={
              <Image width={50} src={context.avatar} />
            }
          />
          
        </Col>  
      </Row> 
    </>
  )
}

export default React.memo(HeaderMovie);
