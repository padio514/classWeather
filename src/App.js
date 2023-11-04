
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('')
  const cities = ['busan', 'seoul', 'tokyo', 'paris'];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  }
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a2b3c88128ed776607a23884b7ebc973&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2b3c88128ed776607a23884b7ebc973&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  const handleCityChange = (city) => {
    if(city == "current"){
      setCity('')
    } else {
      setCity(city)
    }
  }

  useEffect(()=>{
    if(city == ''){
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city])

  return (
    <div  className='container'>
      <WeatherBox weather={weather} />
      <WeatherButton cities={cities} setCity={setCity} handleCityChange={handleCityChange} />
    </div>
  );
}
/**
 * 1. 유저는 현재위치의 날씨를 볼 수 있다. (지역, 온도, 날씨 상태 등등..)
 * 2. 유저는 다른 도시의 버튼들을 볼 수 있다.
 * 3. 유저는 다른 도시 버튼을 클릭하면 해당 도시의 날씨 정보를 볼 수 있다.
 * 4. 유저는 데이터가 로딩될 때 로딩 스피너를 볼 수 있다.
*/
export default App;
