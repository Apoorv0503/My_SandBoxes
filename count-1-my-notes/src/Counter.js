import React from "react";
import "./styles.css";

class Counter extends React.Component {
  constructor(props) {
    //read super() from https://www.w3schools.com/jsref/jsref_class_super.asp
    // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
    super(props);
    // state is also a property of class Counter(Counter is a component
    // and it has many properties..try logging this)

    this.state = {
      //state ka bhi type object hi h so Counter is an obj (component can be seen as an obj)
      //and this Counter has some more properties and objs in it.
      // jo bhi cheezo se state define hota hai wo yaha likho
      count: 0,
    };
  }

  incrementCount = () => {
    // this is representing the App component
    // console.log(this);
    this.setState((currState, currProp) => {
      console.log(currState);
      console.log(currProp);
      return { count: currState.count + currProp.diff };
      // count= currState.count+1; wrong
      // return count; wrong
    });
  };

  decrementCount = () => {
    this.setState((currState, currProp) => {
      return { count: currState.count - currProp.diff };
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.incrementCount}>+{this.props.diff}</button>
          <button onClick={this.decrementCount}>-{this.props.diff}</button>
        </div>

        {/* <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.incrementCount}>+10</button>
            <button onClick={this.decrementCount}>-10</button>
          </div> */}
      </div>
    );
  }
}

export default Counter;
