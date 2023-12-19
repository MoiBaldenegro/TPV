import styles from './autorizaciones.module.css';
//  Icons
import filterIcon from '../../../../assets/public/filterIcon.svg';
import searchIcon from '../../../../assets/public/searchIcon.svg';
import { useSelector } from 'react-redux';

export default function Autorizaciones() {
  const { allProfiles } = useSelector((state) => state.profiles);
  return (
    <div className={styles.container}>
      <h1 className={styles.tittle}>Autorizaciones</h1>
      <section className={styles.section}>
        <div className={styles.containerOne}>
          <div className={styles.tittles}>
            <h3 className={styles.profiles}>Perfiles</h3>
            <h3 className={styles.employees}>Empleados</h3>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.list}>
              {allProfiles?.map((element) => (
                <h4 className={styles.item}>{element.profileName}</h4>
              ))}
              {allProfiles?.map((element) => (
                <h4 className={styles.item}>{element.profileName}</h4>
              ))}
              {allProfiles?.map((element) => (
                <h4 className={styles.item}>{element.profileName}</h4>
              ))}
              {allProfiles?.map((element) => (
                <h4 className={styles.item}>{element.profileName}</h4>
              ))}
              {allProfiles?.map((element) => (
                <h4 className={styles.item}>{element.profileName}</h4>
              ))}
              {allProfiles?.map((element) => (
                <h4 className={styles.item}>{element.profileName}</h4>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <div className={styles.containerTwo}>
            <h3>Autorizacion por modulos</h3>
            <section className={styles.sectionInTwo}>
              <div className={styles.inContainerOne}></div>
              <div className={styles.inContainerTwo}></div>
              <div className={styles.inContainerThree}></div>
            </section>
          </div>
          <div className={styles.containerThree}>
            <h3>Autorizacion por acciones</h3>
            <div>
              <button></button>
              <button></button>
            </div>
            <div></div>

            <div>
              <button></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
