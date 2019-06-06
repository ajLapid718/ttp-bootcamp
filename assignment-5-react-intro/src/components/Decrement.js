import React, { Component } from "react";
import PropTypes from "prop-types";

class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number
    };
  }

  increment = () => {
    this.setState(prevState => ({
      number: prevState.number + 1
    }));
  };

  decrement = () => {
    if (this.state.number > 0) {
      this.setState(prevState => ({
        number: prevState.number - 1
      }));
    } else {
      alert("Cannot be less than zero");
    }
  };

  render() {
    return (
      <div className="decrement">
        <div>Number: {this.state.number}</div>
        <div>
          Increment: <button onClick={this.increment}>+</button>
        </div>
        <div>
          Decrement: <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

Decrement.propTypes = {
  number: PropTypes.number.isRequired
};

export default Decrement;
