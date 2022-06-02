const Square = ({ value, onClick }) => (
  <button 
    onClick={onClick} 
    className="square squareStyle" 
    >
      {value}
  </button>
);

export default Square;
