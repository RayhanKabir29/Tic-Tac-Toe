const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ onSelectplayer, turns }) => {
  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // const handleSelectSquare = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerBoard) => [...innerBoard]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = "X";
  //     return updatedBoard;
  //   });
  // };
  return (
    <ol id="game-board">
      {gameBoard?.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row?.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectplayer(rowIndex, colIndex)}>
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
