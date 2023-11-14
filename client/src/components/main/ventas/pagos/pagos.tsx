import styles from './pagos.module.css';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
//icons
import searchIcon from '../../../../assets/public/searchIcon.svg';
import filterIcon from '../../../../assets/public/filterIcon.svg';
import { useEffect } from 'react';
import { getPaymentsAction } from '../../../../redux/actions/ventas/paymentsActions/getPayments';

export default function Pagos() {
  const dispatch = useDispatch();
  const { allPayments } = useSelector((state) => state.payments);

  useEffect(() => {
    dispatch(getPaymentsAction());
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Pagos</h2>
      </section>
      <section className={styles.mainSection}>
        <div className={styles.mainHead}>
          <div className={styles.mainHeadLeft}>
            <span>Mostrar</span>
            <select name="" id="" className={styles.showSelect}>
              <option value="all">Todos</option>
              <option value="option-one">Option 1</option>
              <option value="optio-two">Option 2</option>
            </select>
            <span>Pagos</span>
          </div>
          <div className={styles.searchContainer}>
            <button className={styles.categoryButton}>
              <img src={filterIcon} alt="categories-button" />
              <span>Categorias</span>
            </button>
            <div className={styles.searchBarTable}>
              <img
                src={searchIcon}
                alt="search-icon"
                className={styles.searchIcon}
              />
              <input
                type="text"
                className={styles.searchBarTableInput}
                placeholder="Folio #000000"
              />
            </div>
          </div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Folio de pago</th>
              <th>Cuenta</th>
              <th>Nota</th>
              <th>Tipo de venta</th>
              <th>Total de la nota</th>
              <th>Propina</th>
              <th>Total pagado</th>
              <th>Forma de pago</th>
              <th>Cajero</th>
              <th>Fecha de pago</th>
              <th>Facturacion</th>
            </tr>
          </thead>
          <tbody>
            {allPayments?.map((element, index) => (
              <tr key={index}>
                <td>{element.paymentCode}</td>
                <td>{element.check}</td>
                <td>{element.noteCode}</td>
                <td>{element.sellType}</td>
                <td>{element.checkTotal}</td>
                <td>{element.tips}</td>
                <td>{element.paymentTotal}</td>
                <td>{element.paymentType}</td>
                <td>{element.cashier}</td>
                <td>{element.paymentDate}</td>
                <td>{element.billing}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.tableFooter}></div>
      </section>
    </div>
  );
}
