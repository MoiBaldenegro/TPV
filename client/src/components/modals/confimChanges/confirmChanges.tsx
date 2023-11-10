import styles from './confirmChanges.module.css';

import { useDispatch, useSelector } from 'react-redux';
import ConfirmLoader from '../../../components/loaders/confirmsLoader/confirmsLoader';
import checkIcon from '../../../assets/public/checkIcon.svg';

interface Props {
  isOpen: any;
  onClose: any;
  children: any;
  actionType: () => void;
}

export default function ConfirmChangesModal({
  isOpen,
  onClose,
  children,
  actionType,
}: Props) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.categories);
  const { error } = useSelector((state) => state.categories);

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
