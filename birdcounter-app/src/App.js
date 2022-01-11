import "./App.css";
import { BirdButton } from "./Components/Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function plus() {
    setCount(count + 1);
  }

  function minus() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>Bird counter</h1>
      <h1>🦆🦢🕊️🐧</h1>
      <BirdButton text="➖" onClick={minus} />
      <img src={require("./bird_magpie.png")} alt="magpie"></img>
      <h2>Current bird count: {count} </h2>
      <BirdButton text="➕" onClick={plus} />
    </div>
  );
}

export default App;
