import styles from './createDishes.module.css';
// Hooks
import { useState } from 'react';
//Icons
import arrow from './../../../../../assets/public/arrow.svg';
import arrowRigth from './../../../../../assets/public/arrowRigth.svg';
interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}
export default function CreateProductsModal({
  isOpen,
  onClose,
  children,
}: Props) {
  const [toggleStatus, setToggleStatus] = useState(false);
  return (
    <div className={styles.screen}>
      <section className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.tittleContainer}>
          <h1 className={styles.tittle}>{children}</h1>
          <span className={styles.textTittle}>
            Seleccione la categoría a la que se asignarán los productos.
          </span>
        </div>
        <div className={styles.containerInput}>
          <div className={styles.categoriesSelect}>
            <div
              className={styles.customSelect}
              onClick={() => {
                setToggleStatus(!toggleStatus);
              }}
            >
              <div className={styles.selectTrigger}>
                <span>Categorias</span>
                <img src={arrow} alt="" className={styles.arrowSelect} />
              </div>
              <div className={toggleStatus ? styles.options : styles.hidden}>
                <span className={styles.option}>Options</span>
                <span className={styles.option}> Option</span>
                <span className={styles.option}>Option</span>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.nextButton}>
          Siguiente
          <img src={arrowRigth} alt="arrow-rigth" />
        </button>
      </section>
    </div>
  );
}
