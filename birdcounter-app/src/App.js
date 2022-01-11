import "./App.css";
import magpiePic from "./Public/bird_magpie.png";
import cootPic from "./Public/bird_coot.png";
import swanPic from "./Public/bird_swan.png";
import { BirdSection } from "./Components/BirdSection";

function App() {

  return (
    <div className="App">
      <h1>Bird counter</h1>
      <h1>🦆🦢🕊️🐧</h1>
      <BirdSection image={magpiePic} bird="Magpie" />
      <BirdSection image={cootPic} bird="Coot" />
      <BirdSection image={swanPic} bird="Swan" />
    </div>
  );
}

export default App;
