import React from 'react';
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
  const categoriesData = useSelector((state) => state.categories);

  const handleCellFocus = (row, col) => {
    console.log(`Row: ${row}, Col: ${col}`);
    dispatch(selectCell(row, col));
  };
  const head = [
    '',
    'Categoría principal',
    'Subcategoria 1',
    'Subcategoria 2',
    'Subcategoria 3',
    'Subcategoria 4',
  ];
  useEffect(() => {
    console.log(categoriesData.allCategories);
  }, []);

  return (
    <div className={styles.spreadsheet}>
      <Column
        colData={head.map((rowData) => rowData)}
        onFocus={(rowIndex) => handleCellFocus(rowIndex, 0)}
      />
    </div>
  );
};

export default Spreadsheet;
