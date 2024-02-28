import styles from './register.module.css';
import dateIcon from './../../../../../assets/public/clockIcon.svg';
import rightArrow from '../../../../../assets/public/arrowRigth.svg';
import leftArrow from '../../../../../assets/public/arrowLeft.svg';
import saveIcon from '../../../../../assets/public/disquetIcon.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartamentsAction } from '../../../../../redux/actions/usuarios/departamentsActions/getDepartaments';
import createAccount from '../../../../../pages/createAccount/createAccount';
import { createUser } from '../../../../../redux/actions/auth';

interface Props {
  isOpen: any;
  onClose: any;
  children: any;
  setEmployee: (arg: any) => void;
  currentEmployee: any;
}
export default function Register({
  isOpen,
  onClose,
  children,
  setEmployee,
  currentEmployee,
}: Props) {
  const [lastName, setLastName] = useState({
    first: '',
    second: '',
  });
  const [sequence, setSequence] = useState(1);
  const dispatch = useDispatch();
  const { allDepartaments } = useSelector((state) => state.departaments);

  useEffect(() => {
    dispatch(getDepartamentsAction);
    console.log(allDepartaments);
  });
  return (
    <main className={styles.screen}>
      <section className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.head}>{children}</div>
        <div className={styles.process}>
          <div className={styles.barOne}></div>
          <div
            className={
              sequence === 1
                ? styles.barOne
                : sequence === 2
                ? styles.barTwo
                : styles.barThree
            }
          >
            {' '}
          </div>
          <div className={styles.One}>
            <span>1</span>
          </div>
          <div
            className={
              sequence > 1 && sequence < 4 ? styles.active : styles.Two
            }
          >
            <span>2</span>
          </div>
          <div
            className={
              sequence > 2 && sequence < 4 ? styles.active : styles.Two
            }
          >
            <span>3</span>
          </div>
        </div>
        {sequence === 1 ? (
          <>
            <div className={styles.dataUser}>
              <h2>Datos personales</h2>
              <input
                placeholder="Apellido paterno"
                type="text"
                onChange={(e) => {
                  const { value } = e.target;
                  setLastName({ ...lastName, first: value });
                }}
              />
              <input
                placeholder="Apellido materno"
                type="text"
                onChange={(e) => {
                  const { value } = e.target;
                  setLastName({ ...lastName, second: value });
                }}
              />
              <input
                placeholder="Nombre(s)"
                type="text"
                onChange={(e) => {
                  const { value } = e.target;
                  setEmployee({ ...currentEmployee, name: value });
                }}
              />
            </div>
            <div className={styles.dataJob}>
              <h2>Datos laborales</h2>
              <div className={styles.customDate}>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  required
                  onChange={(e) => {
                    const { value } = e.target;
                    setEmployee({ ...currentEmployee, entryDate: value });
                  }}
                />
                <label htmlFor="fecha">Fecha de ingreso</label>
                <img src={dateIcon} alt="date-icon" />
              </div>
              <input
                placeholder="Turno"
                type="text"
                required
                onChange={(e) => {
                  const { value } = e.target;
                  setEmployee({ ...currentEmployee, shift: value });
                }}
              />
            </div>
          </>
        ) : sequence === 2 ? (
          <article>
            <div>
              <h2>Departamentos</h2>
              {allDepartaments?.map((element, index) => (
                <button className={styles.filterButton}>
                  {element.departamentName}
                </button>
              ))}
            </div>
            <div>
              <h2>Perfiles</h2>
              <form action="">
                {allDepartaments?.map((element, index) => (
                  <div className={styles.radioContainer}>
                    <input
                      type="radio"
                      id={element._id}
                      name="dapartaments"
                      value={element.departamentName}
                    />
                    <label htmlFor={element._id}>
                      {element.departamentName}
                    </label>
                  </div>
                ))}
              </form>
            </div>
          </article>
        ) : sequence === 3 ? (
          <div className={styles.third}>
            <div>
              <h3>Acceso al administrador</h3>
              <input
                type="text"
                placeholder="example@example.com"
                onChange={(e) => {
                  const { value } = e.target;
                  setEmployee({ ...currentEmployee, email: value });
                }}
              />
              <input
                type="password"
                placeholder="*********"
                onChange={(e) => {
                  const { value } = e.target;
                  setEmployee({ ...currentEmployee, password: value });
                }}
              />
            </div>
            <div>
              <h3>Acceso al punto de venta</h3>
              <h4>Codigo de empleado: 0006</h4>
              <input
                type="password"
                placeholder="*********"
                onChange={(e) => {
                  const { value } = e.target;
                  setEmployee({ ...currentEmployee, pinPos: value });
                }}
              />
            </div>
          </div>
        ) : null}
        <footer>
          {sequence > 1 && sequence < 4 ? (
            <button
              onClick={() => {
                setSequence(sequence - 1);
              }}
            >
              <img src={leftArrow} alt="arrow-icon" />
              Anterior
            </button>
          ) : null}
          {sequence < 3 ? (
            <button
              onClick={() => {
                setSequence(sequence + 1);
              }}
            >
              <img src={rightArrow} alt="arrow-icon" />
              Siguiente
            </button>
          ) : (
            <button
              className={styles.saveButton}
              onClick={() => {
                const lastNameConcat = lastName.first.concat(' ');
                const lastNameComplete = lastNameConcat.concat(lastName.second);
                const newUser = {
                  ...currentEmployee,
                  lastName: lastNameComplete,
                };
                dispatch(createUser(newUser));
              }}
            >
              <img src={saveIcon} alt="arrow-icon" />
              Guardar
            </button>
          )}
        </footer>
      </section>
    </main>
  );
}
