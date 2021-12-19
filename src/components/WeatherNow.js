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
            document.body.style.background = "#103f67e0";
            return "storm";
        } else if (id >= 300 && id <= 499) {
            document.body.style.background = "#4c74b7";
            return "drizzle";
        } else if (id >= 500 && id <= 599) {
            document.body.style.background = "#2d9788b0";
            return "rain";
        } else if (id >= 600 && id <= 699) {
            document.body.style.background = "#7fc9a9";
            return "snow";
        } else if (id >= 700 && id <= 799) {
            document.body.style.background = "#929592";
            return "fog";
        } else if (id === 800) {
            document.body.style.background = "#f1d27a";
            return "clear";
        } else if (id === 801) {
            document.body.style.background = "#9281a3";
            return "partlycloudy";
        } else if (id > 801 && id <= 805) {
            document.body.style.background = "#d9c76c";
            return "mostlycloudy";
        }
    }

    render() {
        return (
            <section className="today">
                <img src={require(`../img/weather-icons/${this.getIcon(this.props.list.weather[0].id)}.svg`)} alt="" />
                <p className="weather-title">{this.props.list.weather[0].description}</p>
                <p className="temperature">Temperature <span>&nbsp;&nbsp;{parseInt(this.props.list.main.temp_min)}&deg; to {parseInt(this.props.list.main.temp_max)}&deg; C</span></p>
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