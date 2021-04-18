import {useContext} from 'react';
import weatherContext from '../context/weatherContext';
import { Card } from 'antd';

const InfoWeather = () => {
  const context = useContext(weatherContext)
  const info = context.dataWeather.weather[0]

  return (
    <>
      <Card title="Info Weather" bordered={true}>
        <p> - Weather: {info.description}</p>
        <p> - Details: {info.main}</p>
      </Card>
    </>
  )
}

export default InfoWeather
