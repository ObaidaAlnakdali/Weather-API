import React, { Component } from "react";
//import { render } from "react-dom";
import rain from "../img/weather-icons/rain.svg";
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

