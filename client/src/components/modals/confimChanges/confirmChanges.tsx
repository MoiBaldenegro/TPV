import styles from './confirmChanges.module.css';

import { useDispatch, useSelector } from 'react-redux';
import ConfirmLoader from '../../../components/loaders/confirmsLoader/confirmsLoader';
import checkIcon from '../../../assets/public/checkIcon.svg';

interface Props {
  loading: any;
  errors: any;
  isOpen: any;
  onClose: any;
  children: any;
  actionType: () => void;
}

export default function ConfirmChangesModal({
  loading,
  errors,
  isOpen,
  onClose,
  children,
  actionType,
}: Props) {
  const dispatch = useDispatch();

  if (!isOpen) return null;
  if (!loading && !errors) {
    setTimeout(async () => {
      dispatch(actionType());
      onClose();
    }, 1500);
  }
  return (
    <div className={styles.container}>
      {loading ? (
        <ConfirmLoader />
      ) : errors ? (
        <div>
          <h1>hay errores</h1>
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
