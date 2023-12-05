import Cell from '../cell/cell';

const Column = ({ colData, onFocus }) => {
  return (
    <div className="column">
      {colData.map((cellData, rowIndex) => (
        <Cell
          key={rowIndex}
          value={cellData}
          onFocus={() => onFocus(rowIndex)}
          row={rowIndex}
          col={0}
          istittle={true} // necesitamos mandar un valor aca
        />
      ))}
    </div>
  );
};

export default Column;
