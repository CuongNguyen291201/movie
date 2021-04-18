import { Row, Col, Card, Skeleton } from 'antd';

const { Meta } = Card;

const ListMovie = (props) => {
  if (props.listMovies.length !== 0 && !props.loading) {
    return (
      <Row>
        <Col span={20} offset={2}> 
          <Row style={{ marginTop: '30px' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {props.listMovies.map((item, index) => (
              <Col className="gutter-row" span={6} key={index}>
                <Card
                  hoverable
                  style={{ width: 240, marginBottom: '20px' }}
                  cover={<img alt={item.overview} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />}
                >
                  <Meta title={item.title}/>
                </Card>
            </Col>
            ))}
          </Row>
        </Col> 
      </Row>
    )
  }

  return(
    <></>
  )
  
}

export default ListMovie
