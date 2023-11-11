import styles from './createCategories.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// icons
import disquet from '../../../../../../assets/public/disquetIcon.svg';
import createIcon from '../../../../../../assets/public/disquetIcon.svg';
import { createCategoryAction } from '../../../../../../redux/actions/catalogo/categoriesActions/createCategories';

interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}
function CreateCategories({ isOpen, onClose, children }: Props) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState({
    code: '25',
    categoryName: 'sdfgsdfgfsdf',
    subCategories: [
      {
        code: '02',
        categoryName: 'Subcategoría 1',
      },
      {
        code: '03',
        categoryName: 'Subcategoría 2',
      },
    ],
    parentCategory: null,
    status: 'enabled',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCategory({
      ...category,
      [name]: value,
    });
  };
  const onSubmit = () => {
    dispatch(createCategoryAction(category));
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <table>
          <thead>
            <tr>
              <th>Subcategoria 1</th>
              <th>Subcategoria 2</th>
              <th>Subcategoria 3</th>
              <th>Subcategoria 4</th>
              <th>Subcategoria 5</th>
              <th>Subcategoria 6</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
// new commit

export default CreateCategories;
