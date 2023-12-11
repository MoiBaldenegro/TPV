// styles
import styles from './row.module.css';
import Cell from '../cell/cell';
// Hooks
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Row = ({ rowData, rowIndex, istittle, fatherIndex, subIndexTwo }) => {
  const { allCategories } = useSelector((state) => state.categories);
  const impData = [
    rowIndex,
    allCategories[fatherIndex]?.categoryName,
    '',
    '',
    rowData.categoryName ? rowData.categoryName : 'simon',
    rowData.categoryName ? rowData.categoryName : 'simon',
  ];
  useEffect(() => {
    console.log(
      `EN ${rowData.categoryName} FatherIndex${fatherIndex} y en subIndex${subIndexTwo}}`,
    );
  });

  return (
    <div className={styles.row}>
      {impData.map((cellData, colIndex) => (
        <Cell
          fatherIndex={fatherIndex}
          subIndexTwo={subIndexTwo}
          key={colIndex}
          value={cellData}
          row={rowIndex}
          col={colIndex}
          istittle={istittle}
        />
      ))}
    </div>
  );
};

export default Row;
/*
const Row = ({ rowData, onFocus, rowIndex, istittle }) => {
  const fourSubcategory = rowData.subCategories[rowIndex]?.subCategories[
    rowIndex
  ]?.subCategories[rowIndex]?.subCategories[rowIndex]?.categoryName
    ? rowData.subCategories[rowIndex]?.subCategories[rowIndex]?.subCategories[
        rowIndex
      ]?.subCategories[rowIndex]?.categoryName
    : rowData.subCategories[rowIndex]?.subCategories[rowIndex]?.categoryName
    ? rowData.subCategories[rowIndex]?.subCategories[rowIndex]?.categoryName
    : rowData.subCategories[rowIndex]?.categoryName
    ? rowData.subCategories[rowIndex]?.categoryName
    : rowData.categoryName;
  const threeSubcategory =
    rowData.subCategories[rowIndex]?.subCategories[rowIndex]?.subCategories[
      rowIndex
    ]?.categoryName;

  const impData = [
    rowIndex,
    fourSubcategory,
    fourSubcategory,
    fourSubcategory,
    threeSubcategory,
    fourSubcategory,
  ];
  useEffect(() => {
    console.log(rowIndex);
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

export default Row; */

/* 
function mapCategories(categories) {
  return categories.map(category => {
    const mappedCategory = {
      _id: category._id,
      code: category.code,
      categoryName: category.categoryName,
      subCategories: mapCategories(category.subCategories),
      parentCategory: category.parentCategory,
      status: category.status,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
      __v: category.__v
    };

    return mappedCategory;
  });
}

const originalArray = [
  // ... tu array original
];

const mappedArray = mapCategories(originalArray);
console.log(mappedArray);
*/
