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

  getTime(i) {
    // eslint-disable-next-line default-case
    switch (i) {
      case 1: return "03:00";
      case 2: return "06:00";
      case 3: return "09:00";
      case 4: return "12:00";
      case 5: return "15:00";
      case 6: return "18:00";
      case 7: return "21:00";
    }
  }

  getdata(i) {
    if (i > 0) {
      return (
        <div className="item">
          <p>{this.getTime(i)}</p>
          <img src={require(`../img/weather-icons/${this.getIcon(this.props.list.weather[0].id)}.svg`)} alt="" />
          <p>{parseInt(this.props.list.main.temp_min)}&deg;C</p>
        </div>
      )
    }
  };

  render() {
    return (
      <div>
        {this.getdata(this.props.index)}
      </div>
    )
  }
}

export default WeatherItem;

