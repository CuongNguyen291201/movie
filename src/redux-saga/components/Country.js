import React from 'react';
import { Row, Col, Table, Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import { createStructuredSelector  } from 'reselect';

import { getDataCountryVirus } from '../reselect/coronaReselect';

const columns = [
  {
    title: 'Country',
    dataIndex: 'Country',
    key: 'Country'
  },
  {
    title: 'Country code',
    dataIndex: 'CountryCode',
    key: 'CountryCode'
  },
  {
    title: 'New Confirmed',
    dataIndex: 'NewConfirmed',
    key: 'NewConfirmed'
  },
  {
    title: 'Total Confirmed',
    dataIndex: 'TotalConfirmed',
    key: 'TotalConfirmed'
  },
  {
    title: 'New Deaths',
    dataIndex: 'NewDeaths',
    key: 'NewDeaths'
  },
  {
    title: 'Total Deaths',
    dataIndex: 'TotalDeaths',
    key: 'TotalDeaths'
  },
  {
    title: 'New Recovered',
    dataIndex: 'NewRecovered',
    key: 'NewRecovered'
  },
  {
    title: 'Total Recovered',
    dataIndex: 'TotalRecovered',
    key: 'TotalRecovered'
  }
];

const Country = () => {
  const { data } = useSelector(createStructuredSelector({
    data: getDataCountryVirus
  }));

  console.log(data)
  if (data === null) {
    return (
      <Skeleton active />
    )
  }

  return (
    <>
      <Row style={{ margin: '20px 0'}}>
        <Col span={24}>
          <Table rowKey="ID" columns={columns} dataSource={data} />
        </Col>
      </Row> 
    </>
  )
}

export default React.memo(Country)
