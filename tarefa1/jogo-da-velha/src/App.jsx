import { useState } from "react";

function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const winner = calculateWinner(board);

  function handleClick(index) {

    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xTurn ? "X" : "O";

    setBoard(newBoard);
    setXTurn(!xTurn);
  }

  function restart(){
    setBoard(Array(9).fill(null));
    setXTurn(true);
  }

  return (
    <div className="container">

      <div className="game">

        <h1 className="title">Jogo da Velha</h1>

        <div className="board">

          {board.map((value, index) => (

            <button
              key={index}
              className="cell"
              onClick={() => handleClick(index)}
            >
              {value}
            </button>

          ))}

        </div>

        <div className="status">

          {winner
            ? `🏆 Vencedor: ${winner}`
            : `Vez do jogador: ${xTurn ? "X" : "O"}`}

        </div>

        <button className="restart" onClick={restart}>
          Reiniciar
        </button>

      </div>

    </div>
  );
}

function calculateWinner(squares){

  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for(let [a,b,c] of lines){

    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){

      return squares[a];

    }

  }

  return null;

}

export default App;