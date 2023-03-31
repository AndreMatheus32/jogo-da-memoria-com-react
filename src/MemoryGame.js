import React, { useEffect, useState } from 'react';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import game from './game/game';

function MemoryGame() {

    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(game.createCard())
    }, [])

    function restart() {
        game.clearCards();
        setCards(game.createCard());
        setGameOver(false);
    }

    function handleFlip(card) {
        // if (game.setCard(card.id)) {
        //     if (game.secondCard) {
        //         if (game.checkMatch()) {
        //             game.clearCards();
        //             if (game.checkGameOver()) {
        //                 
        //                //game over
        //             }
        //         } else {
        //             setTimeout(() => {
        //              // No Match
        //                 game.unflipCards();
        //                 )
        //             }, 1000)
        //         }
        //     }
        // }
        // setCards([...game.cards])
        game.flipCard(card.id, () => {
            setGameOver(true);
            //gameOverCallBack
        }, () => {

            //noMatchCallBack
        })
        setCards([...game.cards]);
    }

    return (
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
            <GameOver show={gameOver} handleGameOver={restart}></GameOver>
        </div>
    )

}
export default MemoryGame;