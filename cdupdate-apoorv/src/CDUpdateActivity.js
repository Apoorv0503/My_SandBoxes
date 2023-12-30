import axios from "axios";
import React, { Component } from "react";

class CDUpdateActivity extends Component {
  constructor(props) {
    super(props);
    // console.log("props: ");
    // console.log(props);
    this.state = { email: "" };
  }

  // calling an asynchronous function directly within componentDidUpdate can potentially lead to an infinite loop of re-renders.
  get_user_data() {
    axios
      .get(`https://reqres.in/api/users/${this.props.userId}`)
      .then((response) => {
        // Update the state with the received data..this response is in json automatically
        // console.log("response: ");
        // console.log(response);
        this.setState({
          // img: response.data.data.avatar,
          email: response.data.data.email
          // name: `${response.data.data.first_name} ${response.data.data.last_name}`
        });
      });
  }

  // *****userId state change in App.js and userId prop change in session2/CDUpdateActivityStub.js*****

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated (CDUpdateActivity.js)");
    // TODO - Add logic to make API call if userId prop changed

    // using the async keyword directly with componentDidMount and componentDidUpdate in a React class component is not supported.
    // These lifecycle methods are expected to be synchronous.
    // However, you can use asynchronous operations inside these methods by returning a Promise or by using the async/await syntax.

    //-----------see crio's solution for that----------------

    // this.get_user_data(); will lead you to the loop of re-render, tab irresponsive, use a condition
    if (this.props.userId !== prevProps.userId) {
      this.get_user_data();
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
      </div>
    );
  }
}

export default CDUpdateActivity;
