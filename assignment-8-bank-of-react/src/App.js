import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/LogIn";
import Debits from "./components/Debits";
import Credits from "./components/Credits";

const initialState = {
  accountBalance: 0,
  debits: [],
  debitTotal: 0,
  credits: [],
  creditTotal: 0,
  currentUser: {
    userName: "bob_loblaw",
    memberSince: "08/23/99"
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount = async () => {
    await this.fetchDebits();
    await this.fetchCredits();
  };

  // GET requests the API for debit transactions. Calls updateDebits().
  fetchDebits = async () => {
    try {
      let res = await axios.get(`https://moj-api.herokuapp.com/debits`);
      this.updateDebits(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Maps through each debit transaction and adds it to the array state.debits, while appropriately modifying state.accountBalance and state.debitTotal.
  updateDebits = async input => {
    try {
      for (let index in input) {
        let curDebit = input[index];
        this.setState(prevState => ({
          debits: [...prevState.debits, curDebit],
          debitTotal: prevState.debitTotal + curDebit.amount,
          accountBalance: prevState.accountBalance - curDebit.amount
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // GET requests the API for credit transactions. Calls updateCredits().
  fetchCredits = async () => {
    try {
      let res = await axios.get(`https://moj-api.herokuapp.com/credits`);
      this.updateCredits(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Maps through each credit transaction and adds it to the array state.credits, while appropriately modifying state.accountBalance and state.creditTotal.
  updateCredits = async input => {
    try {
      for (let index in input) {
        let curCredit = input[index];
        this.setState(prevState => ({
          credits: [...prevState.credits, curCredit],
          creditTotal: prevState.creditTotal + curCredit.amount,
          accountBalance: prevState.accountBalance + curCredit.amount
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Grabs debit data from Debit component and modifies App's state accordingly
  setDebitData = input => {
    this.setState(prevState => ({
      debits: [...prevState.debits, input],
      debitTotal: prevState.debitTotal + input.amount
    }));
    this.calculateBalance();
  };

  // Grabs credit data from Credit component and modifies App's state accordingly
  setCreditData = input => {
    this.setState(prevState => ({
      credits: [...prevState.credits, input],
      creditTotal: prevState.creditTotal + input.amount
    }));
    this.calculateBalance();
  };

  // Calculates the account balance based on the credit and debit transactions
  calculateBalance = () => {
    this.setState(prevState => ({
      accountBalance: prevState.creditTotal - prevState.debitTotal
    }));
  };

  mockLogIn = logInInfo => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  render() {
    const HomeComponent = () => (
      <Home
        accountBalance={this.state.accountBalance}
        debitTotal={this.state.debitTotal}
        creditTotal={this.state.creditTotal}
      />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );
    const LogInComponent = () => (
      <LogIn
        user={this.state.currentUser}
        mockLogIn={this.mockLogIn}
        {...this.props}
      />
    );
    const DebitsComponent = () => (
      <Debits
        accountBalance={this.state.accountBalance}
        debits={this.state.debits}
        debitTotal={this.state.debitTotal}
        onDataFetched={this.setDebitData}
      />
    );
    const CreditsComponent = () => (
      <Credits
        accountBalance={this.state.accountBalance}
        credits={this.state.credits}
        creditTotal={this.state.creditTotal}
        onDataFetched={this.setCreditData}
      />
    );

    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
