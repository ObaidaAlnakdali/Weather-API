import React from "react";
import "./Search.css";
import clear from "../img/weather-icons/clear.svg";

class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <header>
        <input type="text" placeholder="Type in a city name" />
        <button>FIND WEATHER</button>
      </header>
    );
  }
}
export default Search;
