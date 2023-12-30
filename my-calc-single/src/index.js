import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const rootElement = document.getElementById("root");

class App extends React.Component {
  constructor(props) {
    super(props);
    // state is also a property of class App(App is a component
    // and it has many properties..try logging this)

    // this is representing the component App made using class components
    //count is the state property of App
    this.state = {
      //state ka bhi type object hi h so App is an obj (component can be seen as an obj)
      //and this App has some more properties and objs in it.
      // jo bhi cheezo se state define hota hai wo yaha likho
      count: 0,
      my_info: 0
    };
  }

  incrementCount = () => {
    // this is representing the App component
    // console.log(this);
    this.setState((currState) => {
      console.log(currState.my_info);
      return { count: currState.count + 1 };
      // count= currState.count+1; wrong
      // return count; wrong
    });
  };

  decrementCount = () => {
    this.setState((currState) => {
      return { count: currState.count - 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount}>+1</button>
        <button onClick={this.decrementCount}>-1</button>
      </div>
    );
  }
}

const root = createRoot(rootElement);
root.render(<App />);
