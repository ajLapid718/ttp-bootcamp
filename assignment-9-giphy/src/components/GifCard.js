import React, { Component } from "react";
import PropTypes from "prop-types";

export default class GifCard extends Component {
  constructor(props) {
    super(props);
  }

  displayGifs = () => {
    return (
      <div className="gifs">
        {this.props.data.map((gif, index) => (
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
