import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { use } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((curActive) => (curActive === "X" ? "O" : "X"));
  }
  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player
          name="Player 1"
          symbol="X"
          isActive={activePlayer === "X"}
        ></Player>
        <Player
          name="Player 2"
          symbol="O"
          isActive={activePlayer === "O"}
        ></Player>
      </ol>
      <GameBoard select={handleSelectSquare} symbol={activePlayer} />
    </div>
  );
}

export default App;
