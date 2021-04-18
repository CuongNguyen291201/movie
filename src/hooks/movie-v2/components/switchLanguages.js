import { Menu, Dropdown, Button, Row, Col } from 'antd'
import { DownOutlined } from '@ant-design/icons';

const SwitchLanguages = (props) => {
  const MenuLanguage = (props) => {
    return (
      <Menu onClick={(e) => props.change(e.key)}>
        <Menu.Item key="vi-VN">
          Vietnamese
        </Menu.Item>
        <Menu.Item key="en-US">
          English
        </Menu.Item>
      </Menu>
    )
  }

  return (
    <Row style={{ margin: '20px'}}>
      <Col span={20} offset={2}>
        <Dropdown overlay={<MenuLanguage change={props.change}/>}>
          <Button>
            Change Language <DownOutlined />
          </Button>
        </Dropdown> 
      </Col>
    </Row>
  )
}

export default SwitchLanguages
