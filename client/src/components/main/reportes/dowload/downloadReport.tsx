import styles from './download.module.css';
import downloadIcon from '../../../../assets/reportsMenu/downloadIcon.svg';
import { useState } from 'react';
interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}
export default function DownloadReport({ isOpen, onClose, children }: Props) {
  const [form, setForm] = useState();
  return (
    <main className={styles.screen}>
      <div>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h3>{children}</h3>
        <div>
          <div>
            <h4></h4>
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <div>
          <button>
            <img src={downloadIcon} alt="save-icon" />
            Descargar
          </button>
        </div>
      </div>
    </main>
  );
}
