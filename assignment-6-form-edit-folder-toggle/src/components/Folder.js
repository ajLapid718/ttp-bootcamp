import React, { Component } from "react";

export default class Folder extends Component {
  constructor() {
    super();
    this.state = {
      toggleList: true
    };
  }

  toggleList = () => {
    this.setState({
      toggleList: !this.state.toggleList
    });
  };

  showList = () => {
    if (this.state.toggleList) {
      return (
        <ul style={{ width: "100px", margin: "auto", textAlign: "left" }}>
          <li>
            <span className="folder1">Johnny</span>
          </li>
          <li>
            <span className="folder2">Apple</span>
          </li>
          <li>
            <span className="folder3">Seed</span>
          </li>
        </ul>
      );
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <button onClick={this.toggleList}>Toggle List</button>
        </div>
        <h2>Folder</h2>
        {this.showList()}
      </div>
    );
  }
}
