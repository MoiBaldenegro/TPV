import styles from './createCategories.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// icons
import disquet from '../../../../../assets/public/disquetIcon.svg';
import createIcon from '../../../../../assets/public/createIcon.svg';
import { createCategoryAction } from '../../../../../redux/actions/catalogo/categoriesActions/createCategories';

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
        <div className={styles.contentContainer}>
          {children}
          <div className={styles.formContainer}>
            <div className={styles.formLeft}>
              <h3>General</h3>
              <div>
                <input
                  type="text"
                  name="code"
                  placeholder="code"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="categoryName"
                  placeholder="Nombre de la subcategoría"
                  onChange={handleChange}
                  className={styles.inputCategory}
                />
              </div>
            </div>
            <div className={styles.formRight}>
              <h3>Complementos</h3>
              <span>Contenido sugerido</span>
              <button className={styles.buttonFormRight}>
                <img src={createIcon} alt="" />
                Agregar subcategorias
              </button>
            </div>
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <button onClick={onSubmit} className={styles.buttonCreate}>
            <img src={disquet} alt="" />
            Guardar categoría
          </button>
        </div>
      </div>
    </div>
  );
}
// new commit

export default CreateCategories;
