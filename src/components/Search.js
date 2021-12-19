import React from "react";
import "./Search.css";

class Search extends React.Component {

  state = {
    name: ''
  }

  handleOnchange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmission = (e)=>{
    e.preventDefault();
    this.props.cityNameHandler(this.state.name)
    this.setState(
        {
            name: ''
        }
    )
  }

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmission}>
          <input value={this.state.name} onChange={this.handleOnchange} type="text" placeholder="Type in a city name" required/>
          <button type="submit">FIND WEATHER</button>
        </form>
      </header>
    );
  }
}

export default Search;
