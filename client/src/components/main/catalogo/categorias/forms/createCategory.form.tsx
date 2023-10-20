import styles from "./createCategories.module.css";
import arrow from "../../../../../assets/public/arrow.svg";
import { useModals } from "../../../../../hooks/useModals";

interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}

function CreateCategories({ isOpen, onClose, children }: Props) {
  const { toggleLenguaje, lenguajeSelect } = useModals();

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
                <input type="text" readOnly value="Nombre de la categoría"  className={styles.inputCategory}/>
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
                <img src="" alt="" />Agregar
              </button>
            </div>
          </div>
          
        </div>
        <div className={styles.buttonsContainer} >
          <button className={styles.buttonCreate}>
            <img src="" alt="" />Guardar categoría
         </button>
        </div>

      </div>
    </div>
  );
}

export default CreateCategories;
