import React, { Component } from "react";
import Search from "./components/Search";
import WeatherNow from "./components/WeatherNow";
import Weatheritem from "./components/WeatherItem";

import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listWeather : fakeWeatherData.list
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div>
        <Search />
        <WeatherNow list={this.state.listWeather[0]}/>
        <section className="items">
          {this.state.listWeather.map((key, index) => {
            if(index < 7){
               return <Weatheritem key={index} list={key}/>
            }
          })}
        </section>
      </div>
    );
  }
}

export default App;
