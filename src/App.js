import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import snow from "./img/weather-icons/snow.svg";
import clear from "./img/weather-icons/clear.svg";
import drizzle from "./img/weather-icons/drizzle.svg";

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

        <div className="today">
          <img src={drizzle} alt="" />
          <h4>Overcast cloude</h4>
          <h3>Temperature <span>10<sup>o</sup> to 11<sup>o</sup>C</span></h3>
          <p>Humidity <span>10%</span> pressure<span> 1008.48</span></p>
        </div>

        <div className="items">
          <div className="item">
            <p>03:00</p>
            <img src={clear} alt="" />
            <p>10<sup>o</sup></p>
          </div>
          <div className="item">
            <p>06:00</p>
            <img src={drizzle} alt="" />
            <p>10<sup>o</sup></p>
          </div>
          <div className="item">
            <p>06:00</p>
            <img src={drizzle} alt="" />
            <p>10<sup>o</sup></p>
          </div>
          <div className="item">
            <p>06:00</p>
            <img src={clear} alt="" />
            <p>10<sup>o</sup></p>
          </div>
          <div className="item">
            <p>06:00</p>
            <img src={snow} alt="" />
            <p>10<sup>o</sup></p>
          </div>
          <div className="item">
            <p>06:00</p>
            <img src={clear} alt="" />
            <p>6<sup>o</sup></p>
          </div>
          <div className="item">
            <p>06:00</p>
            <img src={drizzle} alt="" />
            <p>8<sup>o</sup></p>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
