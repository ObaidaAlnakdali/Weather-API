import React, { Component } from "react";
import Search from "./components/Search";
import WeatherNow from "./components/WeatherNow";
import Weatheritem from "./components/WeatherItem";
import PageError from "./components/pageError";

// import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listWeather: []
    };
  }

  getdata = (city => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=45b03c5e92d47b89fbf451225b6a704a`)
      .then(res => res.json())
      .then(data => this.setState({ listWeather: data.list }))
  });

  handleSearch = value => {
    console.log("country", value)
    this.getdata(value);
    console.log(this.state.listWeather);
  };

  render() {
    if (this.state.listWeather != "" && this.state.listWeather != undefined) {
      return (
        <div>
          <Search cityNameHandler={this.handleSearch} />
          <WeatherNow list={this.state.listWeather[0]} />
          <section className="items">
            {this.state.listWeather.map((key, index) => {
              return <Weatheritem key={index} list={key} />
            })}
          </section>
        </div>
      );
    }
    else {
      return (
        <>
          <Search cityNameHandler={this.handleSearch} />
          <PageError />
        </>
      );
    }
  }
}

export default App;
