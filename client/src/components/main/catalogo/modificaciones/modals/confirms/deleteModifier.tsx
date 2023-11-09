import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../categorias/modals/confirms/saveCategories.module.css';
import ConfirmLoader from '../../../../../loaders/confirmsLoader/confirmsLoader';
import checkIcon from '../../../../../../assets/public/checkIcon.svg';

interface Props {
  isOpen: any;
  onClose: any;
  children: any;
  actionType: () => void;
}

export default function DeletedModifierModal({
  isOpen,
  onClose,
  children,
  actionType,
}: Props) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.modifiers);
  const { error } = useSelector((state) => state.modifiers);

  if (!isOpen) return null;
  if (!loading && !error) {
    setTimeout(async () => {
      dispatch(actionType());
      onClose();
    }, 1500);
  }
  return (
    <div className={styles.container}>
      {loading ? (
        <ConfirmLoader />
      ) : error ? (
        <div className={styles.modal}>
          <h1 className={styles.tittle}>No se pudo eliminar el modificador</h1>
          <button onClick={onClose}>X</button>
        </div>
      ) : (
        <div className={styles.modal}>
          <img src={checkIcon} alt="check-icon" />
          <h1 className={styles.tittle}>{children}</h1>
        </div>
      )}
    </div>
  );
}
