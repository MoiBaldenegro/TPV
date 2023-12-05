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
      {categoriesData.allCategories.map((rowData, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {
            <Row
              rowData={rowData}
              onFocus={(colIndex) => handleCellFocus(rowIndex, colIndex)}
              rowIndex={rowIndex}
              istittle={false}
            />
          }
          {rowData.subCategories &&
            rowData.subCategories.length > 0 &&
            rowData.subCategories.map((subcatData, subcatIndex) => (
              <div key={subcatIndex}>
                <Row
                  key={subcatIndex}
                  rowData={rowData}
                  onFocus={(colIndex) => handleCellFocus(rowIndex, colIndex)}
                  rowIndex={subcatIndex}
                  istittle={false}
                />

                {subcatData.subCategories &&
                  subcatData.subCategories.length > 0 &&
                  subcatData.subCategories.map(
                    (subcatTwoData, subcatTwoIndex) => (
                      <div key={subcatTwoIndex}>
                        <Row
                          key={subcatIndex}
                          rowData={rowData}
                          onFocus={(colIndex) =>
                            handleCellFocus(rowIndex, colIndex)
                          }
                          rowIndex={subcatTwoIndex}
                          istittle={false}
                        />
                      </div>
                    ),
                  )}
              </div>
            ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Spreadsheet;
