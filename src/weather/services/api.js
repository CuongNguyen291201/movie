import axios from 'axios'

const getDataWeatherCity = async (city = '') => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric`

  const res = await axios.get(url)
  const result = res.status === 200 ? res.data : {}

  return result
}

export const apiWeather = {
  getDataWeatherCity
}

