import "./App.css";
import sudokuApi from "./sudokuApi/sudoku";

function App() {
  return (
    <>
      <div>{sudokuApi.generate("easy")}</div>
    </>
  );
}

export default App;
