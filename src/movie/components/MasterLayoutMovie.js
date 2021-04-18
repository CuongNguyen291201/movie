import React from 'react'
import HeaderMovie from './Header'
import FooterMovie from './Footer'
import { Layout } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const { Content } = Layout;

const SiteLayoutContent = styled.div`
  min-height: 500px;
  padding: 24px;
  background: #fff;
`;

const MasterLayoutMovie = (props) => {
  return (
    <Layout>
      <HeaderMovie/>
      <Content style={{ padding: '0 50px' }}>
        <SiteLayoutContent>
          {props.children} 
        </SiteLayoutContent>  
      </Content>
      <FooterMovie/>
    </Layout>
  )
}

MasterLayoutMovie.propTypes = {
  children: PropTypes.node.isRequired
}

export default React.memo(MasterLayoutMovie)
