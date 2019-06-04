import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      phoneNumber: props.phoneNumber,
      email: props.email
    };
  }

  render() {
    return (
      <div className="contactCard">
        <div>ID: {this.props.name}</div>
        <div>Phone Number: {this.props.phoneNumber}</div>
        <div>Email: {this.props.email}</div>
      </div>
    );
  }
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default ContactCard;
