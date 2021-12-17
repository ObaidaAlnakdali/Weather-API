import React, { Component } from "react";
import { render } from "react-dom";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import clear from "../img/weather-icons/clear.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import "./WeatherItem.css";

class WeatherItem extends Component {
  render() {
    return (
      <section className="items">
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
      </section>
    )
  }
}

export default WeatherItem;

