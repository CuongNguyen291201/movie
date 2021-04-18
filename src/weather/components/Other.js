import {useContext} from 'react';
import weatherContext from '../context/weatherContext';
import { Card } from 'antd';

const Other = () => {
  const context = useContext(weatherContext)
  const info = context.dataWeather
  const other = context.dataWeather.weather[0]


  return (
    <>
      <Card title="Other" bordered={true}>
        <p> - Wind: speed: {info.wind.speed}, deg: {info.wind.deg}</p>
        <p> - Visibility: {info.visibility}</p>
        <p> - Rain: {other.main === "Rain" ? 'Yes' : 'No'}</p>
      </Card>
    </>
  )
}

export default Other
