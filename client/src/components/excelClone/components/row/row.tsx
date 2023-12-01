// styles
import styles from './row.module.css';
import Cell from '../cell/cell';
// Hooks
import { useEffect } from 'react';

const Row = ({ rowData, onFocus, rowIndex }) => {
  useEffect(() => {
    console.log(rowData);
  }, []);

  return (
    <div className={styles.row}>
      {rowData.map((cellData, colIndex) => (
        <Cell
          key={colIndex}
          value={rowIndex} // Por que rowindex es el valor???????????????????? IMPORTANTE!!
          onFocus={() => onFocus()}
          row={rowIndex}
          col={0}
        />
      ))}
    </div>
  );
};

export default Row;
