import styles from './details.module.css';
// Icons
import leftArrow from '../../../../assets/public/leftArrow.svg';
import pendingIcon from '../../../../assets/public/StatusIcon(pending).svg';
import dividerTwo from '../../../../assets/public/dividerTwo.svg';
import commentIcon from '../../../../assets/public/comentIcon.svg';
import eyeIcon from '../../../../assets/public/openEye.svg';
interface Props {
  element: any;
  isOpen: any;
  onClose: any;
  children: any;
}
export default function TillDetails({
  element,
  isOpen,
  onClose,
  children,
}: Props) {
  return (
    <div className={styles.screen}>
      <section className={styles.modal}>
        <div className={styles.sectionFirst}>
          <img src={leftArrow} alt="left-arrow-icon" onClick={onClose} />

          <h1 className={styles.tittleHead}>
            {children} {element.createdAt.slice(1, 16)}
          </h1>
        </div>
        <div className={styles.sectionTwo}>
          <div className={styles.detailsContainer}>
            <div className={styles.detailsInOne}>
              <div className={styles.detailsHead}>General</div>
              <div className={styles.detailsContent}>
                <div className={styles.itemContainer}>
                  <h5>Cajero</h5>
                  <h5>{element.user}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Número de caja</h5>
                  <h5>{element.device}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Apertura</h5>
                  <h5>{element.createdAt}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Cierre</h5>
                  <h5>{element.createdAt}</h5>
                </div>
              </div>
              <div className={styles.detailsHead}>Cajero ausente</div>
              <div className={styles.detailsContent}>
                <div className={styles.itemContainer}>
                  <h5>Cajero de apoyo</h5>
                  <h5>{element.user}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Apertura</h5>
                  <h5>{element.createdAt}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Cierre</h5>
                  <h5>{element.createdAt}</h5>
                </div>
              </div>
            </div>
            <div className={styles.detailsInTwo}>
              <div className={styles.detailsHeadTwo}>Informe de ventas</div>
              <div className={styles.detailsContentTwo}>
                <div className={styles.itemContainer}>
                  <h4>Formas de pago</h4>
                  <h4>Importe</h4>
                  <h4>Esperado</h4>
                  <h4>Diferencia</h4>
                </div>
              </div>
              <img src={dividerTwo} alt="divider-large" />
            </div>
            <div className={styles.detailsInOne}>
              <div className={styles.detailsHead}>Descuento de la cuenta</div>
              <div className={styles.detailsContent}>
                <div className={styles.itemContainer}>
                  <h5>Descuento realizado por</h5>
                  <h5>{element.user}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Descuento realizado a</h5>
                  <h5>{element.user}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Motivo de descuento</h5>
                  <h5>
                    <strong>Cortesia</strong>
                    <h5>
                      <img src={commentIcon} alt="comment-icon" />
                    </h5>
                  </h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Hora de descuento</h5>
                  <h5>12:00</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Porcentaje de descuento</h5>
                  <h5>10%</h5>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.detailsFirst}>
            <h2 className={styles.tableTittle}>Notas</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tHeadNote}>Nota</th>
                  <th className={styles.tHeadNote}>Abierta por</th>
                  <th className={styles.tHeadNote}>Productos</th>
                  <th className={styles.tHeadNote}>Total</th>
                  <th className={styles.tHeadNote}>Descuento</th>
                  <th className={styles.tHeadNote}>Estatus</th>
                  <th className={styles.tHeadNote}>Detalles</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.release}>
                  <td className={styles.tableRows}>1</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>2</td>
                  <td className={styles.tableRows}>{element.checkTotal}</td>
                  <td className={styles.tableRows}>-</td>
                  <td className={styles.tableRows}>
                    {element.status === 'enabled' ? (
                      <img
                        src={enabledIcon}
                        alt="enabled-icon"
                        onClick={onClose}
                      />
                    ) : element.status === 'disabled' ? (
                      <img
                        src={disabledIcon}
                        alt="disabled-icon"
                        onClick={onClose}
                      />
                    ) : (
                      <img
                        src={pendingIcon}
                        alt="pending-icon"
                        onClick={onClose}
                      />
                    )}
                    {element.status}
                  </td>
                  <td className={styles.buttonsContainer}>
                    <button
                      className={styles.actionButtonsFirstDetails}
                      onClick={() => {
                        notesDetails.openModal();
                        setAccount(element);
                      }}
                    >
                      <img src={eyeIcon} alt="open-eye-icon" />
                    </button>
                  </td>
                </tr>
                <tr className={styles.release}>
                  <td className={styles.tableRows}>1</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>2</td>
                  <td className={styles.tableRows}>{element.checkTotal}</td>
                  <td className={styles.tableRows}>-</td>
                  <td className={styles.tableRows}>{element.status}</td>
                  <td className={styles.buttonsContainer}>
                    <button
                      className={styles.actionButtonsFirstDetails}
                      onClick={() => {
                        notesDetails.openModal();
                        setAccount(element);
                      }}
                    >
                      <img src={eyeIcon} alt="open-eye-icon" />
                    </button>
                  </td>
                </tr>
                <tr className={styles.release}>
                  <td className={styles.tableRows}>1</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>2</td>
                  <td className={styles.tableRows}>{element.checkTotal}</td>
                  <td className={styles.tableRows}>-</td>
                  <td className={styles.tableRows}>{element.status}</td>
                  <td className={styles.buttonsContainer}>
                    <button
                      className={styles.actionButtonsFirstDetails}
                      onClick={() => {
                        notesDetails.openModal();
                        setAccount(element);
                      }}
                    >
                      <img src={eyeIcon} alt="open-eye-icon" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.detailsFirst}>
            <h2 className={styles.tableTittle}>Productos</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tHeadNote}>Nota</th>
                  <th className={styles.tHeadNote}>Orden</th>
                  <th className={styles.tHeadNote}>Categoria</th>
                  <th className={styles.tHeadNote}>Producto</th>
                  <th className={styles.tHeadNote}>Cantidad</th>
                  <th className={styles.tHeadNote}>Precio</th>
                  <th className={styles.tHeadNote}>Descuento</th>
                  <th className={styles.tHeadNote}>Importe</th>
                  <th className={styles.tHeadNote}>Enviado por</th>
                  <th className={styles.tHeadNote}>Cancelado por</th>
                  <th className={styles.tHeadNote}>Info</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.release}>
                  <td className={styles.tableRows}>1</td>
                  <td className={styles.tableRows}>2</td>
                  <td className={styles.tableRows}>Refrescos</td>
                  <td className={styles.tableRows}>Agua mineral</td>
                  <td className={styles.tableRows}>1</td>
                  <td className={styles.tableRows}>$39.00</td>
                  <td className={styles.tableRows}>-</td>
                  <td className={styles.tableRows}>$35.00</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>
                    <img src={commentIcon} alt="comment-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.detailsFirst}>
            <h2 className={styles.tableTittle}>Impresiones</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tHeadNote}>Folio</th>
                  <th className={styles.tHeadNote}>Impreso por</th>
                  <th className={styles.tHeadNote}>Terminal</th>
                  <th className={styles.tHeadNote}>Impresora</th>
                  <th className={styles.tHeadNote}>Folio de nota</th>
                  <th className={styles.tHeadNote}>Hora de impresion</th>
                  <th className={styles.tHeadNote}>Hora de solicitud</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.release}>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>100</td>
                  <td className={styles.tableRows}>{'(1)'} Bebidas</td>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                </tr>
                <tr className={styles.release}>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>100</td>
                  <td className={styles.tableRows}>{'(1)'} Bebidas</td>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                </tr>
                <tr className={styles.release}>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>100</td>
                  <td className={styles.tableRows}>{'(1)'} Bebidas</td>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
