import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useGameStore = create(
  combine({ history: [Array(9).fill(null)], currentMove: 0, isXNext: true }, (set) => {
    return {
      setHistory: (nexthistory: Function | Array<null | 'X' | 'O'>[]) => {
        set((state) => ({
          history:
            typeof nexthistory === "function"
              ? nexthistory(state.history)
              : nexthistory,
        }));
      },
      setIsXNext: (nextIsXNext: Function | boolean) => {
        set((state) => ({
          isXNext:
            typeof nextIsXNext === "function"
              ? nextIsXNext(state.isXNext)
              : nextIsXNext,
        }));
      },
         setCurrentMove: (nextCurrentMove: Function | number) => {
          set((state) => ({
            currentMove:
              typeof nextCurrentMove === 'function'
                ? nextCurrentMove(state.currentMove)
                : nextCurrentMove,
          }))
        },
      reset: () => {
        set(() => ({
          history: Array(9).fill(null),
        }));
      },
    };
  })
);
