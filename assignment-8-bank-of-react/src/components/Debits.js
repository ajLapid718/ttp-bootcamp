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

export default class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debits: this.props.debits,
      debitTotal: this.props.debitTotal,
      accountBalance: this.props.accountBalance,
      debitsFormDescription: "",
      debitsFormAmount: 0,
      debitsFormDate: new Date().toISOString()
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    let newDebit = {
      description: this.state.debitsFormDescription,
      amount: parseFloat(this.state.debitsFormAmount),
      date: this.state.debitsFormDate
    };
    this.setState(prevState => ({
      debits: [...prevState.debits, newDebit],
      debitTotal: prevState.debitTotal + newDebit.amount,
      accountBalance: prevState.accountBalance - newDebit.amount
    }));
  };

  displayDebits = () => {
    return (
      <div className="debits">
        {this.state.debits.map((debit, index) => (
          <div className="debit" key={index}>
            <div>Description: {debit.description}</div>
            <div>Amount: {debit.amount}</div>
            <div>Date: {debit.date}</div>
          </div>
        ))}
      </div>
    );
  };

  displayForm = () => {
    return (
      <div className="debitsForm">
        <Form>
          <Label for="debitsFormDescription">Debit Description:</Label>
          <Input
            name="debitsFormDescription"
            type="text"
            placeholder="Describe your transaction"
            onChange={this.handleChange}
          />
          <Label for="debitsFormAmount">Debit Amount:</Label>
          <Input
            name="debitsFormAmount"
            type="number"
            placeholder="0.00"
            onChange={this.handleChange}
          />
          <Label for="debitsFormDate">Debit Date:</Label>
          <Input
            name="debitsFormDate"
            type="text"
            value={new Date().toISOString()}
            readOnly
          />
        </Form>
        <Button onClick={this.handleSubmit}>Add Debit</Button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>Debits</h1>
        <h2>
          <AccountBalance accountBalance={this.state.accountBalance} />
        </h2>
        <h2>Total Debits: {this.state.debitTotal}</h2>
        <br />
        {this.displayDebits()}
        <br />
        {this.displayForm()}
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

Debits.propTypes = {
  accountBalance: PropTypes.number.isRequired,
  debits: PropTypes.array.isRequired,
  debitTotal: PropTypes.number.isRequired
};
