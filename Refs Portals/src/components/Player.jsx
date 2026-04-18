// import { Fragment } from "react";
// "React Fragment" can be used as a wrapper to ensure that there's only one root JSX element whilst at the same time not rendering any DOM element. like <></>(shorter form)

import { useState, useRef } from "react";

export default function Player() {
  // Hooks - States,( *Refs* and Portals)
  const playerName = useRef();
  const [enteredPlayerName, setPlayerName] = useState(null);

  function handleClick() {
    // here ref playerName gets us below input in which ref is passed
    setPlayerName(playerName.current.value);

    // clearing input
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
