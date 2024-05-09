const GameBoard = ({ onSelectplayer, board }) => {
  return (
    <ol id="game-board">
      {board?.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row?.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectplayer(rowIndex, colIndex)}
                  disabled={col !== null}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
