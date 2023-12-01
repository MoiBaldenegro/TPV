// Styles
import styles from './spreadsheet.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Row from '../row/row';
import Column from '../column/column';
import { selectCell } from '../../../../redux/actions/tableExcels/selectCell';
import { useEffect } from 'react';

const Spreadsheet = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.spreadsheet.data);

  const handleCellFocus = (row, col) => {
    console.log(`Row: ${row}, Col: ${col}`);
    dispatch(selectCell(row, col));
  };
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className={styles.spreadsheet}>
      <Column
        colData={data.map((rowData) => rowData[0])}
        onFocus={(rowIndex) => handleCellFocus(rowIndex, 0)}
      />
      {data.map((rowData, rowIndex) => (
        <Row
          key={rowIndex}
          rowData={rowData}
          onFocus={(colIndex) => handleCellFocus(rowIndex, colIndex)}
        />
      ))}
    </div>
  );
};

export default Spreadsheet;
