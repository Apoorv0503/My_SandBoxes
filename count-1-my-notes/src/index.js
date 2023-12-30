import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import App from "./app.js";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//--------------------------------latest syntax for corcurrent rendering--------------------------
// import React from "react";
// import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";

// class Component extends React.Component {
//  render() {
//    return (
//      <div>
//        <p> HELLO WORLD! </p>
//      </div>
//    );
//  }
// }
//-------------------------------------------------------------
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(<App />);

// class Counter extends React.Component {
//   constructor(props) {
//     //read super() from https://www.w3schools.com/jsref/jsref_class_super.asp
//     super(props);
//     // state is also a property of class App(App is a component
//     // and it has many properties..try logging this)

//     // this is representing the component App made using class components
//     //count is the state property of App
//     this.state = {
//       //state ka bhi type object hi h so App is an obj (component can be seen as an obj)
//       //and this App has some more properties and objs in it.
//       // jo bhi cheezo se state define hota hai wo yaha likho
//       count: 0,
//     };
//   }

//   incrementCount = () => {
//     // this is representing the App component
//     // console.log(this);
//     this.setState((currState, currProp) => {
//       console.log(currState);
//       console.log(currProp);
//       return { count: currState.count + currProp.diff };
//       // count= currState.count+1; wrong
//       // return count; wrong
//     });
//   };

//   decrementCount = () => {
//     this.setState((currState, currProp) => {
//       return { count: currState.count - currProp.diff };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <h1>{this.state.count}</h1>
//           <button onClick={this.incrementCount}>+{this.props.diff}</button>
//           <button onClick={this.decrementCount}>-{this.props.diff}</button>
//         </div>

//         {/* <div>
//           <h1>{this.state.count}</h1>
//           <button onClick={this.incrementCount}>+10</button>
//           <button onClick={this.decrementCount}>-10</button>
//         </div> */}
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Counter diff={1} />
//         <Counter diff={10} />
//       </div>
//     );
//   }
// }
