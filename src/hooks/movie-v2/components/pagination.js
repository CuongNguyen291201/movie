import { Pagination, Row, Col } from 'antd'

const PaginationMovie = (props) => {
  return (
    <>
      <Row>
        <Col span={20} offset={2}>
          <div style={{ textAlign: 'center', margin: '30px'}}>
            <Pagination 
              total={props.totalItems} 
              current={props.currentPage}
              pageSize={20} 
              showSizeChanger={false} 
              onChange={pages => props.change(pages)}
            />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default PaginationMovie;