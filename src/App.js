import "./App.css";
import Die from "./components/Die.js";
import { useState } from "react";

export default function App() {
  const [diceNumbers, setDiceNumbers] = useState(allNewDice());

  const diceElements = diceNumbers.map((number) => {
    return <Die key={Math.random()} value={number} />;
  });

  function allNewDice() {
    const numbersArray = [];

    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 6 + 1);
      numbersArray.push(randomNumber);
    }

    return numbersArray;
  }

  function rollDice() {
    setDiceNumbers(allNewDice())
  }

  return (
    <div className="App">
      <main className="gameContainer">
        <div className="diceContainer">{diceElements}</div>
        <button className="rollBtn" onClick={rollDice}>Rolar</button>
      </main>
    </div>
  );
}
