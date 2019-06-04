import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "First Name",
      lastName: "Last Name",
      tempFirstName: "First Name",
      tempLastName: "Last Name",
      showForm: false
    };
  }

  showForm = () => {
    this.setState({
      showForm: true
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  displayForm = () => {
    if (this.state.showForm) {
      return (
        <form>
          <input
            type="text"
            name="tempFirstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="tempLastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <input type="submit" onClick={this.handleSubmit} value="Save" />
          <input type="submit" onClick={this.handleCancel} value="Cancel" />
        </form>
      );
    } else {
      return (
        <div>
          <div>{this.state.firstName}</div>
          <div>{this.state.lastName}</div>
          <button onClick={this.showForm}>Edit</button>
        </div>
      );
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      showForm: false,
      firstName: this.state.tempFirstName,
      lastName: this.state.tempLastName
    });
  };

  handleCancel = e => {
    e.preventDefault();
    this.setState({
      showForm: false
    });
  };

  render() {
    return (
      <div className="form">
        <div>{this.displayForm()}</div>
      </div>
    );
  }
}

export default Form;
