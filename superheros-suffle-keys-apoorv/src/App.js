// import your component
import { useState } from "react";
import Superheroes from "./Superheroes";

const App = () => {
  const superheroes_init = [
    { id: "a2jdkjd", name: "Winter Soldier" },
    { id: "jdkdjk1", name: "Iron Man" },
    { id: "b3dkdj2", name: "Black Widow" }
  ];
  const [Superhero, setSuperhero] = useState(superheroes_init);

  const shuffle = () => {
    let newArr = [...Superhero];
    newArr.sort(() => Math.random() - 0.5);
    setSuperhero(newArr);
  };
  return (
    <div>
      {Superhero.map((item) => (
        <Superheroes name={item.name} key={item.id} />
      ))}
      <br />
      <button onClick={shuffle}>Shuffle</button>
    </div>
  );
};

export default App;
{
  /* <Superheroes name={superheroes[0].name} />
<Superheroes name={superheroes[1].name} />
<Superheroes name={superheroes[2].name} /> */
}
