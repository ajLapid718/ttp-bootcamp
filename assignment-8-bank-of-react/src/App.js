import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/LogIn";
import Debits from "./components/Debits";
import Credits from "./components/Credits";

class App extends Component {
  constructor() {
    super();

    this.state = {
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
  }

  fetchDebits = async () => {
    try {
      let res = await axios.get(`https://moj-api.herokuapp.com/debits`);
      for (let index in res.data) {
        let curDebit = res.data[index];
        this.setState(prevState => ({
          debits: [...prevState.debits, curDebit],
          debitTotal: prevState.debitTotal + curDebit.amount,
          accountBalance: prevState.accountBalance - curDebit.amount
        }));
      }
    } catch (err) {
      console.log(err);
    }
    return Promise.resolve("ok");
  };

  fetchCredits = async () => {
    try {
      let res = await axios.get(`https://moj-api.herokuapp.com/credits`);
      for (let index in res.data) {
        let curCredit = res.data[index];
        this.setState(prevState => ({
          credits: [...prevState.credits, curCredit],
          creditTotal: prevState.creditTotal + curCredit.amount,
          accountBalance: prevState.accountBalance + curCredit.amount
        }));
      }
    } catch (err) {
      console.log(err);
    }
    return Promise.resolve("ok");
  };

  componentDidMount = () => {
    return Promise.all([this.fetchDebits(), this.fetchCredits()]);
  };

  mockLogIn = logInInfo => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  render() {
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
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
      />
    );
    const CreditsComponent = () => (
      <Credits
        accountBalance={this.state.accountBalance}
        credits={this.state.credits}
        creditTotal={this.state.creditTotal}
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
