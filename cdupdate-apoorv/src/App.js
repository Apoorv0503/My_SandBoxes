import React, { Component } from "react";
import CDUpdateActivity from "./CDUpdateActivity";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: 1 };
  }

  componentDidUpdate() {
    console.log("App.js - componentDidUpdate called (App.js)");
  }

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.userId}
          onChange={(e) => this.setState({ userId: e.target.value })}
          min={1}
        />
        <CDUpdateActivity userId={this.state.userId} />
      </div>
    );
  }
}
