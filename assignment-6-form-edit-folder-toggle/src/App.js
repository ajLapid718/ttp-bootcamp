import React, { Component } from "react";
import HelloWorld from "./components/HelloWorld";
import ContactCard from "./components/ContactCard";
import Decrement from "./components/Decrement";
import Form from "./components/Form";
import Folder from "./components/Folder";
import "./App.css";

const assignment5 = (
  <div>
    <HelloWorld />
    <div className="contacts">
      <ContactCard
        name="John Doe"
        phoneNumber="8773934448"
        email="johndoe@gmail.com"
      />
      <ContactCard
        name="Jillian Foe"
        phoneNumber="1234567890"
        email="jillianfoe@gmail.com"
      />
      <ContactCard
        name="Jamie Moe"
        phoneNumber="0987654321"
        email="jamiemoe@gmail.com"
      />
    </div>
    <Decrement number={0} />
  </div>
);

const assignment6 = (
  <div>
    <Form />
    <br />
    <Folder />
  </div>
);

class App extends Component {
  render() {
    return <div className="App">{assignment6}</div>;
  }
}

export default App;
