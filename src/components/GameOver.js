import React from 'react';

function GameOver(props) {

    return ( props.show ? 
    <div id="gameOver">
        <div>You Completed the Game!</div>
        <button id="restart" onClick={props.handleGameOver}>Play Again</button>
    </div> : <></>)
}

export default GameOver;