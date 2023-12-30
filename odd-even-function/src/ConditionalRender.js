import React from "react";
import { useState } from "react";

const ConditionalRender = () => {
  //declared the required states
  const [value, setValue] = useState(0);
  const [number, setNumber] = useState("even");

  //handle changes in input box
  const changeValue = (new_value) => {
    const newValue = parseInt(new_value, 10); //converted to a decimal number
    setValue(newValue);

    // console.log(newValue);

    //if entered value is'nt NaN
    if (!isNaN(newValue)) {
      setValue(newValue);

      if (newValue % 2 === 0) {
        setNumber("even");
      } else {
        setNumber("odd");
      }
    } else {
      // Handle the case when the input is not a valid number
      // make the input value to zero again and show Invalid input in <p>
      setValue(0);
      setNumber("Invalid input");
    }
    // ------------with below simple logic--------------------
    // jese hi you will delete default value 0,
    // wese hi input box will get filled with NaN value constantly,
    // handle the case when input box is empty OR has NaN value in it.
    // if (numericValue % 2 === 0) {
    //   setNumber("even");
    // } else {
    //   setNumber("odd");
    // }
  };
  return (
    <div>
      <input value={value} onChange={(e) => changeValue(e.target.value)} />
      <p>Its an {number}</p>
    </div>
  );
};

export default ConditionalRender;
