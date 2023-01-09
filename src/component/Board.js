import React from "react";
import Square from "./Square"

class Board extends React.Component {
  renderBoard() {
    let arr = [];
    for (let row = 0; row < 9; row = row + 3) {
      arr.push(
        <div className="board-row">
          {this.renderSquare(row)}
        </div>
      );
    }
    return arr;
  }

  renderSquare(row) {
    let arr = [];
    for (let col = 0; col < 3; col++) {
      arr.push(
        <Square
          value={this.props.squares[row + col]}
          onClick={() => this.props.onClick(row + col)}
        />
      );
    }
    return arr;
  }

  render() {
    return (
      <div>
        {this.renderBoard()}
      </div>
    );
  }
}
export default Board