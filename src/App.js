import "./App.css";
import Die from "../src/components/Die.js";

export default function App() {
  return (
    <div className="App">
      <main className="gameContainer">
        <div className="diceContainer">
          <Die value="1" />
          <Die value="2" />
          <Die value="3" />
          <Die value="4" />
          <Die value="5" />
          <Die value="6" />
          <Die value="5" />
          <Die value="4" />
          <Die value="3" />
          <Die value="2" />
        </div>
      </main>
    </div>
  );
}
