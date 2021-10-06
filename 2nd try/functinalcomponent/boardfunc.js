import React from "react";

const Board=()=>{
    const[squares, setSquares]=useState(Array(9).fill(null));
    console.log(squares);
    return (
        <div>
          <div className="status">{status}</div>
          <div className="row1">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="row2">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="row3">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
}
export default Board