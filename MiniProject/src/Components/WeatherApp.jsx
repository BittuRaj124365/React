import {useState} from 'react'
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLike: 24.4,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.22,
    humidity: 47,
    weather: "haze",
  });
  let updateInfo=(result)=>{
    setWeatherInfo(result);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
