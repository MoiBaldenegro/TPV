import styles from "./createCategories.module.css"
// dependencies
import { useState } from "react";
//icons 
import arrow from "../../assets/loginPage/arrow.svg"
//utils
import { toggleLenguaje } from "../../../../../utils/toggleLenguaje";

interface Props{
    isOpen: any,
    onClose: any,
    children: any
}

function CreateCategories({ isOpen, onClose, children } : Props) {
    const [ lenguajeSelect, setLenguajeSelect ] = useState(false);
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        {children}
            <div>
                <div>
                    <div>
                        <input type="text" readOnly value="Nombre de la categoría" />
                    </div>
                    <div className={styles.customSelect} onClick={toggleLenguaje}>
                        <div className={styles.selectTrigger}>
                            <span> Español </span>
                            <img src={arrow} alt="" className={styles.arrowSelect} />
                        </div>
                        <div className={lenguajeSelect? styles.options : styles.hidden}>
                            <span className={styles.option} >English</span>
                            <span className={styles.option}> French</span>
                            <span className={styles.option}>摩西</span>
                        </div>
                    </div>
                </div>
                <div>

                </div>

            </div>
            <div>

            </div>
        </div>
    </div>
  );
}

export default CreateCategories;