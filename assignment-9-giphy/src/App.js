import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SearchField from "./components/SearchField";
import GifCard from "./components/GifCard";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  setData = input => {
    this.setState({
      data: input
    });
  };

  render() {
    const SearchFieldComponent = () => (
      <SearchField onDataFetched={this.setData} />
    );

    const GifCardComponent = () => <GifCard data={this.state.data} />;

    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={SearchFieldComponent} />
          <Route exact path="/" render={GifCardComponent} />
        </div>
      </Router>
    );
  }
}
