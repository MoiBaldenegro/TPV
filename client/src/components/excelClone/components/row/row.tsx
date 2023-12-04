// styles
import styles from './row.module.css';
import Cell from '../cell/cell';
// Hooks
import { useEffect } from 'react';

const Row = ({ rowData, onFocus, rowIndex }) => {
  const oneSubcategory =
    rowData.subCategories && rowData.subCategories[rowIndex]
      ? rowData.subCategories[rowIndex].categoryName
      : '';
  const impData = [
    rowIndex + 1,
    rowData.categoryName,
    oneSubcategory,
    'sadf',
    oneSubcategory.subCategories,
    '',
  ];

  return (
    <div className={styles.row}>
      {impData.map((cellData, colIndex) => (
        <Cell
          key={colIndex}
          value={cellData}
          onFocus={() => onFocus(colIndex)}
          row={rowIndex}
          col={colIndex}
        />
      ))}
    </div>
  );
};

export default Row;
