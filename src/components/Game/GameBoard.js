import React from 'react'

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'
import Guess from './Guess'

export default function GameBoard({ guesses, answer }) {
    console.log('guesses from GameBoard: ', guesses);

    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
                console.log('guesses[index]: ', guesses[index])
                return (
                <Guess key={index} value={guesses[index]} answer={answer} />
                )
})}
        </div>
    )
}