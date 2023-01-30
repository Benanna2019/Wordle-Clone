import React from 'react'

export default function GameInput({handleAddGuess}) {
  const [guess, setGuess] = React.useState('');

  console.log('guess from GameInput: ', guess)

    function handleSubmit(event) {
      event.preventDefault();

      if (guess.length > 5 || guess.length < 5) {
          window.alert("Please enter a 5 letter word.")
          return
      }

      console.log(guess)
      handleAddGuess(guess)
      setGuess('')
    }


    return (
      <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" value={guess} onChange={(event) => setGuess(event.target.value.toUpperCase())} />
        <button type="submit" hidden onKeyDown={
          (event) => {
            if (event.key === 'Enter') {
              handleSubmit(event)
            }
          }
        }>Submit</button>
      </form>
      </>
    )
}