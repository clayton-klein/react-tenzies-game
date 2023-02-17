import "./App.css";
import Die from "./components/Die.js";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function App() {
  const [diceNumbers, setDiceNumbers] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

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
    if (tenzies) {
      setTenzies(false);
      setDiceNumbers(allNewDice());
    }

    setDiceNumbers((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.floor(Math.random() * 6 + 1) };
      })
    );
  }

  function holdDice(id) {
    setDiceNumbers((prevArray) =>
      prevArray.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  useEffect(() => {
    if (
      diceNumbers.every((dice) => dice.isHeld === true) &&
      diceNumbers.every((dice) => dice.value === diceNumbers[0].value)
    ) {
      setTenzies(true);
    }
  }, [tenzies, diceNumbers]);

  return (
    <div className="App">
      <main className="gameContainer">
        <h1 className="gameContainer__title">Tenzies</h1>
        <p className="gameContainer__instructions">
          Role até que todos os dados sejam iguais. Click em cada dado para
          "congelá-lo" no valor atual entre as rolagens.
        </p>
        <div className="diceContainer">{diceElements}</div>
        <button className="rollBtn" onClick={rollDice}>
          {tenzies ? "Novo Jogo" : "Rolar"}
        </button>
        {tenzies && <Confetti />}
      </main>
    </div>
  );
}
