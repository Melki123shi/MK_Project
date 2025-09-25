"use client";
import { useGameStore } from "@/utils/store/useGameStore";
import Square from "./Square";
import { Button } from "@/components/ui/button";

const Board = ({squares, isXNext, onPlay} : {
    squares: Array<null | 'X' | 'O'>,
    isXNext: boolean,
    onPlay: Function
}) => {
  const reset = useGameStore((state) => state.reset);
  const history = useGameStore((state) => state.history);
  const setIsXNext = useGameStore((state) => state.setIsXNext);
  const setHistory = useGameStore((state) => state.setHistory);
  const winner = calculateWinner(squares)
  const turns = calculateTurns(squares)
  const player = isXNext ? "X" : "O";
    const status = calculateStatus(winner, turns, player)

  const handleClick = (i: number) => {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setIsXNext(!isXNext);
    history.push(nextSquares)
    setHistory(history);
  };

  function calculateWinner(squares: Array<null | 'X' | 'O'>) {
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

  function calculateTurns(squares: Array<null | 'X' | 'O'>) {
    return squares.filter((square) => !square).length;
  }

  function calculateStatus(winner: string | null, turns: number, player: string) {
    if (!winner && !turns) return "Draw";
    if (winner) return `Winner ${winner}`;
    return `Next player: ${player}`;
  }

  return (
    <div className="m-auto">

        <div style={{ marginBottom: '0.5rem' }}>{status}</div>
    <div className="grid grid-cols-3 grid-rows-3 border-[#999] h-[27.5rem] w-[27.5rem] m-auto">
      {squares.map((square, squareIndex) => (
        <Square
          value={square}
          key={squareIndex}
          onSquareClicked={(e) => {
            e.preventDefault();
            handleClick(squareIndex);
          }}
        />
      ))}
      <Button
        className="hover:cursor-pointer mx-auto mt-4 py-2 px-3 text-white"
        onClick={() => reset()}
      >
        Reset
      </Button>
    </div>
    </div>
  );
};

export default Board;
