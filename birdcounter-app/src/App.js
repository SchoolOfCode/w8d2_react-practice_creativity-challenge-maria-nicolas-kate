import logo from "./logo.svg";
import "./App.css";
import { BirdButton } from "./Components/Button";

function App() {
  return (
    <div className="App">
      <h1>Bird counter</h1>
      <h1>🦆🦢🕊️🐧</h1>
      <BirdButton />
      <img src="https://via.placeholder.com/100x75" alt="bird pic"></img>
      <h2>Current bird count: </h2>
      <BirdButton />
    </div>
  );
}

export default App;
