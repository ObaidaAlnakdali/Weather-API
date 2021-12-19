import React, { Component } from "react";
//import { render } from "react-dom";
import "./WeatherNow.css";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

class WeatherNow extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

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
            <section className="today">
                <img src={require(`../img/weather-icons/${this.getIcon(this.props.list.weather[0].id)}.svg`)} alt="" />
                <p className="weather-title">{this.props.list.weather[0].description}</p>
                <p className="temperature">Temperature <span>&nbsp;&nbsp;10&deg; to 11&deg;C</span></p>
                <p className="humidity">
                    Humidity&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{this.props.list.main.humidity}%</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;pressure&nbsp;&nbsp;
                    <span>&nbsp;&nbsp;{this.props.list.main.pressure}&nbsp;</span>
                </p>
            </section>
        );
    }
}

export default WeatherNow;