import Square from './Square';

const Board = ({ squares, onClick }) => {
  return (
    <div className="gameBoard containerStyle">
      <div id="statusArea" className="status instructionsStyle">Next player: <span>X</span></div>
      <div id="winnerArea" className="winner instructionsStyle" >Winner: <span>None</span></div>
      <div className="boardStyle rowStyle">
      {squares.map((square, i) => (
        <div className="board-row" key={i}>
          <Square value={square} onClick={() => onClick(i)} />
        </div>
      ))}
      </div>
    </div>
  );
}

export default Board;
