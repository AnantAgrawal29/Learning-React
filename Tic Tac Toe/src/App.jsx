import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X"></Player>
        <Player name="Player 2" symbol="O"></Player>
      </ol>
      <GameBoard />
    </div>
  );
}

export default App;
