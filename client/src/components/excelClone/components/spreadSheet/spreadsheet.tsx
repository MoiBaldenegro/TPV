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
          <Row
            rowData={rowData}
            onFocus={(colIndex) => handleCellFocus(rowIndex, colIndex)}
            rowIndex={rowIndex}
            istittle={false}
          />

          {rowData.subCategories &&
            rowData.subCategories.map((subcatData, subcatIndex) => (
              <div key={subcatIndex}>
                <Row
                  key={`01-${subcatIndex}`}
                  rowData={rowData}
                  onFocus={(colIndex) => handleCellFocus(subcatIndex, colIndex)}
                  rowIndex={subcatIndex}
                  istittle={false}
                />

                {subcatData.subCategories &&
                  subcatData.subCategories.map(
                    (subcatTwoData, subcatTwoIndex) => (
                      <div key={`02-${subcatTwoIndex}`}>
                        <Row
                          key={subcatTwoIndex}
                          rowData={rowData}
                          onFocus={(colIndex) =>
                            handleCellFocus(subcatTwoIndex, colIndex)
                          }
                          rowIndex={subcatTwoIndex}
                          istittle={false}
                        />
                        {subcatTwoData.subCategories &&
                          subcatTwoData.subCategories.map(
                            (subcatThreeData, subcatThreeIndex) => (
                              <div key={`03-${subcatThreeIndex}`}>
                                <Row
                                  key={subcatThreeIndex}
                                  rowData={rowData}
                                  onFocus={(colIndex) =>
                                    handleCellFocus(subcatThreeIndex, colIndex)
                                  }
                                  rowIndex={subcatThreeIndex}
                                  istittle={false}
                                />
                                {subcatThreeData.subCategories &&
                                  subcatThreeData.subCategories.map(
                                    (subcatFourData, subcatFourIndex) => (
                                      <div key={`04-${subcatFourIndex}`}>
                                        <Row
                                          key={subcatFourIndex}
                                          rowData={rowData}
                                          onFocus={(colIndex) =>
                                            handleCellFocus(
                                              subcatFourIndex,
                                              colIndex,
                                            )
                                          }
                                          rowIndex={subcatFourIndex}
                                          istittle={false}
                                        />
                                        {subcatFourData.subCategories &&
                                          subcatFourData.subCategories.map(
                                            (
                                              subcatFiveData,
                                              subcatFiveIndex,
                                            ) => (
                                              <div
                                                key={`05-${subcatFiveIndex}`}
                                              >
                                                <Row
                                                  key={subcatFiveIndex}
                                                  rowData={rowData}
                                                  onFocus={(colIndex) =>
                                                    handleCellFocus(
                                                      subcatFiveIndex,
                                                      colIndex,
                                                    )
                                                  }
                                                  rowIndex={subcatFiveIndex}
                                                  istittle={false}
                                                />
                                              </div>
                                            ),
                                          )}
                                      </div>
                                    ),
                                  )}
                              </div>
                            ),
                          )}
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
