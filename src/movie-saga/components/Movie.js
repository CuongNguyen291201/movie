import React from 'react';
import { Row, Col, Card, Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getDataMovie } from '../reselect/movieReselect';

const { Meta } = Card;

const Movie = () => {
  const { movies } = useSelector(createStructuredSelector({
    movies: getDataMovie
  }))

  if (!movies) return <Skeleton active />
  return (
    <>
      <Row style={{ margin: '30px 0'}}>
        <Col span={20} offset={2}>
          <Row>   
            {
              movies.map(movie => (
                <Col span={6} key={movie.id} style={{ marginTop: '30px'}}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={movie.name} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />}
                  >
                    <Meta title={movie.original_title} />
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

export default React.memo(Movie)
