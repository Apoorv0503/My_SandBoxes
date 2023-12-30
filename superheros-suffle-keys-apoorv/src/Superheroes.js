import { useState } from "react";

const Superheroes = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div>
      {props.name}
      <input type="checkbox" onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default Superheroes;
