import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export default class GifCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      data: nextProps.data
    });
  };

  displayGifs = () => {
    return (
      <div className="gifs">
        {this.state.data.map((gif, index) => (
          <div className="gif" key={index}>
            <img src={gif.images.fixed_width.url} />
          </div>
        ))}
      </div>
    );
  };

  render() {
    return <div>{this.displayGifs()}</div>;
  }
}

GifCard.propTypes = {
  data: PropTypes.array.isRequired
};
