import React from "react";
import Cell from "./cell";
const Board = ({ puzzle }) => {
  let cellEls = [];
  puzzle.forEach((row) => {
    row.forEach((number) => {
      cellEls.push(<Cell number={number} />);
    });
  });

  return <div className="board">{cellEls}</div>;
};

export default Board;
