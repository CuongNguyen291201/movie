import {useContext} from 'react';
import weatherContext from '../context/weatherContext';
import { Card } from 'antd';

const MainWeather = () => {
  const context = useContext(weatherContext)
  const info = context.dataWeather.main 
  const infoImg = context.dataWeather.weather[0]

  return (
    <>
      <Card title="Weather" bordered={true}>
        <p> - Temp: {info.temp_min} - {info.temp_max}</p>
        <p> - Pressure: {info.pressure}</p>
        <p> - Humidity: {info.humidity}</p>
        <img src={`http://openweathermap.org/img/w/${infoImg.icon}.png`} alt=""/>
      </Card>
    </>
  )
}

export default MainWeather
