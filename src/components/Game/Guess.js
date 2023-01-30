import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

export default function Guess({ value, answer }) {

    console.log('value from Guess: ', value)
    console.log('answer from Guess: ', answer)

    const guessStatus = checkGuess(value, answer)

    console.log('guessStatus from Guess: ', guessStatus)

    return (
        <p className="guess">
          {range(5).map((index) => (
                <span key={index} className={`cell ${value && guessStatus[index]?.status === 'correct' ? 'correct' : value && guessStatus[index]?.status === 'misplaced' ? 'misplaced' : value && guessStatus[index]?.status === 'incorrect' ? 'incorrect' : ''}`}>
                    {value ? value[index] : undefined}
                </span>
          ))}
        </p>
    )
}