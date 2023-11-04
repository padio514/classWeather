
import {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './component/WeatherBox';
import './component/WeatherButton';

function App() {
  const getCurrentLocation = () =>{
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재위치 :",lat, lon);
      
    });
  }

  const getWeatherByCurrentLocation = async (lat, lon) =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1c88a68ad2586fa99934c456abe24f6e`
    let response = await fetch(url);
    let data= await response.json();
    console.log("데이터는", data);
  }
  
  useEffect(() => {
    getCurrentLocation();
  }, []);
  




  return (
    <div>
      <WeatherBox />
      <WeatherButton />


    </div>
  );
}

export default App;
/*
1. 유저는 현재 위치의 날씨를 볼 수 있다.
2. 유저는 다른 도시의 버튼들을 볼 수 있다.
3. 유저는 다른 도시의 버튼을 클릭하면 해당 도시의 날씨 정보를 볼 수 있다.
4. 유저는 데이터가 로딩 될 때의 로딩 스피너를 볼 수 있다.
*/