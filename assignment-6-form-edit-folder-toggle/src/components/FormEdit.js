import React, { Component } from "react";

class FormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "First Name",
      lastName: "Last Name",
      formToggled: false
    };
  }

  toggleForm = input => {
    return (
      <form>
        <input value={this.state.firstName}>First Name: </input>
      </form>
    );
  };

  editName = input => {
    this.setState({
      firstName: "John",
      lastName: "Doe"
    });
  };

  render() {
    return (
      <div className="formEdit">
        <div>{this.state.firstName}</div>
        <div>{this.state.lastName}</div>
        <button onClick={this.toggleForm(true)}>Edit</button>
      </div>
    );
  }
}

export default FormEdit;
