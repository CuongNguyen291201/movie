import WeatherProvider from "./context/weatherProvider";
import MainWeather from "./components/MainWeather";
import InfoWeather from "./components/InfoWeather";
import Other from "./components/Other";
import WeatherContext from './context/weatherContext';
import { helpers } from './helper/common';

function App() {
  return (
    <WeatherProvider> 
      <WeatherContext.Consumer>
        {context => {          
          if (!helpers.isEmptyObject(context.dataWeather)) {
            return (
              <>
                <MainWeather />
                <InfoWeather />
                <Other />
              </>
            )
          } 
        }}
      </WeatherContext.Consumer>
    </WeatherProvider>
  )
}

export default App