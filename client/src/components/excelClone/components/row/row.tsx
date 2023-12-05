// styles
import styles from './row.module.css';
import Cell from '../cell/cell';
// Hooks
import { useEffect } from 'react';

const Row = ({ rowData, onFocus, rowIndex, istittle }) => {
  const oneSubcategory =
    rowData.subCategories && rowData.subCategories[rowIndex]
      ? rowData.subCategories[rowIndex].categoryName
      : '';
  const twoSubcategory = rowData.subCategories[rowIndex]?.subCategories[
    rowIndex - 1
  ]?.categoryName
    ? rowData.subCategories[rowIndex]?.subCategories[rowIndex - 1]?.categoryName
    : null;

  const threeSubcategory =
    rowData?.subCategories[rowIndex]?.subCategories[rowIndex - 1]
      ?.subCategories[0]?.categoryName;

  const fourSubcategory =
    rowData.subCategories[rowIndex]?.subCategories[rowIndex - 1]
      ?.subCategories[0]?.subCategories[0]?.categoryName;

  const impData = [
    rowIndex + 1,
    rowData.categoryName,
    oneSubcategory ? oneSubcategory : rowData.categoryName,
    twoSubcategory
      ? twoSubcategory
      : oneSubcategory
      ? oneSubcategory
      : rowData.categoryName,
    threeSubcategory
      ? threeSubcategory
      : twoSubcategory
      ? twoSubcategory
      : oneSubcategory
      ? oneSubcategory
      : rowData.categoryName,
    fourSubcategory
      ? fourSubcategory
      : threeSubcategory
      ? threeSubcategory
      : twoSubcategory
      ? twoSubcategory
      : oneSubcategory
      ? oneSubcategory
      : rowData.categoryName,
  ];
  useEffect(() => {
    console.log(
      `Intentando renderizar: ${
        rowData.subCategories[rowIndex]?.subCategories[rowIndex - 1]
          ?.subCategories[0]?.subCategories[0]?.categoryName
      }`,
    );
    console.log(`con el indice: ${rowIndex}`);
  });

  return (
    <div className={styles.row}>
      {impData.map((cellData, colIndex) => (
        <Cell
          key={colIndex}
          value={cellData}
          onFocus={() => onFocus(colIndex)}
          row={rowIndex}
          col={colIndex}
          istittle={istittle}
        />
      ))}
    </div>
  );
};

export default Row;
