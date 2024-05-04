import { useState } from "react";

const Player = ({ name, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditing = () => {
    setIsEditing((editing) => !editing);
  };
  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleNameChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span lassName="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
