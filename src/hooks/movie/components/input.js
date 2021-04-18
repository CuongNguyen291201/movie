import { Input, Row, Col } from 'antd';
import PropTypes from 'prop-types'

const { Search } = Input;

const InputMovie = (props) => {
  return (
    <>
      <Row style={{ marginTop: '5px'}}>
        <Col span={12} offset={6}>
          <Search 
            placeholder="name's movie..." 
            enterButton="Search" 
            size="large" 
            loading={props.loading}
            onSearch={val => props.search(val)}
          />
        </Col>
      </Row>
    </>
  )
}

InputMovie.propTypes = {
  search: PropTypes.func.isRequired
}

export default InputMovie
