import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export default class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: "h981o6K7fiMu8GUuEenHhiTDwexHzb6y",
      searchTerm: ""
    };
  }

  // Displays trending GIFs on page load
  componentDidMount = () => {
    this.fetchTrendingData();
  };

  // Updates state.searchTerm when the search box changes
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Upon submit, fetches the data for those search terms
  handleRegularSubmit = e => {
    e.preventDefault();
    this.fetchRegularData();
  };

  // Upon submit, fetches the data for those search terms
  handleRandomSubmit = e => {
    e.preventDefault();
    this.fetchRandomData();
  };

  // GET requests GIPHY's API for those search terms and calls sendData()
  fetchRegularData = async () => {
    try {
      let res = await axios.get(
        `http://api.giphy.com/v1/gifs/search?q=${
          this.state.searchTerm
        }&api_key=${this.state.apiKey}`
      );
      await this.sendData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // GET requests GIPHY's API for a trending search and calls sendData()
  fetchTrendingData = async () => {
    try {
      let res = await axios.get(
        `http://api.giphy.com/v1/gifs/trending?api_key=${this.state.apiKey}`
      );
      await this.sendData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // GET requests GIPHY's API for a random search and calls sendData()
  fetchRandomData = async () => {
    try {
      let res = await axios.get(
        `http://api.giphy.com/v1/gifs/random?api_key=${this.state.apiKey}`
      );
      await this.sendData([res.data.data]);
    } catch (err) {
      console.log(err);
    }
  };

  // Sends the data back to App.js
  sendData = async input => {
    await this.props.onDataFetched(input);
  };

  render() {
    return (
      <div>
        <Form className="searchForm">
          <Label for="searchTerm" />
          <Input
            className="inputRegularSearch"
            type="text"
            name="searchTerm"
            placeholder="Enter your search terms here"
            onChange={this.handleChange}
          />
          <Input
            className="btnRegularSearch"
            type="submit"
            onClick={this.handleRegularSubmit}
            value="Search!"
          />
          <Input
            className="btnRandomSearch"
            type="submit"
            onClick={this.handleRandomSubmit}
            value="Random GIF"
          />
        </Form>
      </div>
    );
  }
}
