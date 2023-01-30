import React from 'react'

export default function GameStatusBanner({ answer, guesses }) {

    const lastGuessCheck = guesses.map((guess, index) => {
        if (guess === answer) {
            return {
                numOfGuess: guesses.length,
                gameStatus: 'won'
            }
        } else if (index === 5 && guess[5] !== answer) {
            return {
                gameStatus: 'lost'
            }
        }
    })

    console.log('lastGuessCheck: ', lastGuessCheck)

    return (
        <>
        {lastGuessCheck.map((guess, index) => {
            return (
                <>
                {guess?.gameStatus === 'won' ? (
                <div className="happy banner">
                    <p>
                    <strong>Congratulations!</strong> Got it in
                    <strong>{guess.numOfGuess} guesses</strong>.
                    </p>
                </div>          
            ) : guess?.gameStatus === 'lost' ? (
                <div className="sad banner">
                    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
                </div>
            ) : null}
            </>
            )
            })}
            
        </>
  


    )
}