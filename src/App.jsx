import { useState } from "react";
import "./App.css";
import sudokuApi from "./sudokuApi/sudoku";
import Board from "./components/board";

const getInitialPuzzle = () => {
  const boardString = sudokuApi.generate("easy");
  return sudokuApi.board_string_to_grid(boardString);
};

function App() {
  const [puzzle, setBoard] = useState(getInitialPuzzle());

  return (
    <>
      <div>
        <Board puzzle={puzzle} />
      </div>
    </>
  );
}

export default App;
