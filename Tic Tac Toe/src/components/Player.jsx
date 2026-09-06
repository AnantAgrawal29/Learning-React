import { useState } from "react";
export default function Player({ name, change, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  function handleEdit() {
    // setIsEditing(!isEditing); cannot use because
    // ** react use scheduling **
    // it schedules the state update but doesn't update the state yet
    // ** this doesn't update the value of isEditing **

    setIsEditing((editing) => !editing);
    if (isEditing) {
      change(symbol, playerName);
    }
    //gets latest editing state value and it is then changed,
    //** this changes the value of isEditing **
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing)
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
