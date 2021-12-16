import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import wether from "./img/weather-icons/clear.svg"

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
          <img src={"https://via.placeholder.com/300"} alt="" />
          <h4>Overcast cloude</h4>
          <h3>Temperature <span>10 to 11 C</span></h3>
          <p></p>
        </div>

        <div className="items">
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="" />
            </div>
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="" />
            </div>
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="" />
            </div>
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="" />
            </div>
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="" />
            </div>
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="" />
            </div>
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="" />
            </div>
        </div>

      </div>
    );
  }
}

export default App;
