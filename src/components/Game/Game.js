import React from 'react';

import { sample, checkGuess } from '../../utils';
import { WORDS } from '../../data';

import GameInput from './GameInput';
import GameBoard from './GameBoard';
import GameStatusBanner from './GameStatusBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  const [guesses, setGuesses] = React.useState([]);

  console.log(guesses)

  function handleAddGuess(label) {
    const nextGuessItem = [...guesses, label];

    setGuesses(nextGuessItem);
  }

  return (
    <>
    <div className="game-board-and-input">
          <GameBoard guesses={guesses} answer={answer} />
          <GameInput handleAddGuess={handleAddGuess} />
      </div>
      
      <GameStatusBanner answer={answer} guesses={guesses} />
    </>
  );
}

export default Game;
