import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../ComponentsCss/SearchBox.css";
export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  // for handling error
  const [error, setError] = useState(false);
  let API_KEY = "fc6f7e8374b81d9f397c4c1e11b9b2a5";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        MinTemp: jsonResponse.main.temp_min,
        MaxTemp: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };
  let handleChange = (e) => {
    // console.log(e.target.value);
    setCity(e.target.value);
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setCity(city);
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      setError(false); 
      updateInfo(newInfo);
      setCity("");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="SearchBox">
      <h1>Weather app</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          required
          variant="outlined"
          value={city}
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exist in our API ! </p> } 
      </form>
    </div>
  );
}
