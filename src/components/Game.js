import Square from "./Square";
import React from "react";
import "./style/Games.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ListSquares: Array(9).fill(null),
      Xturn: true,
      winner: null,
      Xpts: 0,
      Opts: 0,
    };
  }
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  positionSquare(i) {
    return (
      <div className="Board__Item">
        <Square
          onClick={() => this.handleClick(i)}
          value={this.state.ListSquares[i]}
        />
      </div>
    );
  }

  handleClick = (i) => {
    const Squares = this.state.ListSquares.slice();
    if (this.calculateWinner(Squares) || Squares[i]) {
      return;
    } else {
      Squares[i] = this.state.Xturn ? "X" : "O";
      this.setState({
        ListSquares: Squares,
        Xturn: this.state.Xturn ? false : true,
      });
    }
    let winner = this.calculateWinner(Squares);
    if (winner !== null) {
      winner === "X"
        ? this.setState({
            Xpts: this.state.Xpts + 1,
          })
        : this.setState({
            Opts: this.state.Opts + 1,
          });
    }
  };

  again() {
    this.setState({
      ListSquares: Array(9).fill(null),
      Xturn: true,
    });
  }

  render() {
    let winner = this.calculateWinner(this.state.ListSquares);
    let status;
    if (winner) {
      status = `The winner is: ${winner}`;
    } else {
      status = "The turn " + (this.state.Xturn ? "X" : "O");
    }

    return (
      <div className="Game">
        <div className="Ptos">
          <div className="Ptos__ptos">
            <div>X points</div>
            <div>{this.state.Xpts}</div>
          </div>
          <div className="Ptos__ptos">
            <div>O Points</div>
            <div>{this.state.Opts}</div>
          </div>
        </div>
        <div>
          <h1 className="Game__Title">{status}</h1>
          <div className="Game__Board">
            {this.positionSquare(0)}
            {this.positionSquare(1)}
            {this.positionSquare(2)}
            {this.positionSquare(3)}
            {this.positionSquare(4)}
            {this.positionSquare(5)}
            {this.positionSquare(6)}
            {this.positionSquare(7)}
            {this.positionSquare(8)}
          </div>
        </div>
        <div>
          <button
            className="Game__repeat"
            onClick={() => this.again(this.state.winner)}
          >
            Play again
          </button>
        </div>
      </div>
    );
  }
}

export default Game;
