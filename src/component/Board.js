import React from "react";
import Square from "./Square"

class Board extends React.Component {
  renderSquare() {
    let arr = [];
    for (let row = 0; row < 9; row = row + 3) {
      arr.push(
        <div className="board-row">
          {this.renderCol(row)}
        </div>
      );
    }
    return arr;
  }

  renderCol(row) {
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
        {this.renderSquare()}
      </div>
    );
  }
}
export default Board