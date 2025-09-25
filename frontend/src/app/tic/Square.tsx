"use client";
import React, { MouseEventHandler } from "react";

const Square = ({
  value,
  onSquareClicked,
}: {
  value: 'X' | 'O' | null;
  onSquareClicked: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="border-1 border-[#999] items-center bg-[#fff] justify-center text-[4rem] text-black"
      onClick={onSquareClicked}
    >
      {value}
    </button>
  );
};

export default Square;
