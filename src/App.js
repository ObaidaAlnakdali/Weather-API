import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Obaida"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">

        <header>
          <input type="text" placeholder="Type in a city name" />
          <button>FIND WEATHER</button>
        </header>

        <main className="today">
          <img src={mostlycloudy} alt="" />
          <p class="weather-title">Overcast cloude</p>
          <p class="temperature">Temperature <span>&nbsp;&nbsp;10&deg; to 11&deg;C</span></p>
          <p class="humidity">Humidity&nbsp;&nbsp;&nbsp;&nbsp;<span>78%</span>&nbsp;&nbsp;&nbsp;&nbsp;pressure&nbsp;&nbsp;<span>&nbsp;&nbsp;1008.48&nbsp;</span></p>
        </main>

        <footer className="items">
          <div className="item">
            <p>03:00</p>
            <img src={storm} alt="" />
            <p>10&deg;C</p>
          </div>
          <div className="item">
            <p>06:00</p>
            <img src={drizzle} alt="" />
            <p>10&deg;C</p>
          </div>
          <div className="item">
            <p>06:00</p>
            <img src={drizzle} alt="" />
            <p>10&deg;C</p>
          </div>
          <div className="item">
            <p>06:00</p>
            <img src={clear} alt="" />
            <p>10&deg;C</p>
          </div>
          <div className="item">
            <p>06:00</p>
            <img src={snow} alt="" />
            <p>10&deg;C</p>
          </div>
          <div className="item">
            <p>06:00</p>
            <img src={clear} alt="" />
            <p>6&deg;C</p>
          </div>
          <div className="item">
            <p>06:00</p>
            <img src={drizzle} alt="" />
            <p>8&deg;C</p>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
