import styles from "./createCategories.module.css";
import { useModals } from "../../../../../hooks/useModals";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategory } from "../../../../../redux/actions";
// icons
import arrow from "../../../../../assets/public/arrow.svg";
import disquet from "../../../../../assets/public/disquetIcon.svg"
import createIcon from "../../../../../assets/public/createIcon.svg"

interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}
function CreateCategories({ isOpen, onClose, children }: Props) {
  const dispatch = useDispatch();
  const { toggleLenguaje, lenguajeSelect } = useModals();
  const [category, setCategory] = useState({
    code: "",
    categoryName: "",
    subCategories: [
      {
        code: "02",
        categoryName: "Subcategoría 1"
      },
      {
        code: "03",
        categoryName: "Subcategoría 2"
      }
    ],
    parentCategory: null,
    status: "enabled"
  });
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCategory(
      {
        ...category,
      [name]: value 
    }
    )
  }
  const onSubmit () => {
    dispatch(createCategory(category));
  }

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
                <input type="text" name="code" placeholder="code" onChange={handleChange} />
                <input type="text" name="categoryName" placeholder="Nombre de la subcategoría" onChange={handleChange}  className={styles.inputCategory}/>
              </div>
                <div className={styles.customSelect} onClick={toggleLenguaje}>
                  <div className={styles.selectTrigger}>
                    <span>Español</span>
                    <img src={arrow} alt="" className={styles.arrowSelect} />
                  </div>
                  <div className={lenguajeSelect ? styles.options : styles.hidden}>
                    <span className={styles.option}>English</span>
                    <span className={styles.option}>French</span>
                    <span className={styles.option}>摩西</span>
                  </div>
                </div>
            </div>
            <div className={styles.formRight}>
              <h3>Complementos</h3>
              <span>Contenido sugerido</span>
              <button className={styles.buttonFormRight}>
                <img src={createIcon} alt="" />Agregar subcategorias
              </button>
            </div>
          </div>
          
        </div>
        <div className={styles.buttonsContainer} >
          <button onClick={onSubmit} className={styles.buttonCreate}>
            <img src={disquet} alt="" />Guardar categoría
         </button>
        </div>

      </div>
    </div>
  );
}

export default CreateCategories;
