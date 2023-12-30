import React from "react";
import Counter from "./Counter.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter diff={1} />
        <Counter diff={10} />
      </div>
    );
  }
}

export default App;
