import { useDispatch, useSelector } from 'react-redux';
import styles from './saveCategories.module.css';
import ConfirmLoader from '../../../../../loaders/confirmsLoader/confirmsLoader';
import checkIcon from '../../../../../../assets/public/checkIcon.svg';

interface Props {
  isOpen: any;
  onClose: any;
  children: any;
  actionType: () => void;
}

export default function SaveCategoriesModal({
  isOpen,
  onClose,
  children,
  actionType,
}: Props) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.categories);
  const { allCategories } = useSelector((state) => state.categories);

  if (!isOpen) return null;
  if (!loading && allCategories && allCategories.length > 0) {
    setTimeout(async () => {
      dispatch(actionType());
      onClose();
    }, 1500);
  }
  return (
    <div className={styles.container}>
      {loading ? (
        <ConfirmLoader />
      ) : allCategories && allCategories.length > 0 ? (
        <div className={styles.modal}>
          <img src={checkIcon} alt="check-icon" />
          <h1 className={styles.tittle}>{children}</h1>
        </div>
      ) : null}
    </div>
  );
}
