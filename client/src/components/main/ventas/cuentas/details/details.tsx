import { useEffect } from 'react';
import styles from './details.module.css';
// Icons
import leftArrow from '../../../../../assets/public/leftArrow.svg';
import enabledIcon from '../../../../../assets/public/StatusIcon(enabled).svg';
import disabledIcon from '../../../../../assets/public/StatusIcon(disabled).svg';
import pendingIcon from '../../../../../assets/public/StatusIcon(pending).svg';
import arrowRightSmall from '../../../../../assets/public/arrowRightSmall.svg';
import commentIcon from '../../../../../assets/public/comentsIcon.svg';
interface Props {
  element: any;
  isOpen: any;
  onClose: any;
  children: any;
}
export default function NotesDetails({
  element,
  isOpen,
  onClose,
  children,
}: Props) {
  useEffect(() => {
    console.log(element);
  });
  return (
    <div className={styles.screen}>
      <section className={styles.modal}>
        <div className={styles.sectionFirst}>
          <img src={leftArrow} alt="left-arrow-icon" onClick={onClose} />

          <h1 className={styles.tittleHead}>
            {children} {element.billCode}
          </h1>
          <div className={styles.statusIndicator}>
            {element.status === 'enabled' ? (
              <img src={enabledIcon} alt="enabled-icon" onClick={onClose} />
            ) : element.status === 'disabled' ? (
              <img src={disabledIcon} alt="disabled-icon" onClick={onClose} />
            ) : (
              <img src={pendingIcon} alt="pending-icon" onClick={onClose} />
            )}
            <span>
              {element.status === 'enabled'
                ? 'Activa'
                : element.status === 'disabled'
                ? 'Inactiva'
                : 'other'}
            </span>
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <div className={styles.detailsContainer}>
            <div className={styles.detailsInOne}>
              <div className={styles.detailsHead}>General</div>
              <div className={styles.detailsContent}>
                <div className={styles.itemContainer}>
                  <h5>Fecha de creación</h5>
                  <h5>{element.createdAt.slice(1, 16)}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Tipo de venta</h5>
                  <h5>{element.sellType}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Mesa</h5>
                  <h5>
                    # <img src={arrowRightSmall} alt="arror-icon-small" /> #
                  </h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Abierta por</h5>
                  <h5>{element.user}</h5>
                </div>
              </div>
            </div>
            <div className={styles.detailsInOne}>
              <div className={styles.detailsHead}>Cuenta</div>
              <div className={styles.detailsContentTwo}>
                <div className={styles.itemContainer}>
                  <h5>Nombre de cuenta</h5>
                  <h5>-</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Número de comensales</h5>
                  <h5>#valor</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Número de notas</h5>
                  <h5>-</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Comentarios</h5>
                  <h5>
                    #Comentario <img src={commentIcon} alt="comment-icon" />
                  </h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Cantidad de productos</h5>
                  <h5>#valor</h5>
                </div>
              </div>
            </div>
            <div className={styles.detailsInOne}>
              <div className={styles.detailsHead}>Descuento de la cuenta</div>
              <div className={styles.detailsContentTwo}>
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
            <div className={styles.detailsInOne}>
              <div className={styles.detailsHead}>Cancelacion de la cuenta</div>
              <div className={styles.detailsContentTwo}>
                <div className={styles.itemContainer}>
                  <h5>Cancelada por</h5>
                  <h5>{element.user}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Cancelada a</h5>
                  <h5>{element.user}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Motivo de cancelación</h5>
                  <h5>
                    #valor
                    <img src={commentIcon} alt="comment-icon" />
                  </h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Hora de cancelación</h5>
                  <h5>12:00</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Monto cancelado</h5>
                  <h5>${element.checkTotal}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.detailsFirst}></div>
          <div className={styles.detailsFirst}></div>
          <div className={styles.detailsFirst}></div>
        </div>
        <div className={styles.sectionThree}>
          <div className={styles.totalTwo}>
            <h4>Subtotal: ${element.checkTotal}</h4>
            <h4>Descuento: $0.00</h4>
            <h4>Cancelado: $0.00</h4>
          </div>
          <div className={styles.totalOne}>
            <h4>Total de la cuenta</h4>
            <h3>${element.checkTotal}</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
