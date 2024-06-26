const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns?.map((turn) => (
        <li key={turn?.id}>
          {turn?.player} selected {turn?.square?.row}, {turn?.square?.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
