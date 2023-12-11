import React from 'react';
// Styles
import styles from './spreadsheet.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Row from '../row/row';
import Column from '../column/column';
import { useEffect } from 'react';

const Spreadsheet = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.spreadsheet.data);
  const { allCategories } = useSelector((state) => state.categories);

  const head = [
    '',
    'Categoría principal',
    'Subcategoria 1',
    'Subcategoria 2',
    'Subcategoria 3',
    'Subcategoria 4',
  ];

  const RecursiveRow = ({ data, index, fatherIndex, subIndexTwo }) => (
    <React.Fragment key={index}>
      <Row
        key={`CO${index}`}
        rowData={data}
        rowIndex={index}
        istittle={false}
        fatherIndex={fatherIndex}
        subIndexTwo={subIndexTwo}
      />
      {data.subCategories?.map((childData, childIndex) => (
        <RecursiveRow
          fatherIndex={fatherIndex}
          subIndexTwo={childIndex}
          key={`CO${index}-${childIndex}`}
          data={childData}
          index={childIndex}
        />
      ))}
    </React.Fragment>
  );

  return (
    <div className={styles.spreadsheet}>
      <Column colData={head.map((rowData) => rowData)} />
      {allCategories?.map((categoryData, categoryIndex) => (
        <>
          {categoryData.subCategories?.map((childData, childIndex) => (
            <RecursiveRow
              fatherIndex={categoryIndex}
              subIndexTwo={childIndex}
              key={`CO${categoryIndex}-${childIndex}`}
              data={childData}
              index={childIndex}
            />
          ))}
        </>
      ))}
    </div>
  );
};
export default Spreadsheet;
