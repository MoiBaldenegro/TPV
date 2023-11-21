import styles from './autorizaciones.module.css';
//  Icons
import filterIcon from '../../../../assets/public/filterIcon.svg';
import searchIcon from '../../../../assets/public/searchIcon.svg';

export default function Autorizaciones() {
  return (
    <div className={styles.container}>
      <h1 className={styles.tittle}>Autorizaciones</h1>
      <section className={styles.section}>
        <div className={styles.containerOne}>
          <h3>Empleado</h3>
          <div className={styles.searchContainer}>
            <button className={styles.filterButton}>
              <img src={filterIcon} alt="filter-icon" />
              filtros
            </button>
            <div className={styles.searchBar}>
              <img
                src={searchIcon}
                alt="search-icon"
                className={styles.searchIcon}
              />
              <input
                className={styles.inputSearch}
                type="text"
                placeholder="Buscar por nombre"
              />
            </div>
          </div>
          <div>
            <h4>Empleado</h4>
            <h4>Empleado</h4>
            <h4>Empleado</h4>
            <h4>Empleado</h4>
            <h4>Empleado</h4>
            <h4>Empleado</h4>
            <h4>Empleado</h4>
            <h4>Empleado</h4>
            <h4>Empleado</h4>
            <h4>Empleado</h4>
            <h4>Empleado</h4>
            <h4>Empleado</h4>
            <h4>Empleado</h4>
            <h4>Empleado</h4>
            <h4>Empleado</h4>
            <h4>Empleado</h4>
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
