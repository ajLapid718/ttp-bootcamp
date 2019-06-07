import React, { Component } from "react";
import { Link } from "react-router-dom";
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
import AccountBalance from "./AccountBalance";

export default class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credits: this.props.credits,
      creditTotal: this.props.creditTotal,
      accountBalance: this.props.accountBalance,
      creditsFormDescription: "",
      creditsFormAmount: 0,
      creditsFormDate: new Date().toISOString()
    };
  }

  // When this component receives new data from the App component, the data from the new props will modify this component's state accordingly
  componentWillReceiveProps = async nextProps => {
    this.setState({
      accountBalance: nextProps.accountBalance,
      credits: nextProps.credits,
      creditTotal: nextProps.creditTotal
    });
  };

  // Updates creditsFormDescription, creditFormsAmount, creditFormsDate on change
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Upon submit, adds the new credit transaction to state.credits and appropriately modifies  state.accountBalance and state.creditTotal.
  handleSubmit = e => {
    e.preventDefault();
    let newCredit = {
      description: this.state.creditsFormDescription,
      amount: parseFloat(this.state.creditsFormAmount),
      date: this.state.creditsFormDate
    };
    this.sendData(newCredit);
    // this.setState(prevState => ({
    //   credits: [...prevState.credits, newCredit],
    //   creditTotal: prevState.creditTotal + newCredit.amount,
    //   accountBalance: prevState.accountBalance - newCredit.amount
    // }));
  };

  // Sends the data back to App.js
  sendData = async input => {
    await this.props.onDataFetched(input);
  };

  // Displays the credit transactions
  displayCredits = () => {
    return (
      <div className="credits">
        {this.state.credits.map((credit, index) => (
          <div className="credit" key={index}>
            <div>Description: {credit.description}</div>
            <div>Amount: {credit.amount}</div>
            <div>Date: {credit.date}</div>
          </div>
        ))}
      </div>
    );
  };

  displayForm = () => {
    return (
      <div className="creditsForm">
        <Form>
          <Label for="creditsFormDescription">Credit Description:</Label>
          <Input
            name="creditsFormDescription"
            type="text"
            placeholder="Describe your transaction"
            onChange={this.handleChange}
          />
          <Label for="creditsFormAmount">Credit Amount:</Label>
          <Input
            name="creditsFormAmount"
            type="number"
            placeholder="0.00"
            onChange={this.handleChange}
          />
          <Label for="creditsFormDate">Credit Date:</Label>
          <Input
            name="creditsFormDate"
            type="text"
            value={new Date().toISOString()}
            readOnly
          />
        </Form>
        <Button onClick={this.handleSubmit}>Add Credit</Button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>Credits</h1>
        <h2>
          <AccountBalance accountBalance={this.state.accountBalance} />
        </h2>
        <h2>Total Credits: {this.state.creditTotal}</h2>
        <br />
        {this.displayCredits()}
        <br />
        {this.displayForm()}
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

Credits.propTypes = {
  accountBalance: PropTypes.number.isRequired,
  credits: PropTypes.array.isRequired,
  creditTotal: PropTypes.number.isRequired
};
