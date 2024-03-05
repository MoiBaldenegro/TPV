import styles from './createDepartament.module.css';
import saveIcon from '../../../../../../assets/public/disquetIcon.svg';
import createIcon from '../../../../../../assets/public/createIcon.svg';
import deleteIcon from '../../../../../../assets/public/trashIcon.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDepartamentAction } from '../../../../../../redux/actions/usuarios/departamentsActions/createDepartament';
interface Props {
  isOpen: any;
  onClose: any;
  children: any;
  allDepartaments: any;
  openModal: () => void;
}
export default function CreateDepartament({
  isOpen,
  onClose,
  children,
  allDepartaments,
  openModal,
}: Props) {
  const [newDepartament, setNewDepartament] = useState(false);
  const [createDepartament, setCreateDepartament] = useState({});

  const dispatch = useDispatch();
  return (
    <main className={styles.screen}>
      <section className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.head}>
          <h2>{children}</h2>
        </div>
        <div className={styles.mainSection}>
          <div
            className={newDepartament ? styles.departamentBox : styles.hidden}
          >
            <input
              type="text"
              placeholder="Logistica...    Almacen...   Desarrollo..."
              onChange={(event) => {
                setCreateDepartament({
                  ...createDepartament,
                  departamentName: event?.target.value,
                });
              }}
            />
            <button
              onClick={() => {
                if (newDepartament) {
                  setNewDepartament(false);
                  return;
                }
                return;
              }}
            >
              <img src={deleteIcon} alt="delete-icon" />
            </button>
          </div>
          {allDepartaments?.map((element: any, index: any) => (
            <div key={index} className={styles.departamentBox}>
              <input type="text" readOnly value={element.departamentName} />
              <button>
                <img src={deleteIcon} alt="delete-icon" />
              </button>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <button
            onClick={() => {
              if (!newDepartament) {
                setNewDepartament(true);
                return;
              }
              return;
            }}
          >
            <img src={createIcon} alt="create-icon" />
            Crear
          </button>
          <button
            onClick={() => {
              openModal();
              dispatch(createDepartamentAction(createDepartament));
              onClose();
            }}
            disabled={!newDepartament}
          >
            <img src={saveIcon} alt="save-icon" />
            Guardar
          </button>
        </div>
      </section>
    </main>
  );
}
