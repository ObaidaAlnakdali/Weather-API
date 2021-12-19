import React, { Component } from "react";
//import { render } from "react-dom";
import "./WeatherItem.css";

class WeatherItem extends Component {

  getIcon(id) {
    if (id < 300) {
        return "storm";
    } else if (id >= 300 && id <= 499) {
        return "drizzle";
    } else if (id >= 500 && id <= 599) {
        return "rain";
    } else if (id >= 600 && id <= 699) {
        return "snow";
    } else if (id >= 700 && id <= 799) {
        return "fog";
    } else if (id === 800) {
        return "clear";
    } else if (id === 801) {
        return "partlycloudy";
    } else if (id > 801 && id <= 805) {
        return "mostlycloudy";
    }
  }

  render() {
    return (
      <div>
        <div className="item">
          <p>18:00</p>
          <img src={require(`../img/weather-icons/${this.getIcon(this.props.list.weather[0].id)}.svg`)} alt="" />
          <p>{this.props.list.weather[0].id}&deg;C</p>
        </div>
      </div>
    )
  }
}

export default WeatherItem;

