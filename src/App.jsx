import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [isActive, setisActive] = useState("X");
  const handleSelectActivePlayer = (rowIndex, colIndex) => {
    setisActive((currentActive) => (currentActive === "X" ? "0" : "X"));
    setGameTurn((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns?.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "0";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={isActive === "X"} />
          <Player name="Player 2" symbol="0" isActive={isActive === "0"} />
        </ol>
        <GameBoard onSelectplayer={handleSelectActivePlayer} turns={gameTurn} />
        <Log turns={gameTurn} />
      </div>
    </main>
  );
}

export default App;
