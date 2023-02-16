import "./App.css";
import Die from "./components/Die.js";
import { useState } from "react";

export default function App() {
  const [diceNumbers, setDiceNumbers] = useState(allNewDice());

  const diceElements = diceNumbers.map((number) => {
    return (
      <Die
        key={number.id}
        value={number.value}
        isHeld={number.isHeld}
        // to pass an argument to the callback func in this case
        // I had to put it inside another 'hollow' callback function
        funcHoldDice={() => holdDice(number.id)}
        id={number.id}
      />
    );
  });

  function allNewDice() {
    const numbersArray = [];

    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 6 + 1);

      numbersArray.push({
        id: i,
        value: randomNumber,
        isHeld: false,
      });
    }

    return numbersArray;
  }

  function rollDice() {
    setDiceNumbers(allNewDice());
  }

  function holdDice(id) {
    setDiceNumbers(prevArray => prevArray.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die;
    })
    )
  }

  return (
    <div className="App">
      <main className="gameContainer">
        <div className="diceContainer">{diceElements}</div>
        <button className="rollBtn" onClick={rollDice}>
          Rolar
        </button>
      </main>
    </div>
  );
}
