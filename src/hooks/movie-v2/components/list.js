import { Row, Col, Card, Skeleton } from 'antd';

const { Meta } = Card;

const ListMovie = (props) => {
  if (props.movies.length === 0 || props.loading) {
    return (
      <Skeleton active />
    )
  }

  return (
    <Row>
      <Col span={20} offset={2}> 
        <Row style={{ marginTop: '30px' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {props.movies.map((movie, index) => (
              <Col className="gutter-row" span={6} key={index}>
                <Card
                  hoverable
                  style={{ width: 240, marginBottom: '20px' }}
                  cover={<img alt={movie.overview} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />}
                >
                  <Meta title={movie.title}/>
                </Card>
              </Col>
            ))}
        </Row>
      </Col> 
    </Row>
  )
}

export default ListMovie;
