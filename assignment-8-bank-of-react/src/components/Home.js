import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

class Home extends Component {
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
