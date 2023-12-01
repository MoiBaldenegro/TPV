// styles
import styles from './cell.module.css';
import { useDispatch } from 'react-redux';
import { updateCell } from '../../../../redux/actions/tableExcels/updateCell';

const Cell = ({ value, row, col }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = e.target.value;
    dispatch(updateCell(row, col, newValue));
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className={styles.inputCell}
    />
  );
};

export default Cell;
