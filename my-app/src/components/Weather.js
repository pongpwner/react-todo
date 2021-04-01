import React, { useState, useEffect } from "react";

export default function Weather() {
  //use state to get input from form
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [loc, setLoc] = useState("Salisbury, us");
  const [display, setDisplay] = useState("Salisbury");
  const api = {
    key: "26ce245088c3cd75b76abae32afa318b",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  var controller = new AbortController();
  var signal = controller.signal;

  useEffect(() => {
    fetch(`${api.base}weather?q=${loc}&appid=${api.key}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCity(data["name"]);
        setTemp(Math.round((data["main"]["temp"] - 273.15) * (9 / 5) + 32));
        setDesc(data["weather"][0]["description"]);
        setDisplay(data.name);
      })
      .catch((err) => console.log("wrong city name"));
  }, [api.base, loc, api.key]);

  function displayWeather() {
    //console.log(city.city);
    setLoc(city);
    // fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCity(data["name"]);
    //     setTemp((data["main"]["temp"] - 273.15) * (9 / 5) + 32);
    //     setDesc(data["weather"][0]["description"]);
    //   })
    //   .catch((err) => console.log("wrong city name"));
  }

  return (
    <div className="weatherContainer">
      <div className="weatherInputContainer">
        <h1 className="weatherTitle">Weather</h1>
        <input
          type="text"
          placeholder="enter a city"
          className="inputValue"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <input type="submit" value="submit" onClick={displayWeather}></input>
      </div>
      <div className="weatherDisplayContainer">
        <div className="location">{display}</div>
        <div className="temperature">{temp} F</div>
        <div className="weatherDescription">{desc}</div>
      </div>
    </div>
  );
}
