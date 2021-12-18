import React, { Component } from "react";
import { render } from "react-dom";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import clear from "../img/weather-icons/clear.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import fog from "../img/weather-icons/fog.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import unknown from "../img/weather-icons/unknown.svg";
import "./WeatherItem.css";

class WeatherItem extends Component {
  render() {
    return (
      <div>
        <div className="item">
          <p>18:00</p>
          <img src={rain} alt="" />
          <p>{this.props.list.weather[0].id}&deg;C</p>
        </div>
      </div>
    )
  }
}

export default WeatherItem;

