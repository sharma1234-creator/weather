import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=56f4220d5451a4f2f0a9924acc5ba054`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            placeholder="Please write the city"
            onChange={(event) => {
              setSearch(event.target.value);
            }}/>
        </div>

        {!city ? (
          <p className="errorMsg">Ooopss! No Data Found</p>
        ) : (
          <div>
            <div className="info">
              
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="feels_like">feels_like : {city.feels_like}°C</h3>

              <h3 className="tempmin_max">Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
              <h3 className="pressure">Pressure : {city.pressure}mBar </h3>
              <h3 className="humidity">Humidity : {city.humidity}% </h3>
            </div>

          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
