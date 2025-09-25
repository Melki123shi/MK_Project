'use client';

import { useGameStore } from "@/utils/store/useGameStore"
import Board from "./Board"

export default function Game() {
  const history = useGameStore((state: { history: Array<Array<null | 'X' | 'O'>>; }) => state.history)
  const setHistory = useGameStore((state: { setHistory: any; }) => state.setHistory)
  const currentMove = useGameStore((state: { currentMove: any; }) => state.currentMove)
  const setCurrentMove = useGameStore((state: { setCurrentMove: any; }) => state.setCurrentMove)
  const xIsNext = useGameStore((state: { isXNext: any; }) => state.isXNext)
  const setXIsNext = useGameStore((state: { setIsXNext: any; }) => state.setIsXNext)
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares: Array<null | 'X' | 'O'>[]) {
    const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares])
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
    setXIsNext(!xIsNext)
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove)
    setXIsNext(nextMove % 2 === 0)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'monospace',
      }}
    >
      <div>
        <Board isXNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div style={{ marginLeft: '1rem' }}>
        <ol>
          {history.map((_: any, historyIndex: number) => {
            const description =
              historyIndex > 0
                ? `Go to move #${historyIndex}`
                : 'Go to game start'

            return (
              <li key={historyIndex}>
                <button onClick={() => jumpTo(historyIndex)}>
                  {description}
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
