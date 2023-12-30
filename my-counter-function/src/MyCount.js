//eslint
import React from "react";
// import { createRoot } from "react-dom/client";
import { useState } from "react";

const MyCount = (props) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + parseInt(props.diff, 10));
  };

  const decrementCount = () => {
    setCount(count - parseInt(props.diff, 10));
  };

  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button onClick={incrementCount}>+{props.diff}</button>
        <button onClick={decrementCount}>-{props.diff}</button>
      </div>
    </div>
  );
};

export default MyCount;
//-----------------------------crio's sol---------------------
// import { useState } from "react";
// // import "./styles.css";

// function CounterHooks(props) {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(count + props.diff);
//   };

//   const decreaseCount = () => {
//     setCount(count - props.diff);
//   };

//   return (
//     <div>
//       <h1 className="counter-display">{count}</h1>
//       <button onClick={increaseCount}>+{props.diff}</button>
//       <button onClick={decreaseCount}>-{props.diff}</button>
//     </div>
//   );
// }

// export default CounterHooks;
