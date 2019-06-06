import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Bank of React</h1>
        <div className="links">
          <div>
            <Link to="/userProfile">User Profile</Link>
          </div>
          <div>
            <Link to="/debits">Debits</Link>
          </div>
          <div>
            <Link to="/credits">Credits</Link>
          </div>
        </div>
        <AccountBalance accountBalance={this.props.accountBalance} />
      </div>
    );
  }
}

export default Home;

Home.propTypes = {
  accountBalance: PropTypes.number.isRequired
};
