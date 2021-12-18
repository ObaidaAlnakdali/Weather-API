import React, { Component } from "react";
import { render } from "react-dom";
import "./WeatherNow.css";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

class WeatherNow extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <section className="today">
                <img src={mostlycloudy} alt="" />
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