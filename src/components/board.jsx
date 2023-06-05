import React from "react";
import Cell from "./cell";
const Board = ({ puzzle }) => {
  let cellEls = [];
  puzzle.forEach((row) => {
    row.forEach((number) => {
      let displayValue = number;
      if (number === ".") displayValue = "";
      cellEls.push(<Cell number={displayValue} />);
    });
  });

  return <div className="board">{cellEls}</div>;
};

export default Board;
