import React from "react";
import ReactDOM from "react-dom";

const Game = () => {
  return (
    <div className="Game">
      ********ENJOY********
      <br />
      <div className="board">
        <Board />
      </div>
    </div>
  );
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
)
